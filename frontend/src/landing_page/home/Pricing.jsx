function Pricing() {
  return (
    <div>
        <br />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-4">
            <h3>Unbeatable pricing</h3>
            <p className="text-muted">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="" style={{ textDecoration: "none" }} className="m-5">
              See pricing &nbsp;
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-2">x</div>
          <div className="col-6">
            <div className="row text-center">
              <div className="col border p-2">
                <h1 className="mb-2">₹0</h1>
                <p>
                  Free equity delivery and <br /> direct mutual funds
                </p>
              </div>
              <div className="col border p-2">
                <h1 className="mb-2">₹20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
