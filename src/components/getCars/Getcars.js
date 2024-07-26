import { useEffect, useState } from "react";
import axios from 'axios'
import './Getcars.css'
import { Link } from "react-router-dom";
// import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import{FaStar} from'react-icons/fa';
import { useDispatch } from 'react-redux';

function Getcars({setData, data}) {

  const dispatch = useDispatch()
  
  const [deleteMathod, setDeleteMathod] = useState("")
  // const [data,setData]= useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/cars')
    .then((res)=>{
     
      setData(res.data)
      
    })

  },[])

  const handleDelete = (id)=>{
    axios.delete('http://localhost:3000/cars/'+id)
    .then((res)=>{
      axios.get('http://localhost:3000/cars')
      .then((res)=>{
        setData(res.data)
      })
    })
  }
  return (
    



    <div className="Getcars">
      <div className="bow">
      <div className="bow-img">
          <img src="https://images.uzum.uz/cpas5jvfrr82f0a4cqpg/original.jpg" alt="" />
          </div>
         <div className="bow-name">
          <p>Smartfon Itel A70</p>
         </div>
         <div className="bow-rating">
         <FaStar className="starr"/><FaStar /><FaStar /><FaStar /><FaStar />
         <p>3822 selled</p>
         </div>
         <div className="bow-price">
           <p className="b-narx">2119300 so'm</p>
           <p className="b-kredit">149356 so'mdan</p>
         </div>
      </div>







      <div className="bow">
      <div className="bow-img">
          <img src="https://assets.asaxiy.uz/product/items/desktop/775e1b71ada467505289f9faed494ab220240315154336148709WADibG1f9.png.webp" alt="" />
          </div>
         <div className="bow-name">
          <p>Smartfon Samsung Galaxy A55</p>
         </div>
         <div className="bow-rating">
         <FaStar className="starr"/><FaStar /><FaStar /><FaStar /><FaStar />
         <p>32102 selled</p>
         </div>
         <div className="bow-price">
           <p className="b-narx">4199000 so'm</p>
           <p className="b-kredit">489356 so'mdan</p>
         </div>
      </div>











      <div className="bow">
      <div className="bow-img">
          <img src="https://assets.asaxiy.uz/product/items/desktop/775e1b71ada467505289f9faed494ab220240315154336148709WADibG1f9.png.webp" alt="" />
          </div>
         <div className="bow-name">
          <p>Smartfon Samsung Galaxy A55</p>
         </div>
         <div className="bow-rating">
         <FaStar className="starr"/><FaStar /><FaStar /><FaStar /><FaStar />
         <p>32102 selled</p>
         </div>
         <div className="bow-price">
           <p className="b-narx">4199000 so'm</p>
           <p className="b-kredit">489356 so'mdan</p>
         </div>




      </div>
      <div className="bow">
          <div className="bow-img">
          <img src="https://assets.asaxiy.uz/product/items/desktop/775e1b71ada467505289f9faed494ab220240315154336148709WADibG1f9.png.webp" alt="" />
          </div>
         <div className="bow-name">
          <p>Smartfon Samsung Galaxy A55</p>
         </div>
         <div className="bow-rating">
         <FaStar className="starr"/><FaStar /><FaStar /><FaStar /><FaStar />
         <p>32102 selled</p>
         </div>
         <div className="bow-price">
           <p className="b-narx">4199000 so'm</p>
           <p className="b-kredit">489356 so'mdan</p>
         </div>
      </div>
  


       
     
    {
      data.map((item, index)=>{
        return(
<div className="product" >
        <div className="product-img">
          <img src={item.url} alt="" />
        </div>
        <div className="product-name">
          <p>{item.name}</p>
        </div>
        <div className="product-rating">
          <FaStar className="stars"/><FaStar/><FaStar/><FaStar/><FaStar/>
          <p className="mark">{item.times}</p>
          <p className="sell">selled</p>
        </div>
        <div className="product-price">
          <p className="buy">{item.price} so'm</p>
          <p className="productkredit">{item.kredit} so'mdan</p>
        </div>
        <button className="deleting" onClick={()=>handleDelete(item.id)}>
        <MdDelete/>
        </button>

        <button className='btn2' onClick={()=> dispatch( addPro("pro"))} 
                               >Add to card</button>





         
         
          

        </div>
        
        

        
        )

      })
    }
    
   
    </div>
    
  );
}

export default Getcars;




// import React, { useEffect, useState } from 'react'
// import './ProProduct.css'
// import {db} from '../../server/firebase'
// import { addPro } from '../../redux/action/action';
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux';




// function ProProduct() {

//     const dispatch = useDispatch()

//     const [proProduct, setProProduct] = useState([]);

//     useEffect(() => {
//         db.collection('Alibaba_All_Products').onSnapshot((products) => setProProduct(products.docs.map((pro) => ({
//             id: pro.id,
//             pro: pro.data()
//         }))));
//     }, [])
//     // console.log("All products>>> ",proProduct);

   
//     return (
//         <div className="pro_product">

//             {
//                 proProduct?.map((pro, inx) => (

//                     <div key={inx} className="pro_product_box">
//                         <Link to={/products/${pro.id}}>

//                           <img className='img__pro__pro' src={pro.pro.url} alt="" />
//                         </Link>

//                       <div className="textts_container">
//                       <div className="emty_space"></div>
                    
//                       <div key={pro.id} className="pro_product_text">
//                         {/* <h4>{pro.id}</h4> */}
//                             <h4 className="pro_text_1">{pro.pro.title}</h4>
//                             <h4 className="pro_price">{pro.pro.price}$</h4>
//                             <button className='btn2'
//                             //    onClick={()=> dispatch( addPro("pro"))}     
//                                onClick={() => {dispatch({type: "ADD_Product", payload: pro})}}     
//                                 >Add to card</button>
//                         </div>
//                       </div>

//                     </div>

//                 ))
//             }



                
//         </div>
//     )
// }

// export default ProProduct