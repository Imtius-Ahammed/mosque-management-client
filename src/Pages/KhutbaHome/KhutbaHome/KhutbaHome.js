import React from 'react';
import onelinee from "../../../1_images/1_home/1_line.png";

import scolarbanner from "../../../1_images/8_donate_page/1_donate_home.jpg"

import KhutbaPlayer from '../AllKhutba/KhutbaPlayer';

import Footer from '../../Shared/Footer/Footer';
import KhutbaContact from '../KhutbaContact/KhutbaContact';




const KhutbaHome = () => {
  return (
    <div >
      <div
        className="home_banner pb-5"
        style={{
          background: `url(${scolarbanner}) `,
        }}
      >
        <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">
          Khutba
        </h5>

        <div className="text-center pb-3">
          <img src={onelinee} />
        </div>

        <div className="text-center when_things">
          <p className="poppins donate_home_icon">
            <a href="/">Home</a> /{" "}
            <span className="charity-text">All Khutba</span>
          </p>
        </div>
      </div>
      
     

     <KhutbaContact></KhutbaContact>
     <Footer></Footer>
      
      
    </div>
  );
};

export default KhutbaHome;