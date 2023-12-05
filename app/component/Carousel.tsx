import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from 'card1.jpg';
import slide_image_2 from 'card2.jpg';
import slide_image_3 from 'card3.jpg';
import slide_image_4 from 'card4.jpg';
import slide_image_5 from 'card5.jpg';
import slide_image_6 from 'card6.jpg';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const App: React.FC = () =>{
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="container md:px-32 lg:px-40">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide >
          <img src={"/card1.jpg"} alt="slide_image" className='rounded-3xl'/>

          <div className='dark:text-black absolute  p-4  m-2 left-0 bottom-0 bg-white rounded-md bg-clip-padding backdrop-filter ' style={{ width: '90%' }}>
            <p className='font-bold pb-4'>
              Visit World of Frozen in Hong Kong
              </p>
            <div className='flex justify-between'>
            <p>
              From blog.tiket.com
              </p>
            <Button className='text-white'>Check here!</Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/card1.jpg"} alt="slide_image"  className='rounded-3xl'/>

          <div className='dark:text-black  absolute  p-4  m-2 left-0 bottom-0 bg-white rounded-md bg-clip-padding backdrop-filter ' style={{ width: '90%' }}>
            <p className='font-bold pb-4'>
              How to Apply Passport Online
              </p>
            <div className='flex justify-between'>
            <p>
              From blog.tiket.com
              </p>
            <Button className='text-white'>Check here!</Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/card1.jpg"} alt="slide_image"  className='rounded-3xl'/>

          <div className='dark:text-black  absolute  p-4  m-2 left-0 bottom-0 bg-white rounded-md bg-clip-padding backdrop-filter ' style={{ width: '90%' }}>
            <p className='font-bold pb-4'>
              Let&apos;s Book Year-End Train Tickets
              </p>
            <div className='flex justify-between'>
            <p>
              From blog.tiket.com
              </p>
            <Button className='text-white'>Check here!</Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={"card4.jpg"} alt="slide_image"  className='rounded-3xl'/>

          <div className='dark:text-black  absolute  p-4  m-2 left-0 bottom-0 bg-white rounded-md bg-clip-padding backdrop-filter ' style={{ width: '90%' }}>
            <p className='font-bold pb-4'>
              Visit World of Frozen in Hong Kong
              </p>
            <div className='flex justify-between'>
            <p>
              From blog.tiket.com
              </p>
            <Button className='text-white'>Check here!</Button>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={"card5.jpg"} alt="slide_image"  className='rounded-3xl'/>

          <div className='dark:text-black  absolute  p-4  m-2 left-0 bottom-0 bg-white rounded-md bg-clip-padding backdrop-filter ' style={{ width: '90%' }}>
            <p className='font-bold pb-4'>
              Visit World of Frozen in Hong Kong
              </p>
            <div className='flex justify-between'>
            <p>
              From blog.tiket.com
              </p>
            <Button className='text-white'>Check here!</Button>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={"card6.jpg"} alt="slide_image"  className='rounded-3xl'/>

          <div className='dark:text-black  absolute  p-4  m-2 left-0 bottom-0 bg-white rounded-md bg-clip-padding backdrop-filter ' style={{ width: '90%' }}>
            <p className='font-bold pb-4'>Visit World of Frozen in Hong Kong</p>
            <div className='flex justify-between'>
            <p>From blog.tiket.com</p>
            <Button className='text-white'>Check here!</Button>
            </div>
          </div>
        </SwiperSlide>
      

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>



    </>
  );
}

export default App;