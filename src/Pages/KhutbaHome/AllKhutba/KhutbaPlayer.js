import React from 'react';
import { useQuery } from 'react-query';

import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import img from '../../../1_images/11_audio-tilwat/1_audio-img2.jpg'

import '../AllKhutba/KhutbaPlayer.css'
import onelinee from "../../../1_images/1_home/1_line.png";

import scolarbanner from "../../../1_images/8_donate_page/1_donate_home.jpg"



const KhutbaPlayer = () => {
 
 
  // const[allKhutba, setKhutba] = useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:5000/allKhutba')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setKhutba(data)
     
  //   })
    
  
  // },[])

  const {
    data: allKhutba = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allKhutba"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/allKhutba",
          {
            // headers: {
            //   authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });



  

  const handleDeleteKhutba = (khutba) => {
    console.log(khutba);

    fetch(
      `http://localhost:5000/allKhutba/${khutba._id}`,
      {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
         refetch()
          toast.success(`${khutba.name} deleted successfully`);
         
        }

      });
  };
  if(isLoading){
    return <Loading></Loading>
  }
 
  return (
    <div >
      <div
        className="home_banner pb-5"
        style={{
          background: `url(${scolarbanner}) `,
        }}
      >
        <h5 className="poppins text-center charity_campaing_heading pt-5 mt-">
         ManageKhutba
        </h5>

        <div className="text-center pb-3">
          <img src={onelinee} alt=''/>
        </div>

        <div className="text-center when_things">
          <p className="poppins donate_home_icon">
            <a href="/">Home</a> /{" "}
            <span className="charity-text">ManageKhutba</span>
          </p>
        </div>
      </div>
      {/* <div>
      {
        allKhutba.map(khutba=> 
        <div key={khutba._id} className='mb-5 m-2 shadow-lg'>
          <div class="card">
      <h5 class="card-header text-center">{khutba.about}</h5>
      
      <div class="card-body">

        <div className='d-flex flex-lg-row gap-2 flex-column  align-items-center '>
          <div className='w-50 d-flex flex-column flex-md-row gap-2 flex-lg-row justify-content-evenly align-items-center'>
          <img src={img} alt='' style={{width:'80px'}}/>
          <div>
          <h5 class="card-title">{khutba.speaker}</h5>
        <p class="card-text">{khutba.month}</p>
          </div>
          </div>
         
        
       <div className='d-flex w-50 flex-column flex-md-row flex-lg-row gap-2 justify-content-evenly  align-items-center'>
       <audio className='bg-warning' controls >
        <source src={khutba.link} type="audio/mpeg"/>
        </audio>
      <button className='btn btn-warning' onClick={()=>handleDeleteKhutba(khutba)}>Delete</button>
      </div>
        </div>
       
     
      </div>
    
    </div>
    

    
        </div>)
      }
      </div> */}


      <div >
        <div>
          <table className='w-75 mx-auto table table-striped shadow mt-5'>
        <thead>
              <tr className='bg-dark text-white'>
                <th scope="col">SL.</th>
                <th scope="col">About</th>
                <th scope="col">Speakers</th>
                <th scope="col">Date</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
          {
            allKhutba.map((khutba,i)=>  <tr key={khutba._id} class="table">
           
           
              
                <th scope="row">{i+1}</th>
                <td>
                  <p>{khutba.about}</p>
                  

                </td>
                <td>{khutba.speaker}</td>
                <td>{khutba.month}</td>
                <td><button className='btn btn-warning' onClick={()=>handleDeleteKhutba(khutba)}>Delete</button></td>
              
            
           
          </tr>)
          }
           </tbody>
          </table>
        </div>
    
      </div>
      
      
    </div>
    
    
  );
};

export default KhutbaPlayer;