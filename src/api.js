const BASE = 'https://travelx-2-2liv.onrender.com'

export async function apiPost(endpoint, data, token) {
  const headers = { 'Content-Type': 'application/json' }
  if (token) headers.Authorization = `Bearer ${token}`
  const res = await fetch(`${BASE}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || 'Something went wrong')
  return json
}

export async function apiGet(endpoint, token) {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}
  const res = await fetch(`${BASE}${endpoint}`, { headers })
  const json = await res.json()
  if (!res.ok) throw new Error(json.message || 'Something went wrong')
  return json
}
