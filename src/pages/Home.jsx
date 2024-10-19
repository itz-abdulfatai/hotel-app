import Cta from "../components/home/Cta"
import Hero from "../components/home/Hero"
import Rooms from "../components/home/Rooms"

function Home() {
  return (
    <div className="min-h-screen w-full">

    <Hero/>
    <Rooms/>
    <Cta/>
    </ div>
    
    
  )
}

export default Home