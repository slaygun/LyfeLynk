import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="min-h-screen py-10 md:py-20 px-4">

      <div class="circlePosition w-full h-full bg-[#507dd154] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
        <div class="circle w-[17rem] h-[17rem] bg-[#4969df19] rounded-[100%]" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Your Best Value <span class="bg-gradient-to-tl from-yellow-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">Proposition</span> Here.
        </h1>

        <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consecutor edit.</p>

        <div className="flex space-x-4">
          <Button>The Button</Button>
          <Button className="" variant="outline">Get Started</Button>
        </div>
        <img
          alt="lyfelynk hero picture"
          className="mt-10"
          height="300"
          src="/assets/placeholder.svg"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
    </section>
  )
}

