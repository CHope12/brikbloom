import Image from "next/image";

const aboutImage = {
  src: "/images/about.jpg",
  alt: "About Image",
}

const About = () => {
  return (
    <section id="about">
    <div className="relative h-[12rem] w-full">
      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">        
        <Image src={aboutImage.src} layout="fill" objectFit="cover"/>      
        <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-30">
          <h1 className="text-4xl md:text-5xl text-center">The Story Behind Brikbloom</h1>
        </div>
      </div>      
    </div>
    <div className="relative w-full flex justify-center bg-white">
    <div className="w-full max-w-7xl">
      <p className="text-gray-600 p-10">At Brikbloom Property Sourcing, we believe that every great investment starts with a strong foundation. Our name reflects this philosophy—<span className="font-bold">"Brick"</span> symbolises the solid, enduring nature of property, while <span className="font-bold">"Bloom"</span> captures the potential for growth, new opportunities, and the ability to flourish over time. Together, they represent our mission: to connect property developers with opportunities that are both dependable and full of promise.</p>
      <h2 className="px-10 text-2xl text-gray-800">Our Family Run Business</h2>
      <p className="text-gray-600 p-10">Brikbloom is more than just a property sourcing company—it’s a family-run business with deep roots in the property industry. Our commitment to personalised service, trust, and long-term relationships reflects the values we’ve built as a family. We know that every client has unique goals, and we approach each project with the same care and dedication as we would for our own family’s investments.</p>
      <h2 className="px-10 text-2xl text-gray-800">Our Vision</h2>
      <p className="text-gray-600 p-10">We aim to transform how developers find and invest in properties by delivering deals that offer both immediate value and long-term growth potential. Whether you're an experienced developer or new to property sourcing, we tailor our services to match your needs and goals, ensuring each opportunity is thoroughly vetted for success.</p>
    </div>
    </div>
    </section>
  )
}

export default About;