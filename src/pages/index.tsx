import Head from 'next/head'
// import { Inter } from 'next/font/google'
import WebsiteCard from '@/components/WebsiteCard';
// import styles from '@/styles/Home.module.css'

interface Websites {
  name: string;
  url: string;
  description: string;
  icon: string;
}

export default function Home() {

  const WebsitesArray: [Websites[]] = require('./api/websites.json')

  return (
    <>
      <Head>
        <title>Websites Hub</title>
        <meta name="description" content="Website Hubs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-pampas-50 h-screen bg-gradient-to-b">
        <div className='flex flex-col' >
          <h1 className='flex justify-center w-full text-4xl font-bold text-westar-950 my-5 '>Link Hub</h1>
          {/* WebsiteCard */}
          {Object.values(WebsitesArray).map((websites, index) => (
            <div key={index}>
              <h1 className='flex justify-center w-full bg-westar-950 py-2 text-pampas-50 text-3xl font-semibold'>{Object.keys(WebsitesArray)[index]}</h1>
              <div className='grid grid-cols-3 gap-1 md:grid-cols-4 lg:grid-cols-5 mb-20 mt-4 mr-4'>
                {websites.map((website, index) => (
                  <div key={index} className="flex">
                    <WebsiteCard key={website.url} name={website.name} url={website.url} description={website.description} icon={website.icon} />
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}


//fetch icon and description from api

// async function getIcon(url: string) {
//   const res = await fetch(url)
//   const data = await res.json()
//   return data
// }