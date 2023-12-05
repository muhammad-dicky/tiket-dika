import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CardImage, CardImageTitle, CardImageTitleDestination } from './component/CardImage'
import { MidCard } from './component/MidCard'
import { Footer } from './component/Footer'
import InfoCard from './component/InfoCard'
import SmoothTrip from './component/SmoothTrip'

export default function Home() {
  return (
    <>
    
    <CardImageTitle/>
    <CardImage/>
    {/* <CardImageTitleDestination/> */}

    <MidCard/>

    

    <InfoCard/>
    <SmoothTrip/>

    <Footer/>
    </>
  )
}
