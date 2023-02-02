import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";








export default function Addpro() {
 

  



  const [prodata, setProdata] = useState({
    image2:"",
    image:"",
 
  });


  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProdata({ ...prodata, [name]: value });
  };

  const handlesubmit = () => {

    if (prodata.image2.length < 1 ||  prodata.image.length < 3 ) {
      errnotify();
    } else {
      axios.post("https://admin-blond-phi.vercel.app/addimage", prodata).then((res) => {
        console.log("data will be sended ");
      });
      notify();

    setProdata({ 
     image2:"",
     image:""
    })
    }

  };


 
  const notify = () => toast.success(" product Added successful !");
  const errnotify = () => toast.error(" please enter a product details !");

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
            <h1 class="mb-8 text-3xl text-center">Add Image </h1>
            <label className="m-1 text-sm font-bold text-green-500">
              image name
            </label>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="image2"
              required
              maxLength={35}
              placeholder="name"
              value={prodata.image2}
              onChange={handleinput}
            />

         

            <label className="m-1 text-sm font-bold text-green-500">
              image link{" "}
            </label>
            <input
              type="url"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="image"
              placeholder="image"
              value={prodata.image}
              required
              onChange={handleinput}
            />


            <button
              type="submit"
              onClick={handlesubmit}
              class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Add Product{" "}
            </button>
          </div>
        </div>
      </h1>
    </>
  );
}
