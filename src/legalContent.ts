export type LegalSection = {
  id: string
  title: string
  body?: string[]
  bullets?: string[]
  table?: {
    headers: string[]
    rows: string[][]
  }
}

export type LegalPageContent = {
  slug: string
  eyebrow: string
  title: string
  summary: string
  updated: string
  glance: string[]
  sections: LegalSection[]
}

const supportEmail = 'hello@phario.app'

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

export function getLegalPage(pathname: string): LegalPageContent | undefined {
  return legalPages[normalizePath(pathname)]
}

export const legalPages: Record<string, LegalPageContent> = {
  '/privacy': {
    slug: 'privacy',
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    summary: 'How Phario handles app, account, purchase, prescription-image, clinical-context, support, and website data.',
    updated: 'June 29, 2026',
    glance: [
      'Prescription image upload is available when you choose a prescription image for OCR-assisted extraction.',
      'Phario does not sell health-related data or use it for advertising.',
      'Website analytics are not currently enabled on phario.app.',
      `Privacy requests can be sent to ${supportEmail}.`,
    ],
    sections: [
      {
        id: 'operator',
        title: 'Operator and Contact',
        body: [
          `Phario is operated by the individual developer submitting the app unless a company entity is formed and published in a later update. You can contact Phario at ${supportEmail}.`,
          'This policy covers the Phario iOS app and the phario.app website. It is written for the first App Store version with manual drug lookup, optional patient context, subscription access, prescription-image OCR, and backend interaction screening.',
        ],
      },
      {
        id: 'data',
        title: 'Data We Handle',
        bullets: [
          'Account data, such as email address, sign-in identifiers, and authentication session data.',
          'Drug-check data, such as selected drugs, routes/forms, interaction results, and manually entered clinical context relevant to interaction screening.',
          'Prescription-image data, such as an image you choose from your photo library for OCR-assisted medication and diagnosis extraction. Prescription images may contain patient names, prescriber details, medication names, dates, and other health-related information visible in the image.',
          'OCR and extraction results, such as recognized medications, diagnoses, demographic fields, and extracted text or structured fields returned by the extraction service.',
          'Purchase data, such as subscription status, entitlement state, App Store transaction status, and RevenueCat customer identifiers.',
          'Account data stored in Firebase/Firestore when configured, such as the Clerk-linked user ID, email, subscription status, and free-check quota state.',
          'Support and diagnostics data, such as support messages, app version, device/platform details, error state, and support IDs you choose to send us.',
          'Website data. The current website does not intentionally run non-essential analytics or advertising cookies. If analytics are enabled later, this policy and any required consent controls will be updated before those scripts run for users who require consent.',
        ],
      },
      {
        id: 'image-scanning',
        title: 'Prescription Images and OCR',
        body: [
          'When you choose a prescription image from your photo library, Phario uploads a normalized image to the Phario backend for OCR-assisted extraction. The app does not access your photo library unless you choose an image through the picker.',
          'The backend may use OCR, vision, or language-model services to identify medications, diagnoses, and limited patient-demographic details visible on the prescription. You should review and edit extracted items before running an interaction check.',
          'Do not upload a prescription image unless you have permission to process the information it contains. Avoid uploading identifiers that are not needed for the check where you can reasonably crop or omit them before upload.',
        ],
      },
      {
        id: 'use',
        title: 'How We Use Data',
        bullets: [
          'Provide drug lookup, interaction checking, and optional patient-context personalization.',
          'Extract medication and diagnosis candidates from prescription images you choose to submit.',
          'Authenticate accounts and protect access to account and subscription features.',
          'Manage purchases, restore purchases, and determine Pro entitlement status.',
          'Respond to support, privacy, deletion, and clinical-content correction requests.',
          'Maintain security, troubleshoot bugs, and improve app reliability.',
        ],
      },
      {
        id: 'sharing',
        title: 'Third Parties and Subprocessors',
        body: [
          'Phario uses service providers for authentication, purchases, hosting, app data storage, backend screening, OCR/extraction, public drug-data lookup, and support operations. These providers process data only for the purposes needed to operate Phario.',
          'The current production subprocessor and data-source list is maintained at /subprocessors. Prescription images and extracted clinical text may be processed by the backend and its OCR or language-model provider when you choose to submit an image.',
        ],
      },
      {
        id: 'rights',
        title: 'Your Choices and Rights',
        bullets: [
          'You may request access, correction, deletion, portability, or restriction of personal data where those rights apply.',
          'You may withdraw consent for optional clinical-context processing by not entering that data or by clearing it in the app where available.',
          'You may avoid prescription-image processing by using manual drug search instead of the photo-library OCR feature.',
          'You may request account deletion inside the app. If you need help, contact support from the account email address.',
          'California, EU, and UK users may have additional rights under applicable privacy laws. Phario will honor valid requests according to those laws.',
        ],
      },
      {
        id: 'retention',
        title: 'Retention and Deletion',
        body: [
          'Phario retains account and purchase records while needed to provide the service, manage subscriptions, prevent fraud, comply with law, and resolve support issues. Local check history may be stored on your device. Backend request records, OCR artifacts, model traces, and operational logs should be minimized and retained only as needed for security, debugging, quality, compliance, and abuse prevention.',
          'When an account deletion request is completed, Phario deletes or anonymizes account-linked app data where legally and technically possible, including Clerk account data and Phario-controlled app records covered by the deletion flow. Some purchase, tax, security, operational, model-provider, dispute, or legal-retention records may be retained when required by Apple, service providers, or law.',
        ],
      },
      {
        id: 'transfers',
        title: 'International Processing',
        body: [
          'Phario and its providers may process data in countries other than your country of residence. Where required, Phario relies on appropriate contractual, legal, or technical safeguards for international processing and transfer.',
        ],
      },
      {
        id: 'changes',
        title: 'Changes',
        body: [
          'Material changes will be reflected by updating the "Last updated" date. If a change materially affects privacy practices, Phario will update this page and related App Store privacy information as required.',
          'Change history: June 29, 2026 - updated for prescription-image OCR upload, backend alert generation, Firebase/Firestore app data, and expanded subprocessor disclosure. June 21, 2026 - initial App Store submission privacy policy for production v1.',
        ],
      },
    ],
  },
  '/terms': {
    slug: 'terms',
    eyebrow: 'Terms of Use',
    title: 'Terms of Use',
    summary: 'The rules for using Phario, including medical limitations, subscription handling, and Apple EULA coverage.',
    updated: 'June 29, 2026',
    glance: [
      'Phario is decision-support and reference software, not medical advice.',
      'Users must be 17 or older.',
      'Prescription-image OCR is optional and must be reviewed before use.',
      'Subscription pricing and renewal terms are shown by Apple before purchase.',
    ],
    sections: [
      {
        id: 'acceptance',
        title: 'Acceptance',
        body: [
          'By using Phario, you agree to these Terms and the Privacy Policy. If you do not agree, do not use the app.',
          'Your use of the iOS app is also subject to Apple\'s Licensed Application End User License Agreement unless a valid custom license agreement applies.',
        ],
      },
      {
        id: 'audience',
        title: 'Intended Audience',
        body: [
          'Phario is intended for users who are 17 or older. It is primarily built for clinicians and medication-safety workflows. Patients and caregivers may use Phario only for education and to prepare questions for qualified clinicians.',
          'Phario v1 is not intended for pediatric-specific dosing, pediatric treatment decisions, or pediatric clinical management unless a qualified clinician independently verifies the result and source basis.',
        ],
      },
      {
        id: 'medical',
        title: 'Medical Disclaimer',
        bullets: [
          'Phario does not diagnose, treat, prescribe, cure, or prevent disease.',
          'Phario does not replace professional medical judgment, pharmacist review, product labeling, institutional protocols, or emergency care.',
          'Do not use Phario for emergencies or time-critical clinical decisions. Contact local emergency services for emergencies.',
          'Users are responsible for checking original sources, patient context, and clinical appropriateness before acting on any information.',
        ],
      },
      {
        id: 'methodology',
        title: 'Methodology and Limitations',
        body: [
          'Phario uses curated interaction records, public drug-label sources, RxNorm/RxNav, OpenFDA, DailyMed, backend alert generation, OCR/extraction for images you submit, and app clinical rules. The methodology and limitations are described at /methodology.',
          'Drug data can be incomplete, outdated, ambiguous, or inappropriate for a particular patient. Phario results must be independently reviewed before use.',
        ],
      },
      {
        id: 'ocr',
        title: 'Prescription Images and Extracted Text',
        body: [
          'If you choose a prescription image for OCR-assisted extraction, you are responsible for having the right to submit that image and for reviewing extracted medications, diagnoses, and patient fields before using them.',
          'OCR and language-model extraction can be wrong, incomplete, or ambiguous. Phario may miss handwriting, abbreviations, local brand names, dose details, patient identifiers, or diagnosis context. Do not rely on extracted text without independent review.',
        ],
      },
      {
        id: 'subscriptions',
        title: 'Subscriptions and Purchases',
        body: [
          'Phario may offer auto-renewable subscriptions and non-consumable purchases through Apple In-App Purchase. Apple displays the price, billing period, trial details if any, renewal terms, and confirmation before purchase.',
          'Subscriptions renew unless canceled through Apple before renewal. Billing, cancellation, refunds, and subscription management are handled by Apple and App Store account settings.',
          'A lifetime purchase means access for the lifetime of the Phario app/service while it is commercially offered and technically supported, subject to lawful discontinuation with reasonable notice where practicable.',
        ],
      },
      {
        id: 'responsibilities',
        title: 'User Responsibilities',
        bullets: [
          'Enter accurate drug and clinical-context information.',
          'Review OCR-extracted medications, diagnoses, and patient fields before running or relying on a check.',
          'Avoid entering unnecessary identifiers or confidential information that is not needed for a check.',
          'Use Phario lawfully and only for legitimate medication-safety, reference, education, or clinician-discussion purposes.',
          'Do not attempt to reverse engineer, overload, scrape, or misuse Phario or its data sources.',
        ],
      },
      {
        id: 'warranty',
        title: 'No Warranty and Limitation of Liability',
        body: [
          'Phario is provided "as is" and "as available." To the maximum extent permitted by law, Phario disclaims warranties of accuracy, completeness, fitness for a particular purpose, and uninterrupted availability.',
          'To the maximum extent permitted by law, Phario is not liable for clinical decisions, patient outcomes, lost data, lost profits, or indirect, incidental, special, consequential, or punitive damages arising from use of the app.',
        ],
      },
      {
        id: 'changes',
        title: 'Changes',
        body: [
          'These Terms may be updated as Phario changes. Material updates will be reflected by changing the "Last updated" date.',
          'Change history: June 29, 2026 - updated for optional prescription-image OCR and backend alert generation. June 21, 2026 - initial App Store submission terms for production v1.',
        ],
      },
    ],
  },
  '/support': {
    slug: 'support',
    eyebrow: 'Support',
    title: 'Phario Support',
    summary: 'How to reach Phario for account, subscription, deletion, privacy, and clinical-content correction help.',
    updated: 'June 21, 2026',
    glance: [
      `Email ${supportEmail} for support.`,
      'For emergencies, contact local emergency services instead of Phario.',
      'For medication decisions, consult a qualified clinician.',
      'Apple handles App Store billing and refund requests.',
    ],
    sections: [
      {
        id: 'contact',
        title: 'Contact',
        body: [
          `Email ${supportEmail}. We aim to respond promptly. Include your app version, device model, account email, and any visible support ID if your question involves purchases.`,
        ],
      },
      {
        id: 'topics',
        title: 'Common Support Topics',
        bullets: [
          'Account sign-in or account deletion.',
          'Restore purchase, manage subscription, or cancel subscription.',
          'Drug lookup or interaction-result questions.',
          'Privacy, access, correction, or deletion requests.',
          'Clinical-content correction requests with source details.',
        ],
      },
      {
        id: 'subscriptions',
        title: 'Subscriptions',
        body: [
          'Subscriptions and refunds are handled by Apple. Use App Store account settings to manage or cancel a subscription. In the app, use Restore Purchases if your purchase does not appear after signing in.',
        ],
      },
      {
        id: 'clinical',
        title: 'Clinical Safety',
        body: [
          'Phario support cannot provide medical advice. For urgent symptoms, suspected overdose, allergic reaction, or emergency medication concern, contact local emergency services, poison control, or a qualified healthcare professional immediately.',
        ],
      },
      {
        id: 'deletion',
        title: 'Deletion and Privacy Requests',
        body: [
          `Use the in-app account deletion control when available. If you need help, email ${supportEmail} from the account email address with the subject "Phario data deletion request."`,
        ],
      },
      {
        id: 'changes',
        title: 'Changes',
        body: ['Change history: June 21, 2026 - initial App Store support page for production v1.'],
      },
    ],
  },
  '/subprocessors': {
    slug: 'subprocessors',
    eyebrow: 'Subprocessors',
    title: 'Production Subprocessors',
    summary: 'The providers and public data sources Phario expects to use for production v1 operations, OCR/extraction, authentication, purchases, hosting, and drug-data lookup.',
    updated: 'June 29, 2026',
    glance: [
      'Prescription-image OCR and backend alert generation may involve backend and AI/model providers.',
      'RxNav/RxNorm, OpenFDA, and DailyMed are used as public drug-data sources.',
      'This list changes when material providers change.',
    ],
    sections: [
      {
        id: 'table',
        title: 'Subprocessor Table',
        table: {
          headers: ['Provider', 'Purpose', 'Data category', 'Region', 'Privacy / DPA'],
          rows: [
            ['Clerk', 'Authentication and account management', 'Account identifiers, email, session data', 'United States / global infrastructure', 'clerk.com/legal'],
            ['Google Firebase / Firestore', 'App data plane, user document, quota/subscription state when configured', 'Clerk-linked user ID, email, subscription/quota records, authentication bridge data', 'Google global infrastructure', 'firebase.google.com/support/privacy'],
            ['RevenueCat', 'Subscription entitlement management', 'Purchase status, app user ID, entitlement data', 'United States / global infrastructure', 'revenuecat.com/privacy'],
            ['Apple', 'App Store distribution and in-app purchase billing', 'Apple account billing and transaction data', 'Apple infrastructure', 'apple.com/legal/privacy'],
            ['Google', 'Optional Google sign-in provider through Clerk', 'Google OAuth identity data selected by the user', 'Google global infrastructure', 'policies.google.com/privacy'],
            ['Vercel', 'Website hosting and serverless account-deletion endpoint', 'Website request data, endpoint request metadata', 'Global infrastructure', 'vercel.com/legal/privacy-policy'],
            ['Cloudflare', 'Backend alert/OCR API hosting and network delivery', 'Request metadata, selected drug/diagnosis/patient-context payloads, prescription images submitted for OCR', 'Cloudflare global infrastructure', 'cloudflare.com/privacypolicy'],
            ['OpenAI', 'OCR, vision, language-model extraction, or alert-generation support when used by the backend', 'Prescription images, extracted text, selected medication/diagnosis/patient-context payloads, model prompts and outputs', 'OpenAI infrastructure', 'openai.com/policies/privacy-policy'],
            ['U.S. National Library of Medicine RxNav/RxNorm', 'Drug identity normalization and ingredient lookup', 'Drug names, RxCUIs, request metadata', 'United States government infrastructure', 'nlm.nih.gov/privacy.html'],
            ['OpenFDA / DailyMed', 'Public drug-label and medication-reference data sources', 'Drug names, labels, identifiers, request metadata where accessed', 'United States government infrastructure', 'open.fda.gov/privacy and dailymed.nlm.nih.gov'],
          ],
        },
      },
      {
        id: 'changes',
        title: 'Changes',
        body: [
          'Phario updates this page when a material production provider or data-source dependency changes.',
          'Change history: June 29, 2026 - added Firebase/Firestore, Cloudflare backend, OpenAI, RxNav/RxNorm, OpenFDA/DailyMed, and Google sign-in disclosure. June 21, 2026 - initial subprocessor list for production v1.',
        ],
      },
    ],
  },
  '/methodology': {
    slug: 'methodology',
    eyebrow: 'Methodology',
    title: 'Methodology and Limitations',
    summary: 'How Phario produces drug-interaction decision-support information and what users must independently verify.',
    updated: 'June 29, 2026',
    glance: [
      'Phario is reference and decision-support software, not diagnosis or treatment.',
      'Users can manually select drugs or choose a prescription image for OCR-assisted extraction.',
      'Every result should be independently reviewed against the patient and source context.',
    ],
    sections: [
      {
        id: 'sources',
        title: 'Sources',
        bullets: [
          'Curated Phario interaction records and clinical rules.',
          'RxNorm/RxNav for normalized drug identity and naming support.',
          'OpenFDA and DailyMed label information for public drug-label context.',
          'Backend alert-generation logic and OCR/extraction services for prescription images you choose to submit.',
          'Reviewed app data for severity, mechanism, monitoring, and action-category presentation.',
        ],
      },
      {
        id: 'logic',
        title: 'How Results Are Produced',
        body: [
          'Users manually select drugs or choose a prescription image for OCR-assisted extraction. OCR results are prefilled for user review; users should edit the drug, diagnosis, and patient-context chips before checking.',
          'Phario normalizes selected drugs, resolves active ingredients where possible, sends selected drugs/ingredients, diagnoses, and optional patient context to the backend alert service, checks available pair records, considers route/form where available, and may apply optional clinical context such as age, renal function, hepatic status, INR state, pregnancy, and selected risk factors.',
          'Results are presented as severity-graded alerts and action categories intended to help users review the interaction basis before making an independent clinical decision.',
        ],
      },
      {
        id: 'independent-review',
        title: 'Independent Review',
        bullets: [
          'Review the drug pair and checked ingredient identity.',
          'Review OCR-extracted medication and diagnosis names before running the check.',
          'Review the mechanism, severity, action category, and monitoring recommendation.',
          'Review patient factors and any missing or assumed context.',
          'Consult original labeling, institutional protocols, pharmacy references, and clinical judgment before acting.',
        ],
      },
      {
        id: 'limitations',
        title: 'Limitations',
        bullets: [
          'Drug coverage may be incomplete, especially for newly approved products, uncommon products, supplements, local formulations, or ambiguous brand names.',
          'OCR and language-model extraction may misread handwriting, miss medications, confuse diagnoses, omit context, or extract patient identifiers that users did not intend to submit.',
          'Public label data may be incomplete, outdated, duplicated, or difficult to map to a specific clinical context.',
          'Route, dose, duration, organ function, pregnancy, age, and comorbidities can materially change clinical meaning.',
          'Phario v1 is not designed for pediatric-specific dosing or pediatric treatment decisions.',
          'Phario is not for emergencies or time-critical clinical decisions.',
        ],
      },
      {
        id: 'changes',
        title: 'Changes',
        body: ['Change history: June 29, 2026 - updated for optional prescription-image OCR, backend alert generation, and expanded data-source disclosure. June 21, 2026 - initial methodology page for production v1.'],
      },
    ],
  },
}

export const legalPageOrder = ['/privacy', '/terms', '/support', '/subprocessors', '/methodology']
