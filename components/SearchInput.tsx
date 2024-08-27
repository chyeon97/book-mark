
interface SearchInputProps {
    label: string
    value: string
    onChangeValue: () => void
}

const SearchInput = ({label, value, onChangeValue} : SearchInputProps) => {
    console.log(label, value)
    
    return (
        <div className="flexRowMode justify-between mb-6">
            <label className="text-md">{label}</label>
            <input className="w-64 outline-none border rounded-md p-1.5" value={value} onChange={onChangeValue}/>
        </div>
    )
}

export default SearchInput;