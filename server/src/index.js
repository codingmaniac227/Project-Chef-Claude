import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'

const app = express()
const PORT = process.env.PORT || 3001

// CORS: allow localhost in dev; set ALLOWED_ORIGIN in prod (e.g., https://your-site.netlify.app)
const ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173'
app.use(cors({ origin: ORIGIN }))
app.use(express.json({ limit: '1mb' }))

// ----- Utility -----
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients a user has and suggests a recipe using some or all of them.
You don't need every ingredient. You may add a few extra common items.
Respond in Markdown with clear headings and bullet points.
`

function toList(v) {
  if (Array.isArray(v)) return v
  if (v == null) return []
  return [String(v)]
}

// ----- Routes -----

// Optional root check
app.get('/', (_req, res) => res.send('API is running'))

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() })
})

// Echo (for testing POST + JSON parsing)
app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body })
})

// Mock recipe generator (kept for compatibility / fallback)
app.post('/api/generate', (req, res) => {
  const { ingredients = [] } = req.body || {}
  const list = toList(ingredients).join(', ') || 'your ingredients'
  const text = `# Quick Idea
Try a simple skillet with **${list}**.
- sauté aromatics
- add main protein/veg
- finish with pasta/heavy cream/tomato as needed
Enjoy!`
  res.json({ text })
})

// Real Anthropic-backed generator
app.post('/api/generate/anthropic', async (req, res) => {
  try {
    const { ingredients = [] } = req.body || {}
    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: 'Server missing ANTHROPIC_API_KEY' })
    }

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const list = toList(ingredients).join(', ') || 'common pantry items'

    const msg = await anthropic.messages.create({
      // Use the latest Sonnet model available to your account/region if different
      model: 'claude-3-5-sonnet-20240620',
      max_tokens: 800,
      system: SYSTEM_PROMPT,
      messages: [
        { role: 'user', content: `I have ${list}. Please give me a recipe you'd recommend I make!` }
      ]
    })

    const text = msg?.content?.[0]?.text ?? ''
    res.json({ text })
  } catch (err) {
    console.error('Anthropic error:', err)
    res.status(500).json({ error: 'generation failed' })
  }
})

// ----- Start -----
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
  console.log(`CORS allowed origin: ${ORIGIN}`)
})
