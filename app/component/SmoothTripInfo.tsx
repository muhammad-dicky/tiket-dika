import Image from "next/image";
import React from "react";
import Kiri from "../../public/kiri.png";
import Kanan from "../../public/kanan.png";
import Kiri1 from "../../public/kiri1.png";

export default function SmoothTripInfo() {
  return (
    <>
      <div
        id="info"
        className="p-10 flex items-center flex-col md:flex-row md:justify-evenly"
      >
        <div className=" md:mb-0 md:mr-8 ">
          <Image className="w-80 pr-10 md:w-96 " src={Kiri} alt={"wasd"} />
        </div>
        <div className="flex flex-col space-y-5 text-center">
          <div className="text-3xl font-bold">
            Book Tickets and Plan Your Holiday with Ease
          </div>

          <div className="text-base font-bold">
            Easy to Buy Tickets and Hotels.
          </div>
          <div>
            Buy flight tickets, hotels, trains, car rental, also tickets for
            events and attractions immediately on tiket.com app and website.
          </div>

          <div className="text-base font-bold">Various Top Products.</div>
          <div>
            Get various airlines with complete routes around the world and find
            many hotels in Asia. You can also get train tickets, book car
            rental, and entertainment tickets.
          </div>
        </div>
      </div>
      <div
        id="info"
        className="p-10 flex items-center flex-col md:flex-row md:justify-evenly"
      >
        <div className=" md:mb-0 md:mr-8 ">
          <Image className="w-80 pr-10 md:w-96 " src={Kanan} alt={"wasd"} />
        </div>
        <div className="flex flex-col space-y-5 text-center md:text-left">
          <div className="text-3xl font-bold">
            Plenty of Promo and Benefits, Save Even More!
          </div>

          <div className="text-base font-bold">
            Get Special Promo & Discount!
          </div>
          <div>
            Find discounts for your favorite flights and hotels to save more for
            your upcoming vacation! Make your dream vacation come true with a
            special promo provided by tiket.com. There is no reason to delay
            your vacation!
          </div>

          <div className="text-base font-bold">Tiket Rewards Benefits.</div>
          <div>
            Enjoy the Tiket Rewards benefits in Tiket Points that you can redeem
            with discounts.
          </div>
        </div>
      </div>
      <div
        id="info"
        className="p-10 flex items-center flex-col md:flex-row md:justify-evenly"
      >
        <div className=" md:mb-0 md:mr-8 ">
          <Image className="w-80 pr-10 md:w-96 " src={Kiri1} alt={"wasd"} />
        </div>
        <div className="text-center flex flex-col space-y-5">
          <div className="text-3xl font-bold">
            Book the Cheap Flight Tickets to Your Favorite Destinations
          </div>

          <div>
            Book your tickets and hotel now, then pay the installment in just
            one click. Yup, easy-peasy as that! You can use this installment
            program to buy flight tickets, hotels, entertainment tickets, and
            rent a car. 3, 6, or 12 months installment? You choose!
          </div>
        </div>
      </div>
    </>
  );
}
