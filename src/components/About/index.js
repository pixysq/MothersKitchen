import { lazy } from 'react'
const AboutHero = lazy(() => import('./AboutHero'))
const Discover = lazy(() => import('./Discover'))
const Mission = lazy(() => import('./Mission'))
const Support = lazy(() => import('./Support'))

export { AboutHero, Mission, Discover, Support }
