import { lazy } from 'react'
const ContactLastPhone = lazy(() => import('./ContactLastPhone'))
const ContactDetails = lazy(() => import('./ContactDetails'))
const ContactForm = lazy(() => import('./ContactForm'))
const ContactInfo = lazy(() => import('./ContactInfo'))

export { ContactDetails, ContactForm, ContactInfo, ContactLastPhone }
