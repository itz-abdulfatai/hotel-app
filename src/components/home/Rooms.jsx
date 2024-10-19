function Rooms() {
  return (
    <div className=" min-h-[70vh] pt-32 w-full padding-x">
        <h2 className=" text-center mb-10 ">Rooms & suites</h2>
        <div className="flex gap-5  flex-wrap mx-auto justify-center">
            <div className=" w-full max-w-[320px] sm:w-[230px] room-card bg-cover bg-right h-72 rounded-2xl bg-accent2 flex flex-col justify-end gap-2 p-3">
            <h4 className="capitalize text-lg">luxury forest villa</h4>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias de sit voluptatum!</p>
            <div className="w-full flex items-center justify-between">
                <button className=" border border-white py-2 px-4 rounded-full ">book</button>
                <div className="flex gap-1 items-center">2x <i className='bx bx-group'></i></div>
            </div>
            </div>
            <div className=" w-full max-w-[320px] sm:w-[230px] room-card bg-cover bg-left h-72 rounded-2xl bg-accent2 flex flex-col justify-end gap-3 p-3">
            <h4 className="capitalize text-lg">Family suite</h4>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias de sit voluptatum!</p>
            <div className="w-full flex items-center justify-between">
                <button className=" border border-white py-2 px-4 rounded-full ">book</button>
                <div className="flex gap-1 items-center">2x <i className='bx bx-group'></i></div>
            </div>
            </div>
            <div className=" w-full max-w-[320px] sm:w-[230px] room-card bg-cover bg-center h-72 rounded-2xl bg-accent2 flex flex-col justify-end gap-3 p-3">
            <h4 className="capitalize text-lg">deluxe room</h4>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias de sit voluptatum!</p>
            <div className="w-full flex items-center justify-between">
                <button className=" border border-white py-2 px-4 rounded-full ">book</button>
                <div className="flex gap-1 items-center">2x <i className='bx bx-group'></i></div>
            </div>
            </div>
            <div className=" w-full max-w-[320px] sm:w-[230px] room-card bg-cover bg-right h-72 rounded-2xl bg-accent2 flex flex-col justify-end gap-3 p-3">
            <h4 className="capitalize text-lg">sea view room</h4>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias de sit voluptatum!</p>
            <div className="w-full flex items-center justify-between">
                <button className=" border border-white py-2 px-4 rounded-full ">book</button>
                <div className="flex gap-1 items-center">2x <i className='bx bx-group'></i></div>
            </div>
            </div>
            <div className=" w-full max-w-[320px] sm:w-[230px] room-card bg-cover bg-left h-72 rounded-2xl bg-accent2 flex flex-col justify-end gap-3 p-3">
            <h4 className="capitalize text-lg">vacation mini</h4>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias de sit voluptatum!</p>
            <div className="w-full flex items-center justify-between">
                <button className=" border border-white py-2 px-4 rounded-full ">book</button>
                <div className="flex gap-1 items-center">2x <i className='bx bx-group'></i></div>
            </div>
            </div>
        </div>
        <div className=" text-center mt-5 font-krona"><button>view more &gt;&gt;&gt;&gt;</button></div>

    </div>
  )
}

export default Rooms