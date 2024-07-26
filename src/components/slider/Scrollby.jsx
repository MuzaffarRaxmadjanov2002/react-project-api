import React, { useRef } from "react";
import './Scrollby.css'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Scrollby = () => {
  const imageContainer = useRef();
  const goLeft = () => {
    imageContainer.current.scrollBy({
      left: -270,
      behaviour: "smooth"
    })
    
  }

  const goRight = () => {
    imageContainer.current.scrollBy({
      left: 270,
      behavior: 'smooth'
    })
  }
  return (
    <div className="Scrollby">
    <div className='scrollby'>
       
        <div ref={imageContainer} className='image_container'>

          <img className='image1'src="https://t4.ftcdn.net/jpg/04/20/38/41/360_F_420384111_5fzxWlWxvB7bg5BROxfKdBbgBYB2TwGP.jpg" alt="" />
          <img className='image2' src="https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=" alt="" /> 
          <img className='image3'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPL5Px6t9kbRBNtON18qkaQGCPwF9GTVePg&s" alt="" />
         <img className='image6'src="https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg" alt="" />
        <img className='image7'src="https://cdnn21.img.ria.ru/images/07e6/0a/1a/1826838369_0:0:2729:2047_1920x0_80_0_0_189f14ce0c2b364e0a5f6198701ead6b.jpg" alt="" />
          <img className='image8'src="https://m.media-amazon.com/images/I/71slsnNNChL._AC_SY200_.jpg" alt="" />
         <img className='image9'src="https://m.media-amazon.com/images/I/51o4b5AdNLL._AC_SY200_.jpg" alt="" />
         <img className='image10'src="https://m.media-amazon.com/images/I/81e4jgomhKL._AC_SY200_.jpg" alt="" />
         <img className='image11'src="https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_SY200_.jpg" alt="" />
      <img className='image12'src="https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg" alt="" />
          <img className='image13'src="https://m.media-amazon.com/images/I/81yYivG7NzL._AC_SY200_.jpg" alt="" /> 
    
        </div>

        

        <div className='toleft_chevron_div' onClick={goLeft}> <FiChevronLeft className='toleft_icon'/> </div>
        <div className='toright_chevron_div' onClick={goRight}> <FiChevronRight className='toright_icon'/> </div>
    </div>
    </div>
  )
}

export default Scrollby