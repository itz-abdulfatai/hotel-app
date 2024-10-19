function Activities() {
  return (
    <div className=" min-h-[70vh] py-16 w-full padding-x">
        <h2 className=" capitalize text-center mb-10 ">Activities</h2>
        <div className="w-full md:h-80 flex items-stretch justify-center flex-col md:flex-row gap-10  md:gap-3">
            <div className=" w-full max-w-[400px] cursor-pointer hover:opacity-95 h-96">
                <img className=" rounded-2xl h-2/3 w-full " src="src/assets/hero-bg-small.png" alt="" />
                <h3 className=" text-xl my-3 capitalize "> finish lake event</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, corporis.</p>
            </div>


            <div className=" cursor-pointer hover:opacity-95 bg-cover bg-left hero-lg w-full max-w-[400px] h-96  flex flex-col justify-end gap-3 text-white rounded-2xl p-3">
            <h3 className=" text-xl my-3 capitalize "> another lake event</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, corporis.</p>
            </div>

            <div className="cursor-pointer hover:opacity-95  w-full max-w-[400px] h-96">
                <h3 className=" text-xl  capitalize "> another event</h3>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, corporis.</p>
            <img className=" rounded-2xl h-2/3 w-full " src="src/assets/room.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Activities