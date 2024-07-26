import React from 'react'
import './Card.css'
import { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Card() {
  const [count, setCount] = useState(0)
  const increment =() =>{
    setCount(count+1)
  }
  const decrement =() =>{
    setCount(count-1)
  }

  return (
    <div className='Kard'>
      <Link to={'/'}>
        <FaArrowLeft className='arrowLeft'/>
      </Link>
      <div className="Kart">
      
      <p className='savat'>Savatingiz</p>
      <div className="Kart-con">



        <div className="con-item1">
          <div className="con-part1">
            <input type="checkbox" />
            <div className="part-p">
            <p className='class1'>Hammasini Yechish</p>
            <p className='class2'>Yetkazib berishning eng yaqin sanasi:</p>
            </div>
            <div className="part">
            <p>3 iyul (bugun)</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="con-part2">
            <input type="checkbox" />
            <div className="pic-img">
              <img src="https://images.uzum.uz/cegkcc8l08kcldtoudvg/original.jpg" alt="" />
            </div>
            <div className="part-p2">
              <p className='class3'>Smartfon Samsung Galaxy S22 Ultra 12 GB/512 GB, bordo</p>
              <p className='class4'>Sotuvchi: Sale-M</p>
              <p className='class5'>Rang: Toʻq qizil</p>
              <div className="riser">
                <button onClick={increment}>+</button>
                <h3>{count}</h3>
                <button onClick={decrement}>-</button>
              </div>
            </div>
            <div className="part-p3">
              <FaTrashCan className='trash'/>
              <p className='class6'>Yo'q qilish</p>
              <p className='class7'>19 990 000 so'm</p>
            </div>
          </div>
        </div>






        <div className="con-item2">
          <div className="part-p4">
          <p className='class8'>Buyurtmangiz</p>
          <p className='class9'>Mahsulotlar (1):</p>
          <p className='class10'>19 990 000 so'm</p>
          </div>
          <div className="date">
            <p>Yetkazib berish 4-iyul (Bugun)</p>
          </div>
          <div className="part-p5">
          <p className='class11'>Jami:</p>
          <p className='class12'>
          19 990 000 so'm</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card