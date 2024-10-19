const How = () => {
  return (
    <section id="how" className="relative bg-white">
      {/* Heading area */}
      <div className="w-full flex justify-center items-center h-32 md:h-40">
        <hr className="w-full mx-5 border-gray-400"/>
      </div>
      <div className="w-full flex justify-center items-center h-32 md:h-40 absolute top-0 z-5">        
        <h1 className="text-3xl text-gray-500 bg-white px-5">How It Works</h1>
      </div>      

      {/* Content area */}
      <div className="flex flex-col justify-center w-full">
      <h3 className="text-2xl text-gray-700 text-center md:h-10">Tailored Sourcing</h3>      
      <div className="flex flex-col md:flex-row justify-center items-start w-full max-w-7xl px-4 md:px-10 text-center">
        <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 w-full md:w-1/3">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
            1
          </div>              
          <h4 className="text-gray-800 font-bold">
            Tell Us Your Requirements
          </h4>
          <p className="text-gray-700">
            We start by learning about your development goals. Whether you're looking for commercial conversions, residential plots, or airspace opportunities, we take the time to understand your vision.
          </p>
        </div>

        <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 w-full md:w-1/3">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
            2
          </div>              
          <h4 className="text-gray-800 font-bold">
            Strategic Search Begins
          </h4>
          <p className="text-gray-700">
            Based on your criteria, our team conducts an in-depth search using advanced data, planning insights, and our network to find properties that match your development goals.
          </p>
        </div>

        <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 w-full md:w-1/3">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
            3
          </div>              
          <h4 className="text-gray-800 font-bold">
            Property Analysis
          </h4>
          <p className="text-gray-700">
            Before presenting any opportunities, we conduct a thorough planning and financial viability analysis. This ensures that every option we present is primed for success and profitability.
          </p>
        </div>

      </div>
      </div>

      {/* Content area */}
      <div className="flex justify-center w-full">
      <div className="flex flex-col md:flex-row justify-center items-start max-w-7xl px-10 text-center">

        <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 w-full md:w-1/3">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
            4
          </div>              
          <h4 className="text-gray-800 font-bold">
            Tailored Proposals
          </h4>
          <p className="text-gray-700">
            We present you with carefully selected options, complete with planning insights, valuation data, and projected returns. Each proposal is tailored to your specific development strategy.
          </p>
        </div>

        <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 w-full md:w-1/3">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
            5
          </div>              
          <h4 className="text-gray-800 font-bold">
            Expert Guidance
          </h4>
          <p className="text-gray-700">
            We’re here to offer advice and help make the process of buying one of our property investment opportunities as easy as possible.
          </p>
        </div>

        <div className="bg-white p-6 flex flex-col justify-center items-center gap-4 w-full md:w-1/3">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
            6
          </div>              
          <h4 className="text-gray-800 font-bold">
            Building a Relationship
          </h4>
          <p className="text-gray-700">
            We’re eager to give you the best deals because we don’t just want this to be a one time purchase, we want to ensure that you come back to us time and time again to expand your property portfolio.
          </p>
        </div>
      </div>
      </div>

      <hr className="w-full md:mx-5 border-gray-400 my-12"/>

      <div className="flex justify-center">
      <div className="flex flex-col px-10 max-w-7xl">
        <h3 className="text-3xl text-gray-400 text-center">Join the Brikbloom Insider List</h3>
        <h4 className="text-gray-600 text-center">(Exclusive Access to Off-Market Deals)</h4>
        <div className="flex flex-col md:flex-row mt-4 md:mt-0 justify-center items-start w-full md:px-10 text-center">

          <div className="bg-white p-4 md:p-6 flex flex-col justify-center items-center gap-4 w-full md:w-1/2">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
              1
            </div>              
            <h4 className="text-gray-800 font-bold">
              Express Your Interest
            </h4>
            <p className="text-gray-700">
              Simply let us know you're interested by submitting your details below and including "Join Brikbloom List" in the message.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 flex flex-col justify-center items-center gap-4 w-full md:w-1/2">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center text-2xl text-gray-600">
              2
            </div>              
            <h4 className="text-gray-800 font-bold">
              Early Access to Deals
            </h4>
            <p className="text-gray-700">
              Once you're part of the Brikbloom Insider List, you'll receive early access to off-market property deals before they hit the open market. 
            </p>
          </div>

        </div>
      </div>
      </div>

    </section>
  )
}

export default How;