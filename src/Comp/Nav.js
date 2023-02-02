import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react';

export default function Nav() {

const navigate = useNavigate();
const auth  = localStorage.getItem("user")
// useEffect(()=>{
//   const auth  = localStorage.getItem("user")
//   if(auth){
//     navigate("/")
//   }
// })
const handlelogout = () =>{
  localStorage.removeItem("user")
  navigate("/signin")
}



const userdata = JSON.parse(auth)


return (
    <>
    <nav>
<div className='w-screen h-[70px] font-bold text-black bg-[#f5f5f5] shadow-xl' >
{
 auth?
<div className='flex gap-8 py-5 justify-center '>
<Link to="/">Video</Link>
<Link to="/image">Images</Link>
<Link className='px' to="/addpro">Add Video</Link>
<Link className='px' to="/addimages">Add Image</Link>
<Link  to="/update/:id"></Link>
<Link onClick={handlelogout}  to="/signin">Logout</Link>
<p  to="/">{userdata.name} </p>
</div>
:
<div className='flex gap-8 py-5 justify-center '>
 <Link to="/signup">Sign-up</Link>   
 <Link to="/signin">Login</Link> 
 
</div>
}

</div>



    </nav>
    
    
    </>
  )
}
