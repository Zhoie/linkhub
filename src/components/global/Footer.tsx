import React from 'react'
// import { RiTwitterLine, RiGithubLine } from 'react-icons/ri'

import { BsTwitter } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { GrInstagram } from 'react-icons/gr'

const styles = {
    conianter: ' absolute inset-x-0 bottom-0 py-2 bg-yellow-500',
    socialMediaContainer: 'flex flex-row py-2 gap-8 justify-center',
    icon: 'hover:scale-125 cursor-pointer transform duration-300 ',
    iconSize: 30,
    iconColor: 'black'

}
// add social media icons
const icons = [
    { icon: BsTwitter, url: 'https://twitter.com/izhoie' },
    { icon: FiGithub, url: 'https://github.com/Zhoie' },
    { icon: GrInstagram, url: 'https://www.instagram.com' },
];

export default function Footer() {

    const handleUrlClick = (url: string) => {
        //just open the url in a new tab
        window.open(url, '_blank')

    }
    return (
        <div className={styles.conianter}>
            {/* social media icons */}
            <div className={styles.socialMediaContainer}>
                {icons.map((icon, index) => (
                    <div key={index} >
                        <icon.icon onClick={() => handleUrlClick(icon.url)} className={styles.icon} size={styles.iconSize} color={styles.iconColor} />
                    </div>
                ))}
            </div>

        </div>
    )
}
