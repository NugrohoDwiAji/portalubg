

export default function CradMenu({onClick, title, icon}) {
  return (
    <button onClick={onClick} className='bg-white cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out shadow-lg  h-28 md:h-40 w-28 md:w-40 flex flex-col gap-2 items-center justify-center rounded-lg'>
      {icon}
      <h1 className='font-semibold text-gray-800'>{title}</h1>
    </button>
  )
}
