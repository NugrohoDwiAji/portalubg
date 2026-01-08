import NavigateNextTwoToneIcon from '@mui/icons-material/NavigateNextTwoTone';

export default function CardSubMenu({title, link, desc}) {
  return (
    <a href={link} className='w-64 lg:w-80 bg-white cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out shadow-lg px-5 py-3 rounded-lg flex items-center justify-between'>
        <div>
        <h1 className=' font-semibold text-blue-600 text-xl '>{title}</h1>
        <h2 className='text-xs'>{desc}</h2>
        </div>
        <NavigateNextTwoToneIcon color='primary'/>
    </a>
  )
}
