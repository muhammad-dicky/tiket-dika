"use client"
import Image from "next/image";
import Smooth from "../../public/smooth.png"

import React from 'react'



export default function SmoothTrip () {
    return ( 
<div className="p-10 lg:px-36">
  <p className="font-bold text-3xl">Smooth trip, zero worry!</p>
  <p className="text-sm">Avoid losses due to trip cancellations or rescheduling, booking errors, and more.</p>
  <Image className="md:p-20 pt-10" src={Smooth} alt={"wasd"} />
</div>

     );
}
 
// export default SmoothTrip;