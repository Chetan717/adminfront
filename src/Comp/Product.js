import React from 'react'
import Nav from './Nav'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
export default function Product() {
  const auth  = localStorage.getItem("user")


const [prolist,setProlist]=useState([])






  useEffect(()=>{
 
prodfun();

  },[])


const prodfun = () =>{
  if(auth){

  }
axios.get("https://admin-blond-phi.vercel.app/video").then((res)=>{

setProlist(res.data)
})
}

console.log(prolist)





const deletepro = (id) =>{

axios.delete(`https://admin-blond-phi.vercel.app/video/${id}`)
notify();
if(auth){

}
axios.get("https://admin-blond-phi.vercel.app/video").then((res)=>{

setProlist(res.data)

})
setTimeout("location.reload(true);", 2000);

}


const notify = () => toast.info(" product Deleted !");



  return (
    <>
    <Nav/>
<ToastContainer/>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

      <h2 class="text-gray-800 text-2xl lg:text-3xl text-center font-bold">Videos</h2>




    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 py-[50px]">
      
    


    {
      prolist.map((key)=>{
        return(
          <>
          
      
   
      <div className='border shadow-2xl  '>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <video type="mp4" src={key.video} loop="false"  controls muted loading="lazy" alt="Photo by Galina N" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div className='flex flex-col'>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1 px-2">{key.video2}</a>
        
          <div class="flex  items-end gap-2">
  

     
          </div>
        </div>
        <button onClick={()=>deletepro(key._id)} class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-1 p-3 m-3">Delete</button>
        <Link to={"/update/"+key._id} class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-1 p-3 m-3">Edit</Link>
      </div>
      </>
        )
      })
    }
    
   
      
     
    
    
     
    
      
   
    </div>
  </div>
</div>



</>
  )
}
