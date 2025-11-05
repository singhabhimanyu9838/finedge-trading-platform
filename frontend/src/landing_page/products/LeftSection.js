import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6  p-5">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-6 p-5 p-3 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3 mb-3 ">
            <a href={tryDemo} style={{ textDecoration:"none"  }}>try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "70px",textDecoration:"none"  }}>
              learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore} style={{ marginLeft: "15px"}}>
            <img src="media/images/appStoreBadge.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
