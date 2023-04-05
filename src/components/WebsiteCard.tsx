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
      <div onClick={handleClick} className=" flex lex-row bg-westar-200 w-[80%] h-12 rounded-2xl my-2 mx-10 cursor-pointer hover:scale-110 duration-300">
        {/* icon */}
        <div className="rounded-2xl w-12 relative">
        
        <img src={url+'/favicon.ico'} alt="icon" className=""/>

        </div>
        
        {/* name and descrition */}
        <div className="flex mt-2 my20">
          
          <h1 className='text-2xl '>{name}</h1>
          {/* <p className='text-2xl'>{description}</p> */}
          
          
        </div>

        
      </div>
    </>
  )
}