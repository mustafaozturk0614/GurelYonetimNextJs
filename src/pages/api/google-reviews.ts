import type { NextApiRequest, NextApiResponse } from 'next'

let cachedData: any = null;
let lastFetchDate: string | null = null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const placeId = 'ChIJI-ZL6-mXsBQRnnk44NbOkdk'

  // Bugünün tarihi (YYYY-MM-DD)
  const today = new Date().toISOString().slice(0, 10)

  // Eğer bugün için cache varsa onu döndür
  if (cachedData && lastFetchDate === today) {
    return res.status(200).json(cachedData)
  }

  // Türkçe yorumlar için language=tr ekle
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=tr&key=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    // Cache'i güncelle
    cachedData = data
    lastFetchDate = today
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Google yorumları alınamadı' })
  }
} 