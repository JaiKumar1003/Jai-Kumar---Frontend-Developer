import './index.css'

const Features = () => (
  <div className='features-container'>
    <h1 className='features-heading'>Our Features</h1>
    <div className='features-cards-container'>
      <div className='features-cards-lg-container'>
        <div className='features-card trade-optimizer-card'>
          <img className='trade-optimizer-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1728988960/Group_21_kybmcj.png" alt="trade optimizer" />
          <h1 className='features-card-heading'>Trade Optimizer</h1>
          <p className='features-card-desp'>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
        </div>
        <div className='market-features-combine-card'>
          <div className='features-card market-insight-card'>
            <img className='market-inshight-image' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1728990736/7AVABZyyTAliootVGguafuelpHU.svg_evyrta.png" alt="market insight" />
            <h1 className='features-card-heading market-inshight-heading'>Market Insight</h1>
            <p className='features-card-desp market-inshight-desp'>Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
          </div>
          <div className='our-featuers-card'>
            <h1 className='features-heading features-heading-lg'>Our Features</h1>
          </div>
        </div>
        <div className='features-card risk-guard-card'>
          <h1 className='features-card-heading'>Risk Guard</h1>
          <p className='features-card-desp'>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
          <img className='risk-guard-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1728990911/Container_1_qq01x7.png" alt="risk guard" />
        </div>
      </div>
      <div className='portfolio-scout-lg-card'>  
        <div className='features-card portfolio-card'>
          <img className='portfolio-sync-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1728991003/Group_n9m7bx.png" alt="portfolio sync" />
          <h1 className='features-card-heading portfolio-sync-heading'>Portfolio Sync</h1>
          <p className='features-card-desp portfolio-sync-desp'>Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
        </div>
        <div className='features-card scout-card'>
          <div className='scout-heading-desp-card'>
            <h1 className='features-card-heading opportunity-scout-heading'>Opportunity Scout</h1>
            <p className='features-card-desp opportunity-scout-desp'>Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
          </div>
          <img className='opportunity-scout-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1728991073/OBJECTS_axz9ud.png" alt="opportunity scout" />
        </div>
      </div>
    </div>
  </div>
)

export default Features
