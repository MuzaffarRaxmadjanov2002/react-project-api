import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Getpors.css'



function Getpors({setData}) {
    const [value, setValue] = useState({name:'', times:'', price:'', url:'', kredit:""})
    const [validateName, setValidateName]=useState(false)
    const [validatePrice, setValidatePrice]=useState(false)
    const [validateTimes, setValidateTimes]=useState(false)
    const [validateKredit, setValidateKredit]=useState(false)
    const [validateUrl, setValidateUrl]=useState(false)


   

    const handleSubmit=(e)=>{
        // e.prventDefault()
        if(value.name === ""){
          setValidateName(true)
        }
         else if(value.price === ""){
          setValidatePrice(true)
        }
         else if(value.times === ""){
          setValidateTimes(true)
        }
        else if(value.kredit === ""){
          setValidateKredit(true)
        }
        else if(value.url === ""){
          setValidateUrl(true)
        }
        else(
          axios.post("http://localhost:3000/cars" ,{
            "name": value.name,
            "times": value.times,
            "price": value.price,
            "kredit": value.kredit,
            "url":value.url
            
            

        }).then((res)=>{
          setValue({name:'', times:'', price:'', kredit:'',url:''})
          axios.get('http://localhost:3000/cars')
          .then((res)=>{
           
            setData(res.data)
            
          })
          
        })

        )
        


        

    }
    console.log(value)
  return (
    <div className='Getpors' >

        <form onSubmit={handleSubmit}>
         

          <h3>Admin</h3>
            <div>
                <p>name</p>
                <input value={value.name} onChange={(e) => setValue({...value, name: e.target.value})} type="text" />
                {validateName&&<h2 className='tex'>empty</h2>}
            </div>
            <div>
                <p>price</p>
                <input value={value.price}  onChange={(e) => setValue({...value, price: e.target.value})} type="number" />
                {validatePrice&&<h2 className='tex'>null</h2>}
            </div>

            <div>
              <p>img url</p>
              <input  value={value.url} onChange={e=> setValue( { ...value, url: e.target.value } )} type="text" placeholder='Image URL' />
              {validateUrl&&<h2 className='tex'>no img!</h2>}
            </div>
            <div>
                <p>times</p>
                <input value={value.times}  onChange={(e) => setValue({...value, times: e.target.value})} type="number" />
                {validateTimes&&<h2 className='tex'>null</h2>}
            </div>
            <div>
                <p>kredit</p>
                <input value={value.kredit}  onChange={(e) => setValue({...value, kredit: e.target.value})} type="number" />
                {validateKredit&&<h2 className='tex'>null</h2>}
            </div>
           
            <div >
              
                 <button  className='Admin-Addbtn'>submit</button> 
                 
            </div>
        </form>
    </div>
  )
}

export default Getpors