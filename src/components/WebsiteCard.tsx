import Link from 'next/link'
import Image from 'next/image'

interface Websites {
  name: string;
  url: string;
  description: string;
  icon?: string;
}



export default function Websistecard({ name, url, description, icon }: Websites) {

  function handleClick() {
    window.open(url, '_blank')
  }

  return (
    <>
      <div onClick={handleClick} className=" flex relative w-[80%] border-westar-950 border-4 my-2 mx-10 cursor-pointer hover:bg-westar-950 duration-300 ">

          <h1 className='flex w-full h-full text-2xl text-westar-950 hover:text-pampas-50 static justify-center px-2 py-2'>{name}</h1>
   
      </div>
    </>
  )
}