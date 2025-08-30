// client/src/api.js
const API_BASE = import.meta.env.PROD
  ? import.meta.env.VITE_API_BASE_URL   // set on Netlify/Vercel in prod
  : ''                                  // dev uses Vite proxy

export async function getRecipeFromChefClaude(ingredients) {
  const res = await fetch(`${API_BASE}/api/generate/anthropic`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients })
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json() // { text }
}

export async function getRecipeFromMistral(ingredients) {
  const res = await fetch(`${API_BASE}/api/generate/mistral`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients })
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json() // { text }
}
