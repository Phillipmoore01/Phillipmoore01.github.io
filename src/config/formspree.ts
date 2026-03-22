/** Formspree form ID from the project dashboard (same value as in `contact.html`). */
export function getFormspreeEndpoint(): string | undefined {
  const id = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim()
  if (!id) return undefined
  return `https://formspree.io/f/${id}`
}
