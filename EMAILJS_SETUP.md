# EmailJS 설정 가이드

상담 신청 폼에서 이메일 전송 기능을 활성화하기 위한 EmailJS 설정 방법입니다.

## 1. EmailJS 계정 생성 및 설정

### 1.1 EmailJS 가입

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. 무료 계정으로 가입

### 1.2 이메일 서비스 연결

1. EmailJS 대시보드에서 "Email Services" 클릭
2. "Add New Service" 클릭
3. "Gmail" 또는 "Outlook" 선택
4. 이메일 계정으로 로그인하여 연결

### 1.3 이메일 템플릿 생성

1. "Email Templates" 클릭
2. "Create New Template" 클릭
3. 다음 템플릿 내용 사용:

```html
제목: [빅스 부산캠퍼스] 새로운 상담 신청이 접수되었습니다 내용: 안녕하세요,
새로운 상담 신청이 접수되었습니다. === 상담 신청 정보 === 보호자 이름:
{{from_name}} 이메일: {{from_email}} 전화번호: {{phone}} 아이 이름:
{{child_name}} 아이 나이: {{child_age}} === 문의 내용 === {{message}} === 연락처
정보 === 회신 이메일: {{reply_to}} 빠른 시일 내에 연락드리겠습니다. 감사합니다.
빅스 부산캠퍼스
```

## 2. 코드 설정

### 2.1 ContactSection.tsx 파일 수정

`src/components/ContactSection.tsx` 파일에서 다음 값들을 실제 값으로 교체하세요:

```typescript
// EmailJS 초기화
useEffect(() => {
  emailjs.init("YOUR_PUBLIC_KEY"); // ← 실제 Public Key로 교체
}, []);

// handleSubmit 함수 내부
await emailjs.send(
  "YOUR_SERVICE_ID", // ← 실제 Service ID로 교체
  "YOUR_TEMPLATE_ID", // ← 실제 Template ID로 교체
  templateParams
);
```

### 2.2 필요한 값들 찾는 방법

1. **Public Key**: EmailJS 대시보드 → Account → API Keys
2. **Service ID**: EmailJS 대시보드 → Email Services → 생성한 서비스의 ID
3. **Template ID**: EmailJS 대시보드 → Email Templates → 생성한 템플릿의 ID

## 3. 테스트

설정 완료 후:

1. 개발 서버 실행: `npm run dev`
2. Contact 페이지에서 폼 작성 및 제출
3. `skyxxx9339@naver.com`으로 이메일이 전송되는지 확인

## 4. 보안 주의사항

- Public Key는 클라이언트 사이드에서 사용되므로 공개되어도 안전합니다
- 실제 프로덕션에서는 환경 변수를 사용하는 것을 권장합니다
- 무료 계정의 경우 월 200건의 이메일 전송 제한이 있습니다

## 5. 문제 해결

### 이메일이 전송되지 않는 경우:

1. EmailJS 계정이 활성화되어 있는지 확인
2. 이메일 서비스가 올바르게 연결되어 있는지 확인
3. 템플릿 ID와 서비스 ID가 정확한지 확인
4. 브라우저 콘솔에서 오류 메시지 확인

### 추가 도움이 필요한 경우:

- EmailJS 공식 문서: https://www.emailjs.com/docs/
- EmailJS 커뮤니티: https://community.emailjs.com/
