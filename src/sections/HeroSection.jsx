import TiltEffect from "@/components/TiltEffect"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export default function Component() {
  return (
    
    <section className="min-h-screen px-4 pb-10 space-y-10">

      <div class="circlePosition w-11/12 h-11/12 bg-[#367ed142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
        <div class="circle w-[17rem] h-[17rem] bg-[#5743ee42] rounded-[100%]" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        <h1 class="text-4xl md:text-7xl font-bold leading-tight mb-6">
          Digitally <span class="bg-gradient-to-tl from-yellow-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">Linking</span> your Health.
        </h1>

        <p className="text-xl mb-8">Get All your Health Data at a click of a Button and Make it earn for You! </p>

        <div className="flex space-x-4 ">
          <Button>The Button</Button>
          <Button className="" variant="outline">Get Started</Button>
        </div>

        <TiltEffect>
        <img
          alt="lyfelynk hero picture"
          className="mt-10"
          height="800"
          src="/assets/ctapic.png"
          style={{
            //aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="800"
        />
        </TiltEffect>

      </div>

      <div id="idea" className=" md:container text-center space-y-4">
        <Badge variant="outline">Our Vision</Badge>
        <div className="shadow-[7px_7px_153px_10px_rgba(45,_72,_210,_0.52)] rounded-xl overflow-hidden">
          <video controls>
            <source src="/assets/hero_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>


    </section>
  )
}

