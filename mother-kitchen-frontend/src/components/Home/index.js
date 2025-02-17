import { lazy } from 'react'

const Nutrition = lazy(() => import('./Nutrition'))
const Hero = lazy(() => import('./Hero'))
const Products = lazy(() => import('./Products'))
const Welcome = lazy(() => import('./Welcome'))

const Reviews = lazy(() => import('./Reviews'))
const InstagramSection = lazy(() => import('./InstagramSection'))
const Recipes = lazy(() => import('./recipes'))

export { Nutrition, Hero, Products, Welcome, Reviews, InstagramSection, Recipes }
