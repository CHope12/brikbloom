import Image from "next/image";

const ServiceSection = ({ content, img, imgBefore }) => {

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center p-6">
      <div className={`w-full md:w-1/2 flex justify-center items-center relative ${imgBefore ? "block" : "hidden"}`}>
        <Image
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} // optional
        />
      </div>
      <div className="md:md:w-1/2 h-full flex justify-center items-center">
        <div className="px-4 md:px-0 md:w-3/4 h-3/4 bg-white flex justify-center items-center">
          <div className="text-gray-600 text-center">
          {content}
          </div>
        </div>
      </div>      
      <div className={`w-full md:w-1/2 flex justify-center items-center relative ${imgBefore ? "hidden" : "block"}`}>
        <Image
          src={img}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} // optional
        />
        </div>
    </div>
  )
}

export default ServiceSection;