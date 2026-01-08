import Footer from "./components/Footer";
import Header from "./components/Header"
import CardMenu from "./components/cards/CradMenu"
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import ReduceCapacityTwoToneIcon from '@mui/icons-material/ReduceCapacityTwoTone';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';
import DeveloperModeTwoToneIcon from '@mui/icons-material/DeveloperModeTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import NoteAddTwoToneIcon from '@mui/icons-material/NoteAddTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import StickyNote2TwoToneIcon from '@mui/icons-material/StickyNote2TwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { useState } from "react";
import Fakultas from '../src/datas/Fakultas.json'
import Journal from '../src/datas/Journal.json'
import Pmb from '../src/datas/Pmb.json'
import Prodi from '../src/datas/Prodi.json'
import Simlitabmas from '../src/datas/Simlitabmas.json'
import Simpeg from '../src/datas/Simpeg.json'
import Siska from '../src/datas/Siska.json'
import Spmi from '../src/datas/Spmi.json'
import ContainerSub from "./components/ContainerSub";

const responsive = () => {

  if (window.innerWidth <= 768) {
    return 50
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    return 60
  } else {
    return 70
  }
}


export default function App() {
  const [isSub, setisSub] = useState(false)
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [isInter, setisInter] = useState(true)

  const handleSub = (data, newTitle) => {

    if (window.innerWidth <= 768) {
      setisSub(!isSub)
    } else {
      setisSub(true)
    }
    setData(data)
    setTitle(newTitle)

  }



  const menu = [
    {
      icon: <AutoStoriesTwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "SISKA",
      onclick: () => handleSub(Siska, "Role SISKA")
    },
    {
      icon: <ReduceCapacityTwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "PMB",
      onclick: () => handleSub(Pmb, "PMB")
    },
    {
      icon: <IntegrationInstructionsTwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "Web Fakultas",
      onclick: () => handleSub(Fakultas, "Fakultas")
    },
    {
      icon: <DeveloperModeTwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "Web Prodi",
      onclick: () => handleSub(Prodi, "Prodi")
    },
    {
      icon: <DescriptionTwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "Journal",
      onclick: () => handleSub(Journal, "Journal")
    },
    {
      icon: <NoteAddTwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "SIMLITABMAS",
      onclick: () => handleSub(Simlitabmas, "SIMLITABMAS")
    },
    {
      icon: <SchoolTwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "SIMPEG",
      onclick: () => handleSub(Simpeg, "SIMPEG")
    },
    {
      icon: <StickyNote2TwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "SPMI",
      onclick: () => handleSub(Spmi, "SPMI")
    },
    {
      icon: <StickyNote2TwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "OBE",
      onclick: () => handleSub(Spmi, "OBE")
    },
    {
      icon: <StickyNote2TwoToneIcon color='disabled' sx={{ fontSize: responsive() }} />,
      title: "Iventaris",
      onclick: () => handleSub(Spmi, "OBE")
    },
    {
      icon: <StickyNote2TwoToneIcon color='primary' sx={{ fontSize: responsive() }} />,
      title: "Perpustakaan",
      onclick: () => handleSub(Spmi, "Perpustakaan")
    }
  ]

    const menuex = [
      {
        icon: <img src="/img/bima.jpg" alt="" className="h-20"/>,
        title: "BIMA",
        onclick: () => handleSub(Siska, "Role BIMA")
      },
      {
        icon: <img src="/img/sinta.jpg" alt="" className="h-20"/>,
        title: "SINTA",
        onclick: () => handleSub(Siska, "Role BIMA")
      },
      {
        icon: <img src="/img/sister.jpg" alt="" className="h-20"/>,
        title: "SISTER",
        onclick: () => handleSub(Siska, "Role BIMA")
      },
      {
        icon: <img src="/img/tutwuri.jpg" alt="" className="h-20"/>,
        title: "SIKOMING",
        onclick: () => handleSub(Siska, "Role BIMA")
      },
      {
        icon: <img src="/img/garuda.png" alt="" className="h-20"/>,
        title: "GARUDA",
        onclick: () => handleSub(Siska, "Role BIMA")
      }
    ]
    
  return (
    <div className="h-screen ">
      <Header />
      <div className="bg-gray-200 pt-32 px-3 pb-10 min-h-5/6 lg:w-5xl lg:mx-auto ">
        <div className="bg-white h-fit w-fit rounded-full p-1 flex justify-between mb-7 mx-auto">
          <div className="bg-gray-100 h-10 w-64 rounded-full  flex justify-between">
            <button onClick={() => setisInter(!isInter)} className={` ${isInter ? "bg-blue-500 text-white" : "text-gray-300"} h-full w-1/2 rounded-full flex justify-center items-center font-semibold text-xl transition-all duration-300 ease-in-out cursor-pointer`}>Internal</button>
            <button onClick={() => setisInter(!isInter)} className={` ${isInter ? "text-gray-300" : "bg-blue-500 text-white"}  h-full w-1/2 rounded-full flex justify-center items-center font-semibold text-xl transition-all duration-300 ease-in-out cursor-pointer`}  >Eksternal</button>
          </div>
        </div>
        {isInter ? (
          <div className="flex items-start gap-5 ">
            <div className="bg-gray-100 p-5 rounded-lg">
              <h1 className="font-semibold text-2xl md:text-3xl text-gray-800 mb-5 md:mb-7 md:pl-10">Menu</h1>
              <div className="flex flex-wrap gap-3 md:gap-7 justify-center ">

                {
                  menu.map((item, index) => (
                    <CardMenu key={index} title={item.title} icon={item.icon} onClick={item.onclick} />
                  ))
                }
              </div>
            </div>

            {
              window.innerWidth >= 768 && isSub && <ContainerSub data={data} title={title} />
            }
          </div>
        ) : (
            <div className="flex items-start gap-5 ">
            <div className="bg-gray-100 p-5 rounded-lg">
              <h1 className="font-semibold text-2xl md:text-3xl text-gray-800 mb-5 md:mb-7 md:pl-10">Menu</h1>
              <div className="flex flex-wrap gap-3 md:gap-7 justify-center ">

                {
                  menuex.map((item, index) => (
                    <CardMenu key={index} title={item.title} icon={item.icon} onClick={item.onclick} />
                  ))
                }
              </div>
            </div>

            {
              window.innerWidth >= 768 && isSub && <ContainerSub data={data} title={title} />
            }
          </div>
        )}


      </div>

      {isSub && window.innerWidth < 768 && <div className="h-screen w-screen bg-gray-700/90 fixed top-0 right-0 left-0 bottom-0">
        <button onClick={() => setisSub(!isSub)} className="absolute top-4 right-4 rounded-lg border-3 bg-blue-500/30 border-blue-500 p-2"><CloseTwoToneIcon color='primary' sx={{ fontSize: 30 }} /></button>
        <ContainerSub data={data} title={title} />
      </div>}

      <Footer />
    </div>
  )
}
