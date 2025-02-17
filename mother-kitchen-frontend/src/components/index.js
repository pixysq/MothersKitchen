import { lazy } from 'react'
const Navbar = lazy(() => import('./Navbar'))
const Footer = lazy(() => import('./Footer'))
import { Nutrition, Hero, Products, Welcome, Reviews, InstagramSection } from './Home'
import { ContactDetails, ContactForm, ContactInfo } from './Contact'
import { AboutHero } from './About'
const LastSection = lazy(() => import('./LastSection'))
import { TeamInfo } from './Team'
import Recipes from '../components/Home/recipes'
import Loader from './Loader'
import Main from './Daksh/Main'
export {
  Nutrition,
  Hero,
  Navbar,
  Products,
  Welcome,
  Reviews,
  Footer,
  InstagramSection,
  AboutHero,
  LastSection,
  TeamInfo,
  Loader,
  Main,
  ContactDetails,
  ContactForm,
  ContactInfo,
  Recipes,
}
