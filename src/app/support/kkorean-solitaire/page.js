export const metadata = {
  title: 'Kkorean Solitaire — Support',
  description: 'Kkorean Solitaire support and contact information.',
}

export default function SolitaireSupport() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '160px 24px 80px', lineHeight: 1.8, overflowWrap: 'anywhere' }}>
      <h1>Kkorean Solitaire</h1>
      <p>ATORZ Studio · 에이터즈(Atorz)</p>
      <section lang="ko" aria-labelledby="support-ko">
        <h2 id="support-ko">지원 안내</h2>
        <p>화투·십이지 카드로 즐기는 솔리테어 게임입니다. 일반 게임과 일일 도전, 힌트·실행 취소, 로컬 기록을 제공합니다.</p>
        <p>문의: <a href="mailto:atorzstudio@gmail.com">atorzstudio@gmail.com</a></p>
        <p>문의 이메일·내용·첨부파일은 문의 해결 후 30일 이내 삭제합니다. 법령상 보존 의무가 있으면 해당 기간 보관합니다. 개인정보 열람·정정·삭제 요청도 위 이메일로 보내 주세요.</p>
        <p>문제 신고 시 기기 모델, iOS 버전, 앱 버전, 발생 화면과 재현 순서를 알려 주세요. 스크린샷에서는 개인정보를 가려 주세요. 비밀번호·세금 식별번호·결제정보는 보내지 마세요.</p>
        <p>진행과 설정은 기기에 저장됩니다. 현재 계정 로그인이나 자체 클라우드 동기화는 제공하지 않습니다. 앱 삭제 전 기록을 복구할 수 있다고 가정하지 마세요. 광고가 준비되지 않아도 게임을 계속할 수 있도록 설계했습니다.</p>
      </section>
      <hr />
      <section lang="en" aria-labelledby="support-en">
        <h2 id="support-en">Support</h2>
        <p>A solitaire game with Hwatu and zodiac card sets, regular games, daily challenges, hints, undo, and local records.</p>
        <p>Contact: <a href="mailto:atorzstudio@gmail.com">atorzstudio@gmail.com</a></p>
        <p>Support messages and attachments are deleted within 30 days after resolution, unless retention is required by law. You may also send personal data access, correction or deletion requests to this address.</p>
        <p>Please include your device model, iOS version, app version, and steps to reproduce the issue. Remove personal information from screenshots. Do not send passwords, tax identification numbers, or payment information.</p>
        <p>Progress and preferences are stored on your device. The current version does not provide account sign-in or our own cloud synchronization. Do not assume records can be restored after deleting the app. The game is designed to continue when an ad is unavailable.</p>
      </section>
    </main>
  )
}
