import TiltEffect from "@/components/TiltEffect"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    
    <section className="min-h-screen px-4 space-y-10">

      <div class="circlePosition w-11/12 h-11/12 bg-[#367ed142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
        <div class="circle w-[17rem] h-[17rem] bg-[#264dfd42] rounded-[100%]" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Your Best Value <span class="bg-gradient-to-tl from-yellow-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">Proposition</span> Here.
        </h1>

        <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consecutor edit.</p>

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

      <div id="idea" className=" md:container flex justify-center">
        <div className="rounded-xl overflow-hidden">
          <video controls>
            <source src="/assets/herovideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>


    </section>
  )
}

