export async function issueAccessToken() {
  try {
    const res = await fetch('http://localhost:8080/auth/token', {
      method: 'POST',
      credentials: 'include',
    })

    if (!res.ok) {
      return null // 에러 대신 null 반환
    }

    const accessToken = res.headers.get('access')
    return accessToken || null
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return null // 네트워크 오류 등도 null 처리
  }
}
