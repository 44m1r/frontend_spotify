
import { useState } from "react";
import { Icon } from "@iconify/react";

const PasswordInput = ({label,placeholder, styleInput,value,setValue}) => {

    const [eyeOpen,setEyeOpen] = useState(false);

    return (
        <div className={`passwordInputDiv flex w-full ${styleInput} items-end space-x-3`}>
            <div className="flex flex-col w-full space-y-2">
                <label className="font-semibold" htmlFor="inp">{label}</label>
                <input
                    type={eyeOpen ? "text" : "password"}
                    placeholder={placeholder}
                    className="p-2 border border-gray-400 border-solid rounded placeholder-gray-500"
                    id="inp"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <button onClick={() => setEyeOpen(!eyeOpen)} className=" text-4xl">
                {
                    eyeOpen ? <Icon icon="quill:eye-closed" /> : <Icon icon="iconamoon:eye-thin" />
                }
            </button>
        </div>
    )
}

export default PasswordInput;