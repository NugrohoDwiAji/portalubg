import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

export default function Footer() {
    return (
        <footer className='z-50 bg-linear-to-br from-blue-800 to-blue-500 p-5 text-white md:flex md:pt-10 md:justify-evenly relative left-0 lg:gap-10 '>
            <div className='mb-3 lg:w-60'>
                <img src="/img/ubg-2.png" alt="" className='h-32' />
                <div className='md:w-60'>
                <h1 className='font-semibold text-lg md:text-2xl'>Alamat</h1>
                <p className='lg:text-lg'>Jl. Ismail Marzuki No.22, Cilinaya, Kec. Cakranegara, Kota Mataram, Nusa Tenggara Barat 83127</p>
                </div>
            </div>
            <div>
                <h1  className='font-semibold text-lg lg:text-2xl'>Kontak</h1>
                <ol className='lg:text-lg lg:mt-5'>
                    <li><a href='#' className='flex gap-2'><PhoneTwoToneIcon sx={{ color: 'white' }} />08x-xxxx-xxxx</a></li>
                    <li><a href='#' className='flex gap-2'><LanguageTwoToneIcon sx={{ color: 'white' }} />Universitas Bumigora</a></li>
                    <li><a href="#" className='flex gap-2'><EmailTwoToneIcon sx={{ color: 'white' }} />universitasbumigora@gmail.com</a></li>
                </ol>
            </div>
        </footer>
    )
}
