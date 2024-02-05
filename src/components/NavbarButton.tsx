import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const navbarItems = [{
    id: 'home',
    name: 'Home',
    imageUrl: '/images/HomeBlack.png',
    imageOnClick: '/images/HomeBlue.png',
    imageMouseDown: '/images/HomeClick.png',
    linkTo: '/'
}, {
    id: 'explore',
    name: 'Explore',
    imageUrl: '/images/ExploreBlack.png',
    imageOnClick: '/images/ExploreBlue.png',
    imageMouseDown: '/images/ExploreClick.png',
    linkTo: '/explore'
}, {
    id: 'links',
    name: 'Links',
    imageUrl: '/images/LinksBlack.png',
    imageOnClick: '/images/LinksBlue.png',
    imageMouseDown: '/images/LinksClick.png',
    linkTo: '/links'
}, {
    id: 'profile',
    name: 'Profile',
    imageUrl: '/images/GuestProfile.png',
    imageOnClick: '/images/GuestProfile.png',
    imageMouseDown: '/images/GuestProfile.png',
    linkTo: '/profile' //TODO: Change to /{user.name} when user is logged in
}, {
    id: 'more',
    name: 'More',
    imageUrl: '/images/MoreBlack.png',
    imageOnClick: '/images/MoreBlue.png',
    imageMouseDown: '/images/MoreClick.png',
    linkTo: '/more'
}
];

const NavLink = ({url, name, urlClicked, urlMouseDown, linkGoTo}: {url: string, name: string, urlClicked: string, urlMouseDown: string, linkGoTo: string}) => {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    const [mouseDown, setMouseDown] = useState(false)
    const handleMouseDown = () => setMouseDown(true)

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(true);
        setCurrentImage(urlClicked);
    }

    const [currentImage, setCurrentImage] = useState(url)
    const [isClicked, setIsClicked] = useState(false)
    const [dragOut, setDragOut] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (mouseDown) {
            setCurrentImage(urlMouseDown)
        }else if(router.pathname === linkGoTo){
            setCurrentImage(urlClicked)
            setIsClicked(true)
        }else {
            setCurrentImage(url)
            setIsClicked(false)
        }
    }, [mouseDown, clicked, url, urlClicked, urlMouseDown, router.pathname, linkGoTo])

    return (
        <div 
            draggable={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={() => {setMouseDown(false)
            setDragOut(false)}}
            onClick={handleClick}
            onDragEnd={() => {
                setCurrentImage(isClicked ? urlClicked : url)
                setDragOut(true)
            }}
            
            className={`py-3 my-2 text-xl w-5/6 cursor-pointer hover:bg-slate-100 hover:rounded-lg px-4 transition-all ${mouseDown && 'text-slate-300 scale-90 '} ${router.pathname === linkGoTo ? 'text-[#01E1FF] font-black duration-0' : 'font-semibold duration-100'} ${dragOut && (isClicked ? `text-[#01E1FF] scale-100` : 'text-black scale-100')}`}
        > 
            <Link href={linkGoTo}>
                <div>
                    <img src={ currentImage } alt='' className={`w-7 mb-1 inline-block hover:scale-110 transition-all ${isHovered && 'scale-110'} clickable ${mouseDown && 'fill-slate-300 scale-95'}`} /><span className='pl-4'>{ name }</span>
                </div>
            </Link>
        </div>
    )
}

export default function NavbarButton() {
    return (
        <div className="ml-14 mt-10 cursor-default">
            {
                navbarItems.map((item) => (
                    <NavLink key={item.id} url={item.imageUrl} name={item.name} urlClicked={item.imageOnClick} urlMouseDown={item.imageMouseDown} linkGoTo={item.linkTo} />
                ))
            }
        </div>
    )
}