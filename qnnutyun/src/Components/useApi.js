import { useEffect } from "react";
import { addData} from "../features/dataSlice";
import { useDispatch, } from "react-redux";


export default  function (url) {
    
const dispatch = useDispatch()
useEffect(()=>{
    fetch(url,{
        method:"Get"
      }).then(data=>data.json())
        .then(data=>dispatch(addData(data)))
    },[url])
 
}

