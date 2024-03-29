import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CardImage, CardImageTitle, CardImageTitleDestination } from './component/CardImage'
import { MidCard } from './component/MidCard'
import { Footer } from './component/Footer'
import InfoCard from './component/InfoCard'
import SmoothTrip from './component/SmoothTrip'
import SmoothTripInfo from './component/SmoothTripInfo'
import About from './component/About'
import FloatingActionButton from './component/FloatingActionButton'

export default function Home() {
  return (
    <>

    

    <FloatingActionButton/>


    {/* INDONESIAN TOURISM */}
    <CardImageTitle/>

    
    <CardImage/>

    {/* One Click For You */}
    <MidCard/>

    <About/>

    <InfoCard/>
    <SmoothTrip/>
    <SmoothTripInfo/>

    <Footer/>
    </>
  )
}
