import { Mission, AboutHero, Discover, Support } from '../components/About'
import { LastSection } from '../components'

const About = () => {
  return (
    <>
      <AboutHero />
      <Mission />
      <Discover />
      <Support />
      <LastSection elements={['Home', 'Comic', 'Contact']} />
    </>
  )
}

export default About
