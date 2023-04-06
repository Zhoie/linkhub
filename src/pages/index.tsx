import Head from 'next/head'
import Image from 'next/image'

import { Inter } from 'next/font/google'
import WebsiteCard from '@/components/WebsiteCard';
import { describe } from 'node:test';

import { GetStaticProps } from 'next'
// import styles from '@/styles/Home.module.css'

interface Websites {
  name: string;
  url: string;
  description: string;
  icon: string;
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // {add websites to json file}
  const aiWebsites: Websites[] = require('./api/aiWebsites.json')
  const designWebsites: Websites[] = require('./api/designWebsites.json')
  const Websites = [aiWebsites, designWebsites]
  const WebsiteTitle = ["Ai", "Design"]
  return (
    <>
      <Head>
        <title>Ai Websites</title>
        <meta name="description" content="Ai Website Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-pampas-50 h-screen bg-gradient-to-b">

        <div className='flex flex-col' >
          <h1 className='flex text-4xl w-full text-westar-950 my-5 justify-center'>Link Hub</h1>


          {Websites.map((websiteArray, index) => (
            <div key={index}>
              <h1 className='flex w-full bg-westar-950 py-2 text-pampas-50 text-3xl justify-center'>{WebsiteTitle[index]}</h1>
              <div className='grid grid-cols-3 gap-4 mb-20 mt-4'>
                {websiteArray.map((website, index) => (
                  <div key={website.url} className="flex">
                    <WebsiteCard key={website.url} name={website.name} url={website.url} description={website.description} icon={website.icon} />
                  </div>
                ))}
              </div>
            </div>

          ))}

          {/* website for Ai tools */}
          {/* <h1 className='flex w-full bg-westar-950 py-2 text-pampas-50 text-3xl justify-center'>Ai</h1>
          <div className='grid grid-cols-3 gap-4 mt-10'>
            {aiWebsites.map((website) => (
              <div key={website.url} className="flex">
                <WebsiteCard key={website.url} name={website.name} url={website.url} description={website.description} icon={website.icon} />
              </div>
            ))}


           

          </div> */}
        </div>
      </div>

    </>
  )
}


//fetch icon and description from api

async function getIcon(url: string) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}