import 'dotenv/config'
import express from 'express'
import cors from 'cors'
// Optional SDKs if/when you call them:
// import Anthropic from '@anthropic-ai/sdk'
// import { HfInference } from '@huggingface/inference'

const app = express()
const PORT = process.env.PORT || 3001

// If you’re using Vite proxy, you can skip cors() entirely.
// If not proxying, allow your Vite dev origin:
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json({ limit: '1mb' }))

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

// Example echo endpoint (test round-trip)
app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body })
})

// Placeholder AI endpoint (fill in later)
/*
app.post('/api/generate', async (req, res) => {
  try {
    const { provider = 'anthropic', prompt = '' } = req.body
    // call Anthropic or HF here, return JSON
    res.json({ provider, text: 'todo' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'generation failed' })
  }
})
*/

app.post('/api/generate', (req, res) => {
  const { ingredients = [] } = req.body || {}
  const list = ingredients.join(', ')
  const text =
`# Quick Idea
Try a simple skillet with **${list}**.
- sauté aromatics
- add main protein/veg
- finish with pasta/heavy cream/tomato as needed
Enjoy!`
  res.json({ text })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
