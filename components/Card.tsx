interface CardProp {
  // display: string,
  width: '100%' | '75%' | '50%' | '25%', 
  minHeight: '0' | '1rem' | '2rem',
  bgColor: 'white' | 'black',
  children: React.ReactNode
}

const widthClassNames = {
  "100%": `w-full min-w-64 min-h-10 rounded-md`,
  "75%": `w-3/4 min-w-64 min-h-10 rounded-md`,
  "50%": `w-1/2 min-w-64 rounded-md`,
  "25%": `w-1/4 min-w-64 rounded-md`,
}

const minHeightClassNames = {
  "0": "min-h-0",
  "1rem": "min-h-1rem",
  "2rem": "min-h-2rem",
}

const bgColorClassNames = {
  'white': 'bg-white border border-gray-400 border-solid rounded-md',
  'black': 'bg-black text-white rounded-md',
}


const Card = ({width, minHeight, children, bgColor} : CardProp) => {
  
  return (
    <div className={`flex flex-col justify-between ${widthClassNames[width]} ${minHeightClassNames[minHeight]} ${bgColorClassNames[bgColor]} p-10`}>
      {children}
    </div>
  )
}
export default Card;