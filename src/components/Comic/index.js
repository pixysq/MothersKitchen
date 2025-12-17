import { lazy } from 'react'
const DownloadComic = lazy(() => import('./DownloadComic'))
const Comic = lazy(() => import('./Comic'))

export { Comic, DownloadComic }
