import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="text-center p-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        <div className="col-12 col-md-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px", height: "auto" }}
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px", height: "auto" }}
          />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px", height: "auto" }}
          />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px", height: "auto" }}
          />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="Smallcase (Options)"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px", height: "auto" }}
          />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-4"
            style={{ maxWidth: "150px", height: "auto" }}
          />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>

      <div className="text-center mt-5 mb-5">
        <button
          className="btn btn-primary fs-5 px-4 py-2"
          style={{ width: "200px" }}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
