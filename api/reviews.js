
export default async function handler(req, res) {
  try {
    const API_KEY = process.env.GOOGLE_API_KEY
    const PLACE_ID = process.env.PLACE_ID

    if (!API_KEY || !PLACE_ID) {
      console.error('Missing environment variables')
      return res.status(400).json({ message: 'Missing API key or Place ID' })
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`

    // Node 18+ has native fetch, no import needed
    const response = await fetch(url)
    const data = await response.json()

    if (!data.result?.reviews || data.result.reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found' })
    }

    res.status(200).json(data.result.reviews.slice(0, 5))
  } catch (err) {
    console.error('Serverless error:', err)
    res.status(500).json({ message: 'Server error' })
  }
}


