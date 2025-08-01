function Stats() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2 className="mb-5 mt-5">Trust with confidence</h2>

            <h4 className="mb-3 mt-5">Customer-first always </h4>
            <p className="mb-4 text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
            <h4 className="mb-3">No spam or gimmicks</h4>
            <p className="mb-4 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
            <h4 className="mb-3">The Zerodha universe</h4>
            <p className="mb-4 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4 className="mb-3">Do better with money</h4>
            <p className="mb-4 text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col">
            <img src="/Images/ecosystem.png" style={{ width: "90%" }} />
            <div className="text-center">
              <a href="" style={{ textDecoration: "none" }} className="m-5">
                Explore our products &nbsp;
                <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="" style={{ textDecoration: "none" }} className="m-5">
                Try Kite demo &nbsp;<i class="fa-solid fa-arrow-right"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
