// import React from 'react'
// import './Update.css'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// function Update() {

//   const {id} = useParams()
//   const [value, setValue] = useState({
//     id:id,
//     name:'',
//     year:'',
//     price:'',
//     color:''
//   })
//   useEffect(()=>{
//     axios.get('http://localhost:3000/cars/'+id)
//     .then((res)=>{
//       setValue({...value,name:res.data.name,year:res.data.year,price:res.data.price,color:res.data.color,})
//     })

//   }, [])

//   const handledelete =(e)=>{
//     e.preventDefoult()
//     axios.put

//   }
//   return (
//     <div className='Update'>
//          <form  >
          

//           <h3>Admin</h3>
//             <div>
//                 <p>Marka</p>
//                 <input value={value.name}  type="text" />
                
//             </div>
//             <div>
//                 <p>price</p>
//                 <input value={value.price}   type="number" />
                
//             </div>
//             <div>
//                 <p>year</p>
//                 <input value={value.year}  type="number" />
        
//             </div>
//             <div>
//                 <p>color</p>
//                 <input value={value.color}   type="text" />
                
//             </div>
           
//             <div >
//                  <button  className='Admin-Addbtn'>submit</button> 
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Update