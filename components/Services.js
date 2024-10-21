"use client";
import ServiceSection from "@/components/ServiceSection";
import { useEffect, useState } from "react";

const offMarketImage = {
  src: "/images/offmarket.JPEG",
  alt: "Off Market Image",
}

const developmentPlotImage = {
  src: "/images/developmentplot.JPEG",
  alt: "Development Plot Image",
}

const strategicLandImage = {
  src: "/images/strategicland.JPEG",
  alt: "Strategic Land Image",
}

const tailoredImage = {
  src: "/images/tailored.JPEG",
  alt: "Tailored Development Image",
}

const commercialImage = {
  src: "/images/commercialtoresidential.JPEG",
  alt: "Commercial to Residential Image",
}

const Services = () => {

  const [imgOrder, setImgOrder] = useState([true, false, true, false, true]);

  useEffect (() => {
    if (window.innerWidth < 768) {
      setImgOrder([true, true, true, true ,true]);
    }
  
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setImgOrder([true, true, true, true ,true]);        
      } else {
        setImgOrder([true, false, true, false, true]);
      }});
    }, []);

  return (
    <section id="services" className="relative w-full bg-white pb-12">      

      {/* Heading area */}
      <div className="w-full flex justify-center items-center h-40">
        <hr className="w-full mx-5 border-gray-400"/>
      </div>
      <div className="w-full flex justify-center items-center h-40 absolute top-0 z-5">        
        <h2 className="text-3xl text-gray-600 bg-white px-5 text-center mx-12 md:mx-0">Brikbloom Property Sourcing Services</h2>                
      </div>
      <div className="flex justify-center items-center mt-6 md:-mt-5">
        <div className="flex justify-center items-center w-full mx-8 md:mx-0 md:md:w-1/2 text-gray-600 text-center">
        At Brikbloom, we specialise in sourcing prime development opportunities across London and beyond. Whether you're seeking residential investments, commercial, or development projects, we find properties with strong foundations and room to grow.
        </div>
      </div>

    <div className="flex flex-col justify-center items-center w-full">
    <div className="flex flex-col justify-center w-full max-w-7xl">
      {/* #1 Image / Text Section */}
      <ServiceSection img={offMarketImage.src} alt={offMarketImage.alt} imgBefore={imgOrder[0]} content={
        <>
          <h3 className="text-[22px] md:text-2xl text-black py-6">Off-Market Property Deals</h3>
          <p className="text-lg">Brikbloom has privileged access to a network of off-market property opportunities that are not available on the open market. These exclusive deals are ideal for developers looking to secure prime assets with minimal competition.</p>
          <p className="text-lg font-bold pt-6 pb-1">Benefits:</p>
          <ul className="text-left">
            <li><span className="font-bold">• Exclusive Access:</span> Our deep connections within the industry allow us to source off-market land and development opportunities, giving you a competitive edge.</li>
            <li><span className="font-bold">• Discreet Transactions:</span> We ensure that off-market deals are handled with full discretion, enabling you to pursue high-value opportunities without public exposure or competitive bidding.</li>
            <li><span className="font-bold">• Hidden Gems:</span> We specialise in finding properties with untapped potential—whether it’s redevelopment, conversion, or new-build projects, off-market deals often yield higher returns with less market saturation.</li>
          </ul>            
        </>
      }/>

      {/* #2 Image / Text Section */}
      <ServiceSection img={developmentPlotImage.src} alt={developmentPlotImage.alt} imgBefore={imgOrder[1]} content={
        <>
          <h3 className="text-2xl text-black py-6">Development Plot Sourcing</h3>
          <p className="text-lg">We target sites with potential for high-value development, ensuring  each plot you consider is thoroughly analysed for its planning potential and financial viability.</p>
          <p className="text-lg font-bold pt-6 pb-1">Benefits:</p>
          <ul className="text-left">
            <li><span className="font-bold">• Game Changing Analysis:</span> We conduct an exhaustive review of each plot's planning history, zoning regulations, and financial feasibility to ensure that you are only presented with the best opportunities. </li>
            <li><span className="font-bold">• Permitted Development Rights (PD Rights):</span> We leverage strategies including MA, ZA, G, A, AA, AB, AC, and AD PD Rights, identifying opportunities to optimise development potential without full planning applications. </li>
            <li><span className="font-bold">• Land and Airspace Development:</span> From underused land to airspace above existing structures, we find opportunities for vertical and horizontal expansion, giving you maximum value for your investment.</li>
          </ul>
        </>
      }/>

      {/* #3 Image / Text Section */}
      <ServiceSection img={tailoredImage.src} alt={tailoredImage.alt} imgBefore={imgOrder[2]} content={
        <>      
          <h3 className="text-2xl text-black py-6">Tailored Development Sourcing</h3>
          <p className="text-lg">We understand that property developers often have specific criteria and ambitious goals. Our tailored sourcing service is designed to meet those exact needs by finding off-market land and development projects that align perfectly with your objectives.</p>
          <p className="text-lg font-bold pt-6 pb-1">Benefits:</p>
          <ul className="text-left">
            <li><span className="font-bold">• Custom Strategies:</span> Whether it’s maximizing PD Rights, identifying large-scale development opportunities, or sourcing land for multi-phase projects, we tailor our search to meet your goals. </li>
            <li><span className="font-bold">• Access to Off-Market Deals:</span> Our extensive network allows us to find exclusive, off-market opportunities that offer untapped potential. </li>
            <li><span className="font-bold">• Planning & Financial Due Diligence:</span> Every site we present is backed by meticulous planning and financial viability checks, ensuring you can proceed with confidence.</li>
          </ul>
        </>
      }/> 

      {/* #4 Image / Text Section */}
      <ServiceSection img={strategicLandImage.src} alt={strategicLandImage.alt} imgBefore={imgOrder[3]} content={
        <>
          <h3 className="text-2xl text-black py-6">Strategic Land Development Opportunities</h3>
          <p className="text-lg">Brikbloom sources strategic land parcels with redevelopment potential. Whether you’re looking for urban plots, suburban land, or infill development sites, we analyse the potential for maximising value through residential or commercial projects.</p>
          <p className="text-lg font-bold pt-6 pb-1">Benefits:</p>
          <ul className="text-left">
            <li><span className="font-bold">• Advanced Land Data:</span> We access extensive data on residential and commercial comparables, helping you understand the market and the potential returns of each site. </li>
            <li><span className="font-bold">• Title Splitting & Land Assembly:</span> We identify opportunities for title splitting, land assembly, and other strategies that add significant value through creative development approaches. </li>
            <li><span className="font-bold">• Airspace Potential:</span> For densely populated areas, we help developers unlock airspace potential, allowing vertical expansion that capitalizes on unused space.</li>
          </ul>
        </>
      }/>
      

      {/* #5 Image / Text Section */}
      <ServiceSection img={commercialImage.src} alt={commercialImage.alt} imgBefore={imgOrder[4]} content={
        <>
          <h3 className="text-2xl text-black py-6">Commercial to Residential Conversions</h3>
          <p className="text-lg">Brikbloom excels in finding commercial buildings primed for conversion into residential properties. We identify opportunities that align with PD Rights and local planning regulations to create value where others might see limitations.</p>
          <p className="text-lg font-bold pt-6 pb-1">Benefits:</p>
          <ul className="text-left">
            <li><span className="font-bold">• Custom Strategies:</span> Our deep understanding of commercial-to-residential conversions under the latest permitted development rights helps you unlock value quickly and efficiently. </li>
            <li><span className="font-bold">• Access to Off-Market Deals:</span> Each opportunity comes with a comprehensive financial assessment, ensuring the conversion offers strong return potential with manageable costs. </li>
            <li><span className="font-bold">• Planning & Financial Due Diligence:</span> We provide advanced insights into planning regulations, helping you navigate any complexities involved in converting commercial spaces to residential use. </li>
          </ul>
        </>      
      }/>   

      </div>
    </div>
    </section>
  )
}

export default Services;
