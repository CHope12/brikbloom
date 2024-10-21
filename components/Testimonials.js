"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';


const testimonialImage = {
  src: "/images/testimonial.jpg",
  alt: "Testimonial Image",
}

const Testimonials = () => {


    const [splideOptions, setSplideOptions] = useState({
      type: "loop", // Loop back to the beginning when reaching the end
      perPage: 3, // Number of items visible per page
      perMove: 1, // Move one item at a time
      rewind: true, // Rewind to start when the end is reached
      pagination: false, // Enable pagination dots
      width: "80rem",
      fixedWidth: "33%",
    });

    function resize() {
      if (window.innerWidth < 768) {
        setSplideOptions({
          type: "loop", // Loop back to the beginning when reaching the end
          perPage: 1, // Number of items visible per page
          perMove: 1, // Move one item at a time
          rewind: true, // Rewind to start when the end is reached
          pagination: false, // Enable pagination dots
          width: "24rem",
          fixedWidth: "100%",
        });
      } else {
        setSplideOptions({
          type: "loop", // Loop back to the beginning when reaching the end
          perPage: 3, // Number of items visible per page
          perMove: 1, // Move one item at a time
          rewind: true, // Rewind to start when the end is reached
          pagination: false, // Enable pagination dots
          width: "80rem",
          fixedWidth: "33%",
        });
      }
    }

    useEffect(() => {

      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize", resize);
      };
    }), [];

  return (
    <section id="testimonials" className="relative h-[42rem] w-full">
      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">        
        <Image src={testimonialImage.src} layout="fill" objectFit="cover"/>      
          <div className="absolute w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30">
            <h1 className="text-3xl md:text-5xl pt-10 text-center text-white">Discover Why Our Clients Love Us</h1>
            <div className="flex gap-4 justify-center items-center w-full max-w-7xl h-full px-10 text-center md:mt-0">

            <Splide options={splideOptions}>
              <SplideSlide>
                <div className="bg-white p-6 m-16 flex flex-col justify-center items-center gap-4 text-gray-800">
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                    J
                  </div>              
                  <div>
                  ⭐⭐⭐⭐⭐
                  </div>
                  <h4 className="text-xl">
                    Developer
                  </h4>
                  <p>
                    "Brikbloom sourced us a prime development plot in record time. Their expertise and insight are unmatched!"
                  </p>
                  <p><span className="font-bold">John M., Developer</span> - 10/12/2024</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="bg-white p-6 m-16 flex flex-col justify-center items-center gap-4 text-gray-800">
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                    J
                  </div>              
                  <div>
                  ⭐⭐⭐⭐⭐
                  </div>
                  <h4 className="text-xl">
                    Residential Developer
                  </h4>
                  <p>
                    "Working with Brikbloom feels like working with family. They found opportunities that perfectly fit our goals."
                  </p>
                  <p><span className="font-bold">James T., Developer</span> - 10/12/2024</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="bg-white p-6 m-16 flex flex-col justify-center items-center gap-4 text-gray-800">
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                    R
                  </div>              
                  <div>
                  ⭐⭐⭐⭐⭐
                  </div>
                  <h4 className="text-xl">
                    Property Investor
                  </h4>
                  <p>
                    "Brikbloom helped us secure off-market deals we couldn’t have found anywhere else."
                  </p>
                  <p><span className="font-bold">Ravinder H., Investor</span> - 16/12/2024</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="bg-white p-6 m-16 flex flex-col justify-center items-center gap-4 text-gray-800">
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                    J
                  </div>              
                  <div>
                  ⭐⭐⭐⭐⭐
                  </div>
                  <h4 className="text-xl">
                    Developer
                  </h4>
                  <p>
                    "Brikbloom sourced us a prime development plot in record time. Their expertise and insight are unmatched!"
                  </p>
                  <p><span className="font-bold">John M., Developer</span> - 10/12/2024</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="bg-white p-6 m-16 flex flex-col justify-center items-center gap-4 text-gray-800">
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                    J
                  </div>              
                  <div>
                  ⭐⭐⭐⭐⭐
                  </div>
                  <h4 className="text-xl">
                    Residential Developer
                  </h4>
                  <p>
                    "Working with Brikbloom feels like working with family. They found opportunities that perfectly fit our goals."
                  </p>
                  <p><span className="font-bold">James T., Developer</span> - 10/12/2024</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="bg-white p-6 m-16 flex flex-col justify-center items-center gap-4 text-gray-800">
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
                    R
                  </div>              
                  <div>
                  ⭐⭐⭐⭐⭐
                  </div>
                  <h4 className="text-xl">
                    Property Investor
                  </h4>
                  <p>
                    "Brikbloom helped us secure off-market deals we couldn’t have found anywhere else."
                  </p>
                  <p><span className="font-bold">Ravinder H., Investor</span> - 16/12/2024</p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Testimonials;