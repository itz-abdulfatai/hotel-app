import { useState } from "react"

function Faq() {
    

    const faqs = [
        {
            name:' Lorem ipsum dolor sit amet.',
            talk: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nesciunt aperiam et nulla reprehenderit facere eius ex sit obcaecati ullam!'
        },
        {
            name:' Lorem ipsum dolor sit amet.',
            talk: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nesciunt aperiam et nulla reprehenderit facere eius ex sit obcaecati ullam!'
        },
        {
            name:' Lorem ipsum dolor sit amet.',
            talk: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nesciunt aperiam et nulla reprehenderit facere eius ex sit obcaecati ullam!'
        },
        {
            name:' Lorem ipsum dolor sit amet.',
            talk: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nesciunt aperiam et nulla reprehenderit facere eius ex sit obcaecati ullam!'
        },
        {
            name:' Lorem ipsum dolor sit amet.',
            talk: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nesciunt aperiam et nulla reprehenderit facere eius ex sit obcaecati ullam!'
        },
        
    ]
    const [activeFaq, setActiveFaq] = useState(0)
  return (
    <div className=" min-h-[70vh] py-16 w-full padding-x flex flex-col md:flex-row">
        <div className="w-full">
            <h2 className=" text-2xl md:text-6xl max-w-52 max-md:text-center mb-10 md:md-20"> frequently asked questions</h2>
            <img src="/room.jpg" className=" md:w-80 rounded-2xl" alt="" />

        </div>
        <div className="w-full flex flex-col items-stretch py-8">
           {
            faqs.map((faq, index ) => (
                <div key={index} className={` ${activeFaq == index ? 'h-32 glass2' : 'h-auto'} rounded-2xl cursor-pointer flex flex-col justify-between p-3`} onClick={()=> setActiveFaq(index)}>
                <h3 className=" text-lg flex items-center max-md:justify-between gap-4"> <span> 0{index + 1}</span>{faq.name}</h3>
                {
                    activeFaq == index && 
                <p className=" text-sm">{faq.talk}</p>
                }
            </div>
            ))
           }
            {/* <div className=" h-auto rounded-2xl flex flex-col justify-between p-3">
                <h3 className=" text-lg flex items-center max-md:justify-between gap-4"> <span> 01</span> Lorem ipsum dolor sit amet.</h3>
                <p className=" text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nesciunt aperiam et nulla reprehenderit facere eius ex sit obcaecati ullam!</p>
            </div> */}

        </div>

    </div>

  )
}

export default Faq