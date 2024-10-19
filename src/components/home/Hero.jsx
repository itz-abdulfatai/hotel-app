function Hero() {
  return (
    <div className="hero-sm h-[80vh] md:h-screen bg-cover md:hero-lg flex flex-col gap-5 w-full py-16  rounded-br-3xl rounded-bl-3xl relative ">
      <h1 className=" md:text-9xl uppercase text-white font-krona md:mt-36 mt-10 sm:ml-14 ml-8  ">
        HOTEL
      </h1>
      <p className="padding-x text-white md:w-3/5 xl:w-2/5">
        Immerse yourself in the serene beauty of nature at out Hotel, Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestias ex
        saepe mollitia consequatur voluptatum, aliquid .
      </p>
      <div className="flex gap-y-5 flex-col md:flex-row justify-between sm:pl-16 pl-8 flex-1 items- items-stretch  overflow-hidden">
        <div className="flex gap-3 items-center ">
          <div className=" py-1 px-4 rounded-3xl text-white border border-white">nature</div>
          <div className=" py-1 px-4 rounded-3xl text-white border border-white">modern</div>
          <div className=" py-1 px-4 rounded-3xl text-white border border-white">relaxation</div>
        </div>
        <div className="flex relative md:left-20   items-stretch gap-3 overflow-hidden max-md:hidden">
          <div className=" w-64 glass-nav rounded-xl h-full flex items-stretch p-2 justify-between gap-2">
            <img src="src/assets/hero-bg-small.png" alt="" className=" w-[120%] rounded-xl "/>
            <div>
              <h3 className=" text-base ">Forest spa</h3>
              <p className=" text-xs">Lorem ipsum dolor sit amet consectetur amenda, deleniti eveniet</p>
            </div>
          </div>
          <div className=" w-64 glass-nav rounded-xl h-full flex items-stretch p-2 justify-between gap-2">
            <img src="src/assets/hero-bg-small.png" alt="" className=" w-[120%] rounded-xl "/>
            <div>
              <h3 className=" text-base ">Forest spa</h3>
              <p className=" text-xs">Lorem ipsum dolor sit amet consectetur amenda, deleniti eveniet</p>
            </div>
          </div>
        </div>

      </div>
      <div className="absolute h-40 md:h-32 glass3 w-[80vw] left-[50%] right-[50%] translate -bottom-20 rounded-xl md:-bottom-20 flex items-center justify-around   ">
        <div className=" w-2/3 flex justify-center items-center gap-10  ">

        <button className=" w-44 text-center border-r text-lg font-semibold capitalize text-white ">check in</button>
        <button className=" w-44 text-center border-r text-lg font-semibold capitalize text-white ">check out</button>
        <button className=" w-44 text-center border-r text-lg font-semibold capitalize text-white ">guests</button>
        </div>
        <input type="text" className=" outline-none  bg-transparent placeholder:text-right placeholder:font-montserrat" placeholder="search" />
      </div>
    </div>
  );
}

export default Hero;
