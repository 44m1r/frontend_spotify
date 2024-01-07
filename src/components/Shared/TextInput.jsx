const TextInput = ({label,placeholder,styleInput, value, setValue, labelClass}) => {
    return (
        <div className={`inputTextDiv flex flex-col space-y-2 w-full ${styleInput}`}>
            <label className= {`font-semibold ${labelClass}`} >{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className="p-2 border border-gray-400 border-solid rounded placeholder-gray-500"
                onChange={(e)=>setValue(e.target.value)}
            />
        </div>
    )
}

export default TextInput;