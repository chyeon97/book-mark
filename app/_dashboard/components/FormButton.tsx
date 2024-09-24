interface FormButtonProps {

    label:string
    type: "submit" | "reset" | "button"
    bgColor: "white" | "black"
    onClickBtn: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const colorClass = {
    "white": "border border-solid text-black bg-white",
    "black": "text-white bg-black"
}

const FormButton = ({label, type, bgColor, onClickBtn}: FormButtonProps) => {
    return (
        <button 
            type={type}
            className={`px-3.5 py-2 rounded-md ${colorClass[bgColor]}`}
            onClick={(e) => onClickBtn(e)}
            >
            {label}
        </button>
    )
}

export default FormButton
