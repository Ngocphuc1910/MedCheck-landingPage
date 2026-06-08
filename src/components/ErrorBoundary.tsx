import { Component, type ReactNode } from 'react'

interface Props { children: ReactNode; name: string }
interface State { error: Error | null }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }
  static getDerivedStateFromError(error: Error): State { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, background: '#fee', border: '1px solid red', margin: 8, borderRadius: 8 }}>
          <strong>Crash in &lt;{this.props.name}&gt;:</strong>
          <pre style={{ marginTop: 8, fontSize: 12, whiteSpace: 'pre-wrap' }}>{this.state.error.message}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
