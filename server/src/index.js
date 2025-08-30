import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// Allow local during dev; set ALLOWED_ORIGIN in prod
const ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173'
app.use(cors({ origin: ORIGIN }))
app.use(express.json({ limit: '1mb' }))

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

// Mock recipe generator (replace with real SDK calls later)
app.post('/api/generate', (req, res) => {
  const { ingredients = [] } = req.body || {}
  const list = Array.isArray(ingredients) ? ingredients.join(', ') : String(ingredients)
  const text = `# Quick Idea
Try a simple skillet with **${list}**.
- sauté aromatics
- add main protein/veg
- finish with pasta/heavy cream/tomato as needed
Enjoy!`
  res.json({ text })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
  console.log(`CORS allowed origin: ${ORIGIN}`)
})
