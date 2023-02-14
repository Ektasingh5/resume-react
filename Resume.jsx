import React from 'react';
import './style.css';
export default function Resumes() {
  return (
    <div className="container">
        <div className="left_side">
        <div className="profiletext">
                <div className="imgbx">
                <img src={ require('./dog.jpg') } />
                </div>
                <h2>first last</h2><span>web devloper</span>
            </div>
            <div className="contactinfo">
              <h3 className="title">Contact Info</h3>
              <ul>
                <li>
                  <span className = "text">dog123@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="contactinfo education">
              <h3 className="title">Education</h3>
              <ul>
                <li>
                  <h5>2010-2013</h5>
                  <h4>Master Degree in CS</h4>
                  <h4>University Name</h4>
                  <h6>percentage</h6>
                </li>
                
              </ul>
            </div>
            <div className="contactinfo Acheivements">
              <h3 class="title">Acheivments</h3>
              <ul>
                <li>
                  <span className="text">qualified jee</span>
                </li>
               
              </ul>
            </div>
        </div>
        <div className="right_side">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorum sed earum laudantium id adipisci, repudiandae neque, itaque hic quibusdam provident facilis nostrum voluptates? Quo esse cupiditate harum dolores quod?</p>
          </div>
          <div className="about">
            <h2 className="title2">work experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>2016-2019</h5>
                <h5>comapny name</h5>
                <div className="text">
                  <h4>java developer</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem autem quod nisi ipsum itaque perferendis praesentium deleniti beatae accusamus, consequatur atque sequi asperiores inventore pariatur vero magnam quasi harum commodi!</p>
                </div>
              </div>
            </div>
            <div className="about skill">
              <h2 className="title2">professional skill</h2>
              <div className="box">
                <h4>java</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}