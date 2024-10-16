import './index.css'

const Tokenomics = () => (
  <div className='tokenomics-container'>
    <h1 className='tokenomics-heading'>Tokenomics</h1>
    <div className='tokenomics-lg-card'>
      <img className='tokenomics-donut-img' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729009851/Donut_iqjmp4.png" alt="donut" />
      <div className='tokenomics-cards-container'>
        <div className='tokenomics-card'>
          <pre>
            Name               : EthAi
          </pre>
          <pre>
            Token Name         : $EthAi
          </pre>
          <pre>
            Token standard     : ERC20
          </pre>
          <pre>
            Blockchain         : Ethereum
          </pre>
          <pre>
            Total Supply       : 100 Million
          </pre>
          <pre>
            Tax                : 5%/5%
          </pre>
        </div>
        <div className='tokenomics-card'>
          <pre>Team               : 35%</pre>
          <pre>Marketing          : 5%</pre>
          <pre>Liquidity Pool     : 90%</pre>
        </div>
      </div>
    </div>
  </div>
)

export default Tokenomics
