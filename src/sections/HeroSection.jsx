import TiltEffect from "@/components/TiltEffect"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from 'react-scroll';

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
          <Link
                  to={"contact"}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  //activeClass="active"
                >
            <Button>Contact Us</Button>
          </Link>
          <Button className="" variant="outline">Get Started</Button>
        </div>

        <TiltEffect>
        <img
          alt="lyfelynk hero picture"
          className="mt-10"
          height="500"
          src="/assets/heart.png"
          style={{
            //aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="500"
        />
        </TiltEffect>

      </div>

      <div id="vision" className="md:container text-center space-y-4">
        <Badge variant="outline">Our Vision</Badge>
        <div className="rounded-xl overflow-hidden">
          <div
            style={{
              position: "relative",
              paddingTop: "56.25%", // 9:16 aspect ratio (1080 / 1920)
            }}
          >
            <video
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover", // or "contain" based on your preference
              }}
            >
              <source src="/assets/hero_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>



    </section>
  )
}

