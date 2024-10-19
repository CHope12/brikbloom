const Contact = () => {
  return (
    <section id="contact" className="relative w-full h-[50rem] bg-white">
      
      {/* Heading area */}
      <div className="w-full flex justify-center items-center h-40">
        <hr className="w-full mx-5 border-gray-400"/>
      </div>
      <div className="w-full flex justify-center items-center h-40 absolute top-0 z-5">        
        <h1 className="text-3xl text-gray-500 bg-white px-5">Contact Us</h1>
      </div>   

      <div className="relative flex justify-center w-full">
      <div className="w-full max-w-7xl flex flex-col px-12 md:px-24 justify-center items-center gap-6">
        <h2 className="text-xl md:text-2xl text-gray-800">Ready to Bloom? Let's Talk!</h2>
        <form action="" method="POST" className="flex flex-col w-full gap-4 text-gray-800">
          <input type="text" placeholder="Name / Company" className="w-full border rounded-sm border-gray-200 px-4 py-2"/>
          <input type="email" placeholder="Email*" className="w-full border rounded-sm border-gray-200 px-4 py-2"/>
          <input type="tel" placeholder="Phone*" className="w-full border rounded-sm border-gray-200 px-4 py-2"/>
          <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder="Message"
            className="w-full border rounded-sm border-gray-200 px-4 py-2"
          />
          <div className="flex justify-center items-center w-full">
            <button type="submit" className="bg-gray-300 hover:bg-gray-400 rounded-full w-32 py-4 font-bold">SEND</button>
          </div>
        </form>
      </div>
      </div>

    </section>
  )
}

export default Contact;
