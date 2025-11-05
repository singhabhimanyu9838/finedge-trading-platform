import React from 'react';

function Hero() {
    return (
        <div className="container">

            {/* Header Section */}
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1 className="fw-bold">Simple & Transparent Pricing</h1>
                <h3 className="text-muted fs-5 mt-2">
                    Free equity investments & flat ₹20 per executed intraday and F&O trade.
                </h3>
            </div>

            {/* Pricing Cards */}
            <div className="row p-5 mt-4 text-center">

                <div className="col-lg-4 col-sm-12 p-4">
                    <img src="/media/images/pricingEquity.svg" alt="Equity Pricing" style={{ width: "110px" }} />
                    <h2 className="fs-4 mt-3 fw-semibold">Free Equity Delivery</h2>
                    <p className="text-muted mt-2">
                        Invest in stocks for the long term with **zero brokerage** on all equity delivery orders.
                    </p>
                </div>

                <div className="col-lg-4 col-sm-12 p-4">
                    <img src="/media/images/intradayTrades.svg" alt="Intraday Pricing" style={{ width: "110px" }} />
                    <h2 className="fs-4 mt-3 fw-semibold">Intraday & F&O Trading</h2>
                    <p className="text-muted mt-2">
                        Flat ₹20 or 0.03% per executed order (whichever is lower) for Equity, Commodity & Currency Intraday.
                        Flat ₹20 per completed Options order.
                    </p>
                </div>

                <div className="col-lg-4 col-sm-12 p-4">
                    <img src="/media/images/pricingMF.svg" alt="Mutual Funds" style={{ width: "110px" }} />
                    <h2 className="fs-4 mt-3 fw-semibold">Zero Commission Mutual Funds</h2>
                    <p className="text-muted mt-2">
                        Invest in direct mutual funds with **no commission**, **no hidden fees**, and **no DP charges**.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Hero;
