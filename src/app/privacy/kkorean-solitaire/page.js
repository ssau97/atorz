import PolicyContent from './PolicyContent'

export const metadata = {
  title: 'Kkorean Solitaire — Privacy Policy',
  description: 'Privacy policy and privacy contact for Kkorean Solitaire in 13 languages.',
}

export default function SolitairePrivacy() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '160px 24px 80px', lineHeight: 1.8, overflowWrap: 'anywhere' }}>
      <h1>Kkorean Solitaire — Privacy Policy</h1>
      <p>에이터즈(Atorz) · ATORZ Studio</p>
      <PolicyContent />
    </main>
  )
}
