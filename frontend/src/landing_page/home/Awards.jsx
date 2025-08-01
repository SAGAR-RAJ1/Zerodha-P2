function Awards() {
    return ( <div>
       <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 p-5">
                <img src="/Images/largestBroker.svg" alt="" srcset="" />
            </div>
            <div className="col-6 p-5">
          <h1 className="mb-5 mt-3">Largest stock broker in India</h1>
          <p>+2 million zerodha clients contribute to over 15% of all retail orders volumes in india daily by trading and investing in:</p>
          <div className="row">
            <div className="col">
                <ul>
                    <li><p>Futures and Options</p></li>
                </ul>
                <ul>
                    <li><p>Commodity Derivatives</p></li>
                </ul>
                <ul>
                    <li><p>Currency Derivatives</p></li>
                </ul>

                </div>
                <div className="col">
                <ul>
                    <li><p>Stocks and IPOs</p></li>
                </ul>
                <ul>
                    <li><p>Direct Mutual Funds</p></li>
                </ul>
                <ul>
                    <li><p>Bonds</p></li>
                </ul>
                </div>
                <img className="mt-4" src="/Images/pressLogos.png" alt="Press Logos" srcset="" />
            </div>
          </div>
        </div>
       </div>
    </div> );
}

export default Awards;