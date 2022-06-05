import { useState } from 'react'
import domToImage from 'dom-to-image'

interface UseDownloadImageResult {
  loading: boolean;
  downloadImage: (imageId: string, fileName: string) => Promise<void>;
  error: boolean;
}

// since <a download> doesnt work for images not from the same domain, we need to click an invisible link
// courtesy of https://gist.github.com/javilobo8/097c30a233786be52070986d8cdb1743
export function useDownloadImage (): UseDownloadImageResult {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function downloadImage (imageId: string, fileName: string) {
    try {
      const imageElement: HTMLElement | null = document.getElementById(imageId)
      if (imageElement === null) {
        return
      }

      setLoading(true)
      const dataUrl = await domToImage.toJpeg(imageElement, { quality: 1 })
      setLoading(false)

      const downloadLink = document.createElement('a')
      downloadLink.href = dataUrl
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
