import React from 'react';

import { toast } from 'react-toastify';
import scolarbanner from "../../../1_images/8_donate_page/1_donate_home.jpg"
import onelinee from "../../../1_images/1_home/1_line.png";

const AddKhutba = () => {
 
 

  const handleAddKhutba = (event) => {
    event.preventDefault();
    const form = event.target;
    const month = form.month.value;
    const about = form.about.value;
    const speaker = form.speaker.value;
    const link = form.link.value;

   

    const newKhutba = {
      month,
      about,
      speaker,
      link
    
    };
    fetch("http://localhost:5000/addKhutba", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newKhutba),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Succesfully Added Product");
          form.reset();
          
          
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
       <div
        className="home_banner pb-5"
        style={{
          background: `url(${scolarbanner}) `,
        }}
      >
        <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">
          AddKhutba
        </h5>

        <div className="text-center pb-3">
          <img src={onelinee} alt='' />
        </div>

        <div className="text-center when_things">
          <p className="poppins donate_home_icon">
            <a href="/">Home</a> /{" "}
            <span className="charity-text">AddKhutba</span>
          </p>
        </div>
      </div>
   
    <form onSubmit={handleAddKhutba}>
      <div className='container py-5 m-2 mx-auto   shadow my-5'>
    <div className='row'>
    <div className="mb-3 py-5 mx-auto shadow col-lg-8 col-sm-12 ">
      <h1 className='text-center text-warning fw-bold'>Please ADD Jummah Khutba</h1>
    <div >
  <label for="exampleFormControlInput1" className="form-label">Jummah Khutba Data</label>
  <input type="datetime-local" name='month' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
    <div >
  <label for="exampleFormControlInput1" className="form-label">About</label>
  <input type="text" name='about' className="form-control" id="exampleFormControlInput1" placeholder="Jummah Khutba About Crisis"/>
</div>
    <div >
  <label for="exampleFormControlInput1" className="form-label">Speaker</label>
  <input type="text" name='speaker' className="form-control" id="exampleFormControlInput1" placeholder="MD Imtius Ahammed"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <input type="text" name='link' className="form-control" id="exampleFormControlInput1" placeholder="link.mp3"/>
  
</div>
<button className='btn btn-primary'>Add Khutba</button>
    </div>
    </div>
    </div>
    </form>
    </div>
  );
};

export default AddKhutba;