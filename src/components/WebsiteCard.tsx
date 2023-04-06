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
      <div onClick={handleClick} className=" flex relative w-[80%] border-westar-950 border-4 rounded my-2 mx-10 cursor-pointer hover:bg-westar-950 duration-300 ">

          <h1 className='flex static justify-center w-full h-full text-xl text-westar-950 font-semibold hover:text-pampas-50 px-4 py-2'>{name}</h1>
      </div>
    </>
  )
}