import React from "react";

const CardItem = ({name , flag, population}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img className="card-img-top" src={flag} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Population:{population}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
