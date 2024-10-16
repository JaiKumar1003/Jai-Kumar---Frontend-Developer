import './index.css'

const WhyUs = () => (
  <div className='why-us-container'>
    <h1 className='why-us-heading'>About EthAi</h1>
    <p className='why-us-desp'>At Eth Ai, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
    <button className='why-us-read-more-button'>Read more</button>
    <div className='why-us-cards-container'>
      <div className='why-us-card'>
        <img className='why-us-card-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729004029/graph_lxfshy.png" alt="graph" />
        <h1 className='why-us-card-heading'>Stay Ahead</h1>
        <p className='why-us-card-desp'>No more guesswork—get clear, trustable insights.</p>
      </div>
      <div className='why-us-card'>
        <img className='why-us-card-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729004734/wallet_whl6vp.png" alt="wallet" />
        <h1 className='why-us-card-heading'>Know Your Assets</h1>
        <p className='why-us-card-desp'>Always stay on top of how your investments are performing.</p>
      </div>
      <div className='why-us-card'>
        <img className='why-us-card-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729004806/Tools_hhupfs.png" alt="tools" />
        <h1 className='why-us-card-heading'>Simple, Not Overwhelming</h1>
        <p className='why-us-card-desp'>Our tools are designed to make complex market analysis easy to understand and act on.</p>
      </div>
      <div className='why-us-card'>
        <img className='why-us-card-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729004871/Future_Technology_ay8b1z.png" alt="future technology" />
        <h1 className='why-us-card-heading'>Future-Proof</h1>
        <p className='why-us-card-desp'>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
      </div>
    </div>
  </div>
)

export default WhyUs
