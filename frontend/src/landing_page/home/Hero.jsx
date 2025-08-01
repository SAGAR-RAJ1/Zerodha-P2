function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="Images/homeHero.png"
          className="img-fluid mb-5"
          alt="Hero img"
          srcset=""
        />
        <h1 className="mt-5">Invest in everything</h1>

        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more. Sign up for free
        </p>
        <button
          style={{ width: "20%", margin: "auto" }}
          className="p-1 btn btn-primary fs-5"
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
