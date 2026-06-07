// Central API helper — all backend calls go through Render deployed backend

const BASE = 'https://travelx-2-2liv.onrender.com'

export async function apiPost(endpoint, body) {
  const res = await fetch(`${BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Something went wrong')
  return data
}

export async function apiGet(endpoint) {
  const token = localStorage.getItem('tx_token')
  const res = await fetch(`${BASE}${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Something went wrong')
  return data
}
