function Form() {
    return (
        <div className=" min-h-[70vh] py-16 w-full padding-x">
            <div className="w-[80vw] border p-5 rounded-3xl hero-lg bg-cover border-[#ffffff54] gap-5 mx-auto min-h-96 flex  flex-col justify-around items-center px-20 text-center  ">
                <h2 className=" text-2xl md:text-5xl text-white text-center uppercase">
                    Book a room
                </h2>
                <form action="" className=" glass-nav p-4 bg-secondary text-primary flex flex-col justify-between gap-5 rounded-2xl max-w-[550px] w-full">
                    <h3 className=" text-xl md:text-3xl  text-center uppercase ">
                        leave your contact info to book a room
                    </h3>
                    <div className=" flex flex-col gap-3 items-stretch">
                        <input type="text" placeholder="Name"  className=" placeholder:text-[var(--color-primary)] bg-transparent py-4 px-2 outline-none border-b-2 border-primay"/>
                        <input type="text" placeholder="Email"  className=" placeholder:text-[var(--color-primary)] bg-transparent py-4 px-2 outline-none border-b-2 border-primay"/>
                        <input type="text" placeholder="Phone"  className=" placeholder:text-[var(--color-primary)] bg-transparent py-4 px-2 outline-none border-b-2 border-primay"/>
                    </div>



                </form>
            </div>
        </div>

    )
}

export default Form