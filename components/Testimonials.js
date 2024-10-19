import Image from 'next/image';

const testimonialImage = {
  src: "/images/testimonial.jpg",
  alt: "Testimonial Image",
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative h-[42rem] w-full">
      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">        
        <Image src={testimonialImage.src} layout="fill" objectFit="cover"/>      
        <div className="absolute w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30">
          <h1 className="text-3xl md:text-5xl pt-10 text-center">Discover Why Our Clients Love Us</h1>
          <div className="flex gap-4 justify-center items-center w-full max-w-7xl h-full px-10 text-center md:mt-0">

            {/* Testimonial 1 */}
            <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 text-gray-800 w-1/3">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                J
              </div>              
              <div>
              ⭐⭐⭐⭐⭐
              </div>
              <h4>
                Developer
              </h4>
              <p>
                "Brikbloom sourced us a prime development plot in record time. Their expertise and insight are unmatched!"
              </p>
              <p><span className="font-bold">John M., Developer</span> - 10/12/2024</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 text-gray-800 w-1/3">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                J
              </div>              
              <div>
              ⭐⭐⭐⭐⭐
              </div>
              <h4>
                Developer
              </h4>
              <p>
                "Brikbloom sourced us a prime development plot in record time. Their expertise and insight are unmatched!"
              </p>
              <p><span className="font-bold">John M., Developer</span> - 10/12/2024</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 text-gray-800 w-1/3">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                J
              </div>              
              <div>
              ⭐⭐⭐⭐⭐
              </div>
              <h4>
                Developer
              </h4>
              <p>
                "Brikbloom sourced us a prime development plot in record time. Their expertise and insight are unmatched!"
              </p>
              <p><span className="font-bold">John M., Developer</span> - 10/12/2024</p>
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Testimonials;