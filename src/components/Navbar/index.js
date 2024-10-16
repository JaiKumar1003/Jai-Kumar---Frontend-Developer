import { TbMenu } from "react-icons/tb"
import './index.css'

const Navbar = () => {
  const navbarSections = () => (
    <ul className="navbar-sections-list">
      <li className="navbar-section-item">
        Features
      </li>
      <li className="navbar-section-item">
        Why Us
      </li>
      <li className="navbar-section-item">
        Tokenomics
      </li>
      <li className="navbar-section-item">
        Roadmap
      </li>
    </ul>
  )
  return (
    <div className="navbar-card">
      <div className="navbar-website-logo-card">
        <img className="website-logo-img" src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729021677/Group_20_1_gjlrbl.png" alt="website logo" />
        <p className="navbar-website-logo-name">EthAi</p>
      </div>
      <div className="navbar-sections-lg">
        {navbarSections()}
      </div>
      <button className="menu-icon-button"><TbMenu className="menu-icon" /></button>
      <div className="navbar-log-in-card">
        <button className="navbar-log-in-button">Log in</button>
        <button className="navbar-white-paper-button">Whitepaper</button>
      </div>
    </div>
  )
}

export default Navbar

// background: radial-gradient(circle, #000000, #001f33);