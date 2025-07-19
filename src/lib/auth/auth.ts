export const getLoggedInUsername = (): string | null => {
  const token = localStorage.getItem('accessToken')
  if (!token) return null

  try {
    const payload = token.split('.')[1]
    const decoded = JSON.parse(atob(payload))
    return decoded.username ?? null
  } catch (e) {
    console.error('Invalid token', e)
    return null
  }
}
