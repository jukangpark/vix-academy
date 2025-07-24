# Google Sheets 연동 가이드

고객 문의를 Google Sheets에 자동으로 저장하는 방법입니다.

## 1. Google Sheets 설정

### 1.1 새 Google Sheets 생성

1. [Google Sheets](https://sheets.google.com)에서 새 스프레드시트 생성
2. 시트 이름을 "고객문의"로 변경
3. 다음 헤더 추가:
   ```
   A1: 신청일시
   B1: 보호자이름
   C1: 이메일
   D1: 전화번호
   E1: 아이이름
   F1: 아이나이
   G1: 문의내용
   H1: 처리상태
   ```

### 1.2 Google Apps Script 설정

1. Google Sheets에서 "확장 프로그램" → "Apps Script" 클릭
2. 다음 코드 입력:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  const row = [
    new Date(), // 신청일시
    data.from_name, // 보호자이름
    data.from_email, // 이메일
    data.phone, // 전화번호
    data.child_name, // 아이이름
    data.child_age, // 아이나이
    data.message, // 문의내용
    "신규", // 처리상태
  ];

  sheet.appendRow(row);

  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. "배포" → "새 배포" → "웹 앱" 선택
4. 액세스 권한을 "모든 사용자"로 설정
5. 배포 후 웹 앱 URL 복사

## 2. 코드 수정

### 2.1 ContactSection.tsx 수정

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      child_name: formData.childName,
      child_age: formData.childAge,
      message: formData.message || "문의 내용이 없습니다.",
    };

    // Google Sheets에 데이터 전송
    const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus("success");
      // 폼 초기화
    } else {
      throw new Error("Failed to submit");
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

## 3. 관리자 기능

### 3.1 Google Sheets에서 관리

- 실시간으로 문의 확인
- 필터링 및 정렬
- 상태 업데이트
- 엑셀 내보내기

### 3.2 추가 기능

- 이메일 알림 설정
- 자동 응답 메일
- 통계 분석

## 장점

- ✅ 별도 서버 불필요
- ✅ 즉시 엑셀 형태로 관리
- ✅ 실시간 협업 가능
- ✅ 무료 사용 가능
- ✅ 백업 자동화

## 단점

- ❌ 인터넷 연결 필요
- ❌ 고급 기능 제한
- ❌ 커스터마이징 제한
