interface CardProp {
  width: '100%' | '75%' | '50%' | '25%', 
  bgColor: 'white' | 'black',
  children: React.ReactNode
}

const sizeClassNames = {
  "100%": `w-full min-h-3.25rem min-w-64 rounded-md`,
  "75%": `w-3/4 min-h-3.25rem min-w-64 rounded-md`,
  "50%": `w-1/2 min-h-3.25rem min-w-64 rounded-md`,
  "25%": `w-1/4 min-h-3.25rem min-w-64 rounded-md`,
}

const bgColorClassNames = {
  'white': 'bg-white border border-gray-400 border-solid rounded-md',
  'black': 'bg-black text-white rounded-md',
}

const Card = ({width, children, bgColor} : CardProp) => {
  
  return (
    <div className={`${sizeClassNames[width]} ${bgColorClassNames[bgColor]}`}>
      {children}
    </div>
  )
}
export default Card;