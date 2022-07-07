import React from 'react';
import '../assets/About.css';
import '../assets/images/collectible.png';

export default function About() {
  return (
        <div className="about">
        <div class="container">
          <div class="row align-center my-5">
              <img src={require(`../assets/images/collectible.png`)} width="100%" height="100%"></img>
            <div class="col-lg-5 align-center">
              <h1 class="font-weight-light">About</h1>
              <p>
                  A site where you can trade collectibles. Starting in 2022 by 3 developers who have a
                  passion for all things collectible (toys, games, and old memorbilia, etc).
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
