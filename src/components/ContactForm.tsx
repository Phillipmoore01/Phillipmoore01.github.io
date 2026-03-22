import { useState } from 'react'
import { getFormspreeEndpoint } from '../config/formspree.ts'

type ContactFormProps = {
  fallbackEmail: string
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm({ fallbackEmail }: ContactFormProps) {
  const endpoint = getFormspreeEndpoint()
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  if (!endpoint) {
    return (
      <p className="contact-form-fallback">
        Reach me at <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>
        {import.meta.env.DEV ? (
          <>
            {' '}
            — add <code className="contact-form-code">VITE_FORMSPREE_FORM_ID</code> to{' '}
            <code className="contact-form-code">.env</code> to enable the form.
          </>
        ) : (
          '.'
        )}
      </p>
    )
  }

  const formspreeUrl = endpoint

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const gotcha = String(data.get('_gotcha') ?? '')
    if (gotcha.trim() !== '') return

    setStatus('submitting')
    setErrorMessage(null)

    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      _subject: 'Portfolio contact',
      _gotcha: gotcha,
    }

    try {
      const res = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const body = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('success')
        form.reset()
        return
      }
      const msg =
        typeof body.error === 'string'
          ? body.error
          : Array.isArray(body.errors)
            ? body.errors.map((x: { message?: string }) => x.message).filter(Boolean).join(' ')
            : 'Something went wrong. Please try again or use email.'
      setErrorMessage(msg || 'Submission failed.')
      setStatus('error')
    } catch {
      setErrorMessage('Network error. Please try again or use email.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="contact-form-message contact-form-message--success" role="status">
        Thanks — your message was sent. I will get back to you soon.
      </p>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div className="contact-form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          disabled={status === 'submitting'}
        />
      </div>
      <div className="contact-form-honeypot" aria-hidden="true">
        <label htmlFor="contact-gotcha">Leave blank</label>
        <input id="contact-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
      {errorMessage ? (
        <p className="contact-form-message contact-form-message--error" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button type="submit" className="contact-form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
