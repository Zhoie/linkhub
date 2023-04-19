import { title } from 'process'
import React from 'react'


const styles = {
    container:'absolute inset-x-0 top-0  bg-yellow-500',
    title:'text-4xl font-bold text-center py-2'
}    
export default function Header() {
  return (
    <div className={styles.container}>
        {/* title */}
        <h1 className={styles.title}>Webside hubs</h1>
        
        {/* login button */}
       
      
    </div>
  )
}
