import Image from "next/image";
import Link from "next/link";

const heroImage = {
  src: "/images/hero.jpeg",
  alt: "Hero Image",
}

const Hero = () => {
  return (
    <div className="relative h-[32rem] w-full">
      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">        
        <Image src={heroImage.src} layout="fill" objectFit="cover"/>      
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="bg-white bg-opacity-90 mx-8 py-8 px-1 md:mx-0 md:p-12 text-center">
            <h1 className="text-2xl md:text-4xl text-gray-600">Building Foundations, Growing Opportunities</h1>
            <h2 className="text-xl md:text-2xl text-black mt-2 mb-6">Discover Development Opportunities That Thrive</h2>
            <Link href="#services" className="bg-[#DDE5DD] text-black px-20 md:px-8 py-4 rounded-full font-bold">LEARN MORE</Link>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Hero
