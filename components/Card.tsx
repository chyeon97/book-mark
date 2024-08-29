"use client"
interface CardProp {
  // display: string,
  width: '100%' | '75%' | '50%' | '25%', 
  minHeight: '0' | '1rem' | '2rem' | '3rem',
  padding:'0'| '10',
  bgColor: 'white' | 'black',
  children: React.ReactNode,
  onClickCard?: () => void,
}

const widthClass = {
  "100%": `w-full min-w-64 min-h-10 rounded-md`,
  "75%": `w-full sm:w-3/4 min-w-64 min-h-10 rounded-md`,
  "50%": `w-full sm:w-1/2 min-w-64 rounded-md`,
  "25%": `w-full sm:w-1/4 min-w-64 rounded-md`,
}

const minHeightClass = {
  "0": "min-h-0",
  "1rem": "sm:min-h-1rem",
  "2rem": "sm:min-h-2rem",
  "3rem": "sm:min-h-3rem",
}

const bgColorClass = {
  'white': 'bg-white border border-gray-400 border-solid rounded-md',
  'black': 'bg-black text-white rounded-md',
}

const paddingClass = {
  '0': 'p-0',
  '10': 'p-10',
}

const Card = ({width, minHeight, padding, children, bgColor, onClickCard} : CardProp) => {

  return (
    <div 
      className={`card card-col ${widthClass[width]} ${minHeightClass[minHeight]} ${bgColorClass[bgColor]} ${paddingClass[padding]}`}
      onClick={() => onClickCard && onClickCard()}
    >
      {children}
    </div>
  )
}
export default Card;