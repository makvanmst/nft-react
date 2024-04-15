import React from 'react';

const Card = () => {
  return (
    <div className="container">
      <div className="card-content">
        <div className="card-img"></div>
        <div className="card-details">
          <h1 className="title">
            <a href="#">Equilibrium #3429</a>
          </h1>
          <p className="desc">Our Equilibrium collection promotes balance and calm.</p>
          <div className="card-overlay">
            <div className="card-time">
              <img src="images/icon-ethereum.svg" alt="ethereum" />
              <h2>0.041 ETH</h2>
            </div>
            <div className="card-time">
              <img src="images/icon-clock.svg" alt="time" />
              <h2>3 days left</h2>
            </div>
          </div>
          <div className="card-author">
            <div className="author-img">
              <img src="images/image-avatar.png" alt="profile pic" />
            </div>
            <div className="author-details">
              <h3>Creation of <a href="#" className="name"> Jules Wyvern</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;