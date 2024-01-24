import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className=" bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 my-24 flex-row md:flex  items-center"
    >
      <div className="flex-1">
        <img src="/logotravel.png" alt="" />
      </div>
      <div className="container mx-auto flex-1 text-left">
        <h1 className="text-4xl font-bold mb-4 hidden md:block">About Us</h1>
        <p className="text-lg">
          TravelFun adalah penyedia layanan perjalanan yang menawarkan
          pengalaman liburan tak terlupakan. Kami berkomitmen untuk memberikan
          pelayanan terbaik dan destinasi yang menarik untuk setiap perjalanan
          Anda.
        </p>
        <p className="text-lg mt-4">
          Dengan TravelFun, Anda dapat menemukan berbagai paket liburan yang
          dirancang khusus untuk memenuhi kebutuhan dan preferensi Anda. Nikmati
          perjalanan tanpa repot dengan layanan kami yang berkualitas tinggi.
        </p>
      </div>
    </div>
  );
};

export default About;
