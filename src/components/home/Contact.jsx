function Contact() {
  return (
    <div className=" min-h-[70vh] py-20 w-full padding-x">
        <h2 className=" text-2xl md:text-5xl text-white text-center uppercase mb-10">
               contact
            </h2>
            <div className="flex w-full md:h-96 flex-col md:flex-row items-stretch justify-between gap-10">
                <div className="w-1/3 flex flex-col gap-5">
                <div className="flex gap-3 flex-col">

                <h4 className="text-xl">Address</h4>
                <p className="">this is my address</p>
                </div>
                <div className="flex gap-3 flex-col">

                <h4 className="text-xl">Address</h4>
                <p className="">this is my address</p>
                </div>
                <div className="flex gap-3 flex-col">

                <h4 className="text-xl">Address</h4>
                <p className="">this is my address</p>
                </div>
                </div>
                <div className="md:w-2/3 w-full flex justify-stretch items-stretch  rounded-2xl border ">
                <img src="/map.svg" alt="" className=" rounded-2xl w-full h-full cursor-pointer duration-700"  />
                </div>
            </div>
    </div>

  )
}

export default Contact