import Navbar from '../../components/Navbar'
import Features from '../../components/Features'
import WhyUs from '../../components/WhyUs'
import Tokenomics from '../../components/Tokenomics'
import Roadmap from '../../components/Roadmap'
import ContactUs from '../../components/ContactUs'
import './index.css'

const Home = () => {

  const renderNavbarAndDetails = () => (
    <div className='navbar-and-details-card'>
      <Navbar />
      <h1 className='home-heading'>When Innovation Meets <span className='home-heading-span'>Investment</span></h1>
      <p className='home-desp'>Empowering Trading Through Advanced Technology</p>
      <button className='open-button'>Open dApp</button>
    </div>
  )
  return (
    <div className='home-container'>
      {renderNavbarAndDetails()}
      <Features />
      <WhyUs />
      <Tokenomics />
      <Roadmap />
      <ContactUs />
    </div>
  )
}

export default Home
