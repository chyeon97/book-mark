const Box = ({children}) => {
    return (
        <div className="absolute top-20 left-72 w-[calc(100vw-20rem)] h-[calc(100vh-10rem)]">
            {children}
        </div>
    )
}

export default Box;