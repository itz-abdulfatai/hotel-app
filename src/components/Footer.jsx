function Footer() {
  return (
    <div className=" min-h-[50vh] py-10 max-w-[1000px] mx-auto max-sm:text-center w-full padding-x max:md flex flex-col justify-between sm:flex-row gap-5">
      <div className="flex flex-col gap-2 ">
        <h6 className=" text-xl"> category</h6>
        <p className="text-md cursor-pointer ">text</p>
        <p className="text-md cursor-pointer ">text</p>
        <p className="text-md cursor-pointer ">text</p>
        <p className="text-md cursor-pointer ">text here</p>
        <p className="text-md cursor-pointer ">text here</p>

      </div>
      <div className="flex flex-col gap-2">
        <h6 className=" text-sm"> category here </h6>
        <p className="text-md cursor-pointer ">text</p>
        <p className="text-md cursor-pointer ">text here</p>
        <p className="text-md cursor-pointer ">text</p>
        <p className="text-md cursor-pointer ">text here</p>
        <p className="text-md cursor-pointer ">text</p>

      </div>

      <div className="flex flex-col gap-2">
        <h6 className=" text-sm"> another category</h6>
        <p className="text-md cursor-pointer ">text here</p>
        <p className="text-md cursor-pointer ">text</p>
        <p className="text-md cursor-pointer ">text</p>
        <p className="text-md cursor-pointer ">text</p>
        <p className="text-md cursor-pointer ">text</p>

      </div>

    </div>

  )
}

export default Footer