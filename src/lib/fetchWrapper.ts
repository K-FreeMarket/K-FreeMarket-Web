// localStorage에서 accessToken 가져오기
const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken')
}

// accessToken 설정
const setAccessToken = (token: string): void => {
  localStorage.setItem('accessToken', token)
}

// API 요청 옵션 타입 정의
interface FetchOptions extends Omit<RequestInit, 'body'> {
  customBody?: Record<string, unknown>
}

// 공통 fetch 함수
const apiFetch = async <T = unknown>(
  url: string,
  options?: FetchOptions,
): Promise<[number, T | null]> => {
  try {
    const accessToken = getAccessToken()

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      access: accessToken ?? '',
      ...(options?.headers ?? {}),
    }

    const fetchOptions: RequestInit = {
      ...options,
      headers,
      credentials: 'include',
      body: options?.customBody ? JSON.stringify(options.customBody) : undefined,
    }

    let response = await fetch(url, fetchOptions)

    if (response.status === 401) {
      const retryResponse = await fetch('/reissue', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!retryResponse.ok) {
        console.error('accessToken 재발급 실패')
        return [retryResponse.status, null]
      }

      const newAccessToken = retryResponse.headers.get('access')
      if (newAccessToken) {
        setAccessToken(newAccessToken)
      }

      const retryHeaders: HeadersInit = {
        'Content-Type': 'application/json',
        access: newAccessToken ?? '',
        ...(options?.headers ?? {}),
      }

      response = await fetch(url, {
        ...options,
        headers: retryHeaders,
        credentials: 'include',
        body: options?.customBody ? JSON.stringify(options.customBody) : undefined,
      })

      if (!response.ok) {
        console.error('재요청 실패')
        return [response.status, null]
      }
    }

    const data: T = await response.json()
    return [response.status, data]
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error)
    return [0, null]
  }
}

export default apiFetch
