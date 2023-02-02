import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Addpro from './Comp/Addpro'
import Addimages from './Comp/Addimages'
import Product from './Comp/Product'
import Updatepro from './Comp/Updatepro'
import Updateimage from '../src/Comp/UpdateImage'
import Home from './page/Home'

import Imageproducts from './Comp/Imageproduct'
import PrivateComponent from './Comp/PrivateComponent'
import Login from './Comp/Login'


export default function App() { 
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/image' element={<Imageproducts/>}/>
      <Route path='/' element={<Product/>}/>
      <Route path='/addpro' element={<Addpro/>}/>
      <Route path='/addimages' element={<Addimages/>}/>
      <Route path='/update/:id' element={<Updatepro/>}/>
      <Route path='/updateimage/:id' element={<Updateimage/>}/>
</Route>

   
      <Route path='/signin' element={<Login/>}/>
 
 
    </Routes>
    
    </BrowserRouter>
    
    
    </>
  )
}
