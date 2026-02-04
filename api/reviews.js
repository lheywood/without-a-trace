import fetch from 'node-fetch'

export default async function handler(req, res) {
  try {
    const API_KEY = process.env.GOOGLE_API_KEY
    const PLACE_ID = process.env.PLACE_ID

    if (!API_KEY || !PLACE_ID) {
      return res.status(400).json({ message: 'Missing API key or Place ID' })
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()

    if (!data.result?.reviews) {
      return res.status(404).json({ message: 'No reviews found' })
    }

    // Send top 3 reviews
    res.status(200).json(data.result.reviews.slice(0, 3))
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}
