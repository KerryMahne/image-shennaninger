import { useState } from 'react'

interface UseDownloadImageResult {
  loading: boolean;
  downloadImage: (imageUrl: string, fileName: string) => Promise<void>;
  error: boolean;
}

// since <a download> doesnt work for images not from the same domain, we need to click an invisible link
// courtesy of https://gist.github.com/javilobo8/097c30a233786be52070986d8cdb1743
export function useDownloadImage (): UseDownloadImageResult {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function downloadImage (imageUrl: string, fileName: string) {
    try {
      setLoading(true)
      const imageBlob = await fetch(imageUrl).then((res) => res.blob())
      setLoading(false)

      const blobURL = URL.createObjectURL(imageBlob)
      const downloadLink = document.createElement('a')
      downloadLink.href = blobURL
      downloadLink.setAttribute('download', `${fileName}.jpg`)
      downloadLink.setAttribute('style', 'display: none')

      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    } catch (error) {
      console.error('Error downloading image', error)
      setLoading(false)
      setError(true)
    }
  }

  return {
    loading,
    error,
    downloadImage
  }
}
