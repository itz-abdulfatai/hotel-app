import Activities from "../components/home/Activities"
import Contact from "../components/home/Contact"
import Cta from "../components/home/Cta"
import Faq from "../components/home/Faq"
import Form from "../components/home/Form"
import Hero from "../components/home/Hero"
import Rooms from "../components/home/Rooms"

function Home() {
  return (
    <div className="min-h-screen w-full">

    <Hero/>
    <Rooms/>
    <Cta/>
    <Activities/>
    <Faq/>
    <Contact/>
    <Form/>
    </ div>
    
    
  )
}

export default Home