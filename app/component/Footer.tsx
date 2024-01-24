"use client";
import { Facebook, Instagram, Youtube } from "lucide-react";
export const Footer: React.FC = () => {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-4">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our app </h3>
            <p>New Destination All day, every day. </p>
            <div className="flex justify-center my-5">
              <div className="flex items-center border w-auto rounded-lg px-4  mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-row items-center text-sm text-gray-400 justify-center">
            <p className="order-2"> &copy; tiket. </p>
            <div className="order-1 ">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
