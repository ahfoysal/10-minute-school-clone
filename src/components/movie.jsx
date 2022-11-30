import {  useEffect, useState } from "react";

import {Link} from  'react-router-dom'
import './shop.css'
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useContextS } from "../pages/cart/Function";
// import { darken } from 'polished';
// import api from '../pages/api';

function RecentlyUpdated() {
  const [pro , setPro] = useState([]);
  let {  addToCart} =  useContextS();
  useEffect(() => {
  
    getCat()
    
  }, []);
  const [term, setTerm] =useState('')



const getCat = (num, terms) =>{
  setTerm(terms)
  axios(`https://api.10minuteschool.com/lms-auth-service/api/v4/pro/v3/content/course/703/enrolled`)
          .then(data2 => { const data = data2.data.data.other_courses
 
            console.log(data);
               setPro(data) })}
  
    return (
<div  className="single-page">  
  <p className="top-line">CLASS 7</p>
<div className="container-fluid bg-trasparent my-4 p-3"  style={{position: "relative"}}>
        <div className="row g-3">

<Splide  options={{
  perPage    : 8,
  gap        : 0,
  pagination : false,
  arrows : true,
  breakpoints: {
    1200: { perPage: 5, gap: 0 },
    640 : { gap: 0 , perPage: 3},
  },
}}>
        { pro?.map((product, index) => (
         <SplideSlide key={index+1}  >
   
        <div className="col hp" onClick={() => addToCart(product)}>
      <div className="card h-100 shadow-sm">
  
            <div>  <Link to={'/sub/'+product.course_id}> 
          <img src={product.sqr_img

} className="card-img-top" alt="product.title" />
      
      
      
        <div className="card-body">
     
        <p className="product__name">{product.name }</p>

         
          </div>       
        </Link>      
        </div>
      </div>
    </div>

    </SplideSlide>
        )) }
      
       
 

        </Splide>


     
        
        </div>    </div>
          
   
   </div>
  )
  }
  

  
  
  export default RecentlyUpdated;