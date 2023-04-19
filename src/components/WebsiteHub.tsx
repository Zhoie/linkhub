import React from 'react'

const styles = {
    container: 'bg-pampas-800 h-screen bg-gradient-to-b',
    hubs: 'grid grid-cols-3 gap-1 md:grid-cols-4 lg:grid-cols-5 mb-20 mt-4 mr-4'
}

interface Websites {
    name: string;
    url: string;
    description: string;
    icon: string;
}

export default function WebsiteHub() {

    const websitesArray: [Websites[]] = require('../pages/api/websites.json')
    return (
        <div className={styles.container}  >
            <div className={styles.hubs}>
                {Object.values(websitesArray).map((websites, index) => (
                    <div key={index}>
                        {Object.keys(websitesArray)}
                    </div>
                ))}

            </div>
            {/* <p>websitehub</p> */}
        </div>
    )
}
