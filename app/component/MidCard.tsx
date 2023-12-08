"use client"

import React from 'react'

import { Card, Carousel, Col, Row, Typography } from 'antd';
import { CreditCard, Map, SearchCheck, Ticket } from 'lucide-react';

const { Title, Text } = Typography;

const imageCarousel = {
    borderRadius: 15,
}

const cardStyle = {
    backgroundColor: 'transparent'
}
interface cardContent {
    title: string;
    description: string;
    icon: React.ReactNode;
}
interface imgCarousel {
    url: string;
}

export const MidCard: React.FC = () => {
    const cardContent: cardContent[] = [
        {
            title: 'Find your destination',
            description: 'Embark on a journey to discover your dream destination, where adventure and relaxation await',
            icon: <SearchCheck/>
        },
        {
            title: 'Book a ticket',
            description: 'Ensure a smooth travel experience by booking tickets to your preferred destination via our booking form',
            icon: <Ticket/>
        },
        {
            title: 'Make payment',
            description: 'We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process',
            icon: <CreditCard/>
        },
        {
            title: 'Explore destination',
            description: 'You&apos;ll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets',
            icon: <Map/>
        },
    ]
    const imgCarousel: imgCarousel[] = [
        {
            url: '/potrait1.jpg'
        },
        {
            url: '/potrait2.jpg'
        },
        {
            url: '/potrait3.jpg'
        },
    ]
    const imgCarouselMob: imgCarousel[] = [
        {
            url: '/potrait4.jpg'
        },
        {
            url: '/potrait5.jpg'
        },
        {
            url: '/potrait6.jpg'
        }
    ]




    return (
        <>

            <Row className='mt-40'>
                <Col span={2}></Col>
                <Col span={9}>
                    <Carousel autoplay>
                        {imgCarousel.map((content, index) => (
                            <div key={index}>
                                <img src={content.url} alt="" style={imageCarousel} />
                            </div>
                        ))}
                    </Carousel>
                    <div className='sm:hidden mt-9'>
                        <Carousel autoplay >
                            {imgCarouselMob.map((content, index) => (
                                <div key={index}>
                                    <img src={content.url} alt="" />
                                </div>
                            ))}
                        </Carousel></div>
                </Col>



                <Col span={10} className='ml-7'>
                    <p>How it works</p>
                    <div className=''>

                    
                    <p className='md:hidden font-bold'>One click for you</p>
                    <p className='font-bold text-5xl'>One click for you</p>
                    {cardContent.map((content, index) => (
                        <Card key={index} className='m-3  border-gray-950' hoverable >
                            <div className='text-black '>
                            {content.icon}
                            </div>
                            <p className='font-bold text-black'>{content.title} </p>
                            <p className='hidden md:block text-black' style={{ fontSize: '14px' }}>{content.description}</p>
                        </Card>
                    ))}
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>


        </>
    )
}
