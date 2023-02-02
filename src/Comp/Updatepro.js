import React from "react";
import Nav from "./Nav";
import { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Updatepro() {
const navigate= useNavigate()
const params = useParams()



  const [prodata, setProdata] = useState(
    {
      video:"",
      video2:"",
     
  }
  );


  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProdata({ ...prodata, [name]: value });
  };


  useEffect(()=>{
handlesubmit();

  },[])


  const handleupdate = () =>{
    axios.put(`https://admin-blond-phi.vercel.app/video/${params.id}`,prodata).then((res)=>{
         console.log(res.data)
       notify();

    })
  }

  const handlesubmit = () => {
    // console.log(prodata);
   
      axios.get(`https://admin-blond-phi.vercel.app/video/${params.id}`).then((res) => {
        console.log("data will be sended ",res.data);
      setProdata(res.data)
      });
      // notify();


    }
 

 





  const notify = () => toast.success(" product updated successful !");


  return (
    <>
      <Nav />

    

      <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      <h1
        form
        class="bg-grey-lighter min-h-screen flex flex-col relative bottom-[0px]"
      >
        <div class="container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Update Product ! </h1>
            <label className="m-1 text-sm font-bold text-green-500">
            video name
            </label>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="video2"
              required
              maxLength={35}
              placeholder="name"
              value={prodata.video2}
              onChange={handleinput}
            />

           


            <label className="m-1 text-xs font-bold text-green-500">
             video link{" "}
            </label>
            <input
              type="url"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="video"
              placeholder="video"
              value={prodata.video}
              required
              onChange={handleinput}
            />

            <button
              type="submit"
              onClick={handleupdate}
              class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Update Product{" "}
            </button>
          </div>
        </div>
      </h1>
    </>
  );
}
