function Education() {
    return (   <div>
        <br />
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
           <img style={{width:"70%"}} src="Images/education.svg" alt="" srcset="" />
          </div>
          <div className="col-6">
            <h3 className="fs-2 mt-4 mb-5">Free and open market education</h3>
            <p className="text-muted">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }} className=" mb-5">
            Varsity &nbsp;
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a href="" style={{ textDecoration: "none" }} className="mt-5">
            TradingQ&A &nbsp
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div> );
}

export default Education;