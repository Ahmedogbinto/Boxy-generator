import { useState, useEffect } from "react"
import chevron from "../../assets/chevron.svg"
import ShadowRange from "./ShadowRange"
import ShadowColorPicker from "./ShadowColorPicker"

export default function Shadow({panelNumber, shadow}) {
    const [toggleshadow, setToggleShadow] = useState(false)

    const shadowInputs = shadow.inputs.map((input, index) => {
        if(input.type === "range"){
        return <ShadowRange 
        key={index} 
        inputData={shadow.inputs[index]}
        shadowID={shadow.id}
        />
        }
        else if(input.type === "color"){
        return <ShadowColorPicker  
        key={index} 
        inputData={shadow.inputs[index]} 
        shadowID={shadow.id}
        />
        }
    })
    useEffect(()=> {
        if(panelNumber === 1){
            setToggleShadow(true)
        }
    }, [])


  return (
    <li className="bg-gray-50 border-b border-gray-300">
        <button 
        className="w-full px-6 py-4 flex justify-between itenms-center hover:bg-gray-100"
        onClick={()=> setToggleShadow(!toggleshadow)}>
            <span>Shadow {panelNumber}</span>
            <img style={{
                transform:`${toggleshadow ? "rotate(90deg)" : "rotate(0deg)"}`
            }}
            className="font-bold w-5"
            src={chevron}
            alt=""
            />
        </button>

        {toggleshadow && <>
            <div className="flex items-end px-6 py-4">
                {/* <checkbox /> */}
                {/* <checkbox /> */}

                <button className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 roubded">
                    Remove
                </button>
            </div>
            <div className="px-6 py-4">
                {shadowInputs}
            </div>
        </>}
    </li>
  )
}