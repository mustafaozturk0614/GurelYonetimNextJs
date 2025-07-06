import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parametresi eksik veya geçersiz.' });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // İçerik tipini orijinal yanıttan al
    const contentType = response.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }
    
    // Resmi bir ArrayBuffer olarak al
    const imageBuffer = await response.arrayBuffer();
    
    // Node.js Buffer'a dönüştür ve res.end() ile gönder
    res.end(Buffer.from(imageBuffer));

  } catch (error: unknown) { 
    let errorMessage = 'Bilinmeyen bir hata oluştu';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    res.status(500).json({ error: 'Resim proxy hatası', details: errorMessage });
  }
} 