import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData} from "../features/dataSlice";
import './Body.scss'
import useApi from "./useApi";

function Body() { 

  const dispatch = useDispatch()
  const [limit,setLimit] = useState(10) 
  const [menu, setMenu] = useState(true)
  const [category,setCategory]= useState(`&category_ids=1`)

  const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&${category} `
  const data = useSelector(addData)
  const arrCategory = [
    {id: 5,name: "boxes"},
    {id: 15,name: "clothes"},
    {id: 1,name: "hats"},
    {id: 14,name: "sinks"},
    {id: 2,name: "space"},
    {id: 4,name: "sunglasses"},
    {id: 7,name: "ties"}];                                                                                                          
  
  let newdata = data.payload.data

  useApi(url)

  const addimg = () =>{
  setLimit(limit+10)
  
}

  const buttons =arrCategory.map((e)=>{
         return <button className="category_buton" key={e.id} 
         onClick={()=>{setCategory(`${e.name}_ids${e.id}`)}} >{e.name}</button>
})


  const show =  newdata.data && newdata.data.map((e,i)=>{
         return <img className="img"  key={i} src={e.url} alt=""/>
  }) 

    return( <div className="img_contener">
              <div className="menu_container">
                  <button className="btn_display" onClick={()=>{
                         setMenu(!menu)}}>{menu?"category display":"hide categories"}</button>
                   <div className="btn_container">      
                        {menu ? <div></div>:buttons}
                  </div>
              </div>
                 <div className="img_div">   
                     {show}
                </div>   
                     <button className='add_btn' onClick={addimg}>add</button>
           </div>)
}

export default Body

