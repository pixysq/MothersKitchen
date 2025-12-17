import { Comic } from '../components/Comic'
import DownloadComic from '../components/Comic/DownloadComic'

const ComicPage = () => {
  return (
    <div className="2xl:mx-36">
      <Comic />
      <DownloadComic />
    </div>
  )
}

export default ComicPage
