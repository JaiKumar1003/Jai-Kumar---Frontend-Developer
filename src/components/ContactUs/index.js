import { FaTelegramPlane} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import './index.css'

const ContactUs = () => (
  <div className='contact-us-container'>
    <div className='frequently-asked-que-container'>
      <h1 className='frequently-asked-que-heading'>Frequently Asked Questions</h1>
      <ul className='frequently-asked-que-list'>
        <li className='frequently-asked-que-item'>
          <img className='frequently-asked-que-plus-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729018114/Container_6_g1t5ez.png" alt="plus" />
          <p className='frequently-asked-que-para'>What is EthAi?</p>
        </li>
        <li className='frequently-asked-que-item'>
          <img className='frequently-asked-que-plus-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729018114/Container_6_g1t5ez.png" alt="plus" />
          <p className='frequently-asked-que-para'>How can EthAi can help me as a Trader?</p>
        </li>
        <li className='frequently-asked-que-item'>
          <img className='frequently-asked-que-plus-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729018114/Container_6_g1t5ez.png" alt="plus" />
          <p className='frequently-asked-que-para'>Who can use EthAi?</p>
        </li>
        <li className='frequently-asked-que-item'>
          <img className='frequently-asked-que-plus-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729018114/Container_6_g1t5ez.png" alt="plus" />
          <p className='frequently-asked-que-para'>How does EthAi track smart money flow?</p>
        </li>
        <li className='frequently-asked-que-item'>
          <img className='frequently-asked-que-plus-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729018114/Container_6_g1t5ez.png" alt="plus" />
          <p className='frequently-asked-que-para'>How does ensure data security?</p>
        </li>
      </ul>
    </div>
    <div className='explore-dapp-container'>
      <h1 className='explore-dapp-heading'>Explore Our <span className='explore-dapp-heading-span'>dApp</span></h1>
      <p className='explore-dapp-desp'>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI Features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
      <button className='explore-dapp-button'>Open dApp</button>
    </div>
    <div className='contact-us-card'>
      <div className="contact-us-website-logo-icons-card">
        <div className='contact-us-website-logo-card'>
          <img className='contact-us-website-logo' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729021677/Group_20_1_gjlrbl.png" alt="website logo" />
          <p className="contact-us-website-logo-name">EthAi</p>
        </div>
        <ul className="contact-us-list">
          <li className="contact-us-item">
            <FaTelegramPlane className="contact-us-icon" />
          </li>
          <li className="contact-us-item">
            <FaInstagram className="contact-us-icon" />
          </li>
          <li className="contact-us-item">
            <FaXTwitter className="contact-us-icon" />
          </li>
          <li className="contact-us-item">
            <FaFacebookF className="contact-us-icon" />
          </li>
          <li className="contact-us-item">
            <FaDiscord className="contact-us-icon" />
          </li>
        </ul>
      </div>
      <div className="contact-us-desp-card">
        <p className="contact-us-desp">“Designed for traders of today, just like you."</p>
        <div className="get-started-btn-card">
          <input className="email-input" type="text" placeholder="What's your work email?" />
          <button className="contact-get-started-button">Get Started</button>
        </div>
      </div>
    </div>
  </div>
)

export default ContactUs
