"use client"

import Image from "next/image";
import { useState } from "react";
import Carousel from "./Carousel";



const InfoCard: React.FC = () => {
    const carouselItems = [
        {
          id: 1,
          imageUrl: '/card1.jpg',
          caption: 'Caption 1',
        },
        {
          id: 2,
          imageUrl: '/card1.jpg',
          caption: 'Caption 2',
        },
        {
          id: 3,
          imageUrl: '/card1.jpg',
          caption: 'Caption 3',
        },
      ];
    
    
    return ( 
        <>
        <div className="p-10 px-20">
            <div className="flex">
                <div className="p-5">
                <Image src={"/calendar.png"} width={40} height={40} alt={"Icon"}/>
                </div>
                <div>
                    <div className="text-xl">Discover</div>
                    <div className="text-3xl font-bold">Info for You!</div>
                </div>
            </div>

            {/* <CardOurDestination/> */}
            <Carousel/>

         {/* BATAS ATAS */}

         



         {/* BATAS BAWAH */}




        </div>
        </>
     );
}
 
export default InfoCard;