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

  const websites: Websites[] = require('./api/websites.json')

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
          <h1 className='flex text-4xl text-black mt-10 mx-auto'>A Hub Link</h1>

          <div className='grid grid-cols-3 gap-4 mt-10'>

            {websites.map((website) => (
              <div className="flex">
                <WebsiteCard key={website.name} name={website.name} url={website.url} description={website.description} icon={website.icon} />
              </div>
            ))}

          </div>
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