import { createClerkClient, verifyToken } from '@clerk/backend'

function sendJson(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

function getBearerToken(req) {
  const header = req.headers.authorization || req.headers.Authorization
  if (typeof header !== 'string') return undefined
  const match = header.match(/^Bearer\s+(.+)$/i)
  return match?.[1]
}

function errorStatus(error) {
  return error?.status || error?.statusCode || error?.code
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJson(res, 405, { error: 'method_not_allowed' })
  }

  const secretKey = process.env.CLERK_SECRET_KEY
  if (!secretKey) return sendJson(res, 500, { error: 'missing_clerk_secret' })

  const token = getBearerToken(req)
  if (!token) return sendJson(res, 401, { error: 'missing_bearer_token' })

  let userId
  try {
    const payload = await verifyToken(token, { secretKey })
    userId = payload.sub
  } catch (error) {
    console.error('[account-delete] token verification failed', error)
    return sendJson(res, 401, { error: 'invalid_token' })
  }

  if (!userId) return sendJson(res, 401, { error: 'invalid_token_subject' })

  const clerk = createClerkClient({ secretKey })
  try {
    await clerk.users.deleteUser(userId)
    return sendJson(res, 200, { ok: true })
  } catch (error) {
    console.error('[account-delete] failed', error)
    if (errorStatus(error) === 404) return sendJson(res, 200, { ok: true, alreadyDeleted: true })
    return sendJson(res, 502, { error: 'delete_failed' })
  }
}
