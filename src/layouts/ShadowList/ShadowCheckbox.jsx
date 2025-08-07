import { useSelector, useDispatch } from "react-redux"
import { updateCheckbox } from "../../features/shadows"
import { use } from "react";

export default function ShadowCheckbox({name, shadowID}) {
    const checkboxShadow = useSelector(state => state.shadows.find(shadow => shadow.id === shadowID))
    console.log(checkboxShadow);
    const dispatch = useDispatch();

  return (
    <>
        <input 
        onChange={()=> dispatch(updateCheckbox({shadowID, name}))}
        type="checkbox" 
        checked={checkboxShadow[name]}  
        id={`checkbox-${name}-${shadowID}`}    
        className="h-4 w-4 border-gray-300 rounded mr-2" 
         />
       
        <label 
        className="leading-4 mr-5"
        htmlFor={`checkbox-${name}-${shadowID}`}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
    </>
  )
}