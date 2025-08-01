function OpenAccount() {
    return (<div className="container p-5 mb-5 mt-5">
        <div className="row text-center">
          <img
            src="Images/homeHero.png"
            className="img-fluid mb-5"
            alt="Hero img"
            srcset=""
          />
          <h1 className="mt-5 mb-4">Open a Zerodha account</h1>
  
          <p className="text-muted mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            style={{ width: "20%", margin: "auto" }}
            className="p-2 btn btn-primary fs-5"
          >
            SignUp for free
          </button>
        </div>
      </div> );
}

export default OpenAccount;