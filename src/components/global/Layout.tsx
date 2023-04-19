import React from 'react'
import Headers from './Header'
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}


//a layour component that wraps around all the pages
const styles = {
    
    container:''
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className={styles.container}>
            {/* <Headers /> */}
            {children}
            {/* <Footer /> */}
        </div>
    )
}
