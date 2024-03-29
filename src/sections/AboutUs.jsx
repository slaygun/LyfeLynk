import AnimatedSection from "@/components/AnimatedSection";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

const teamData = [
  {
    name: "Sivia Goyal",
    designation: "CEO",
    avatar: "assets/team/ceo.jpeg", 
    content:
      "Civil engineer, MBA, and Edtech entrepreneur (1K to 100K+ users). Combines tech and healthcare experience (Infosys, Dr. Reddy Labs) with a passion for blockchain-driven innovation.",
  },
  {
    name: "Aaditya Chandankar",
    designation: "CTO",
    avatar: "assets/team/cto.jpeg",
    content:
      "Mechanical engineer, Web3 specialist, proven blockchain developer (Ethereum, Avalanche, Polygon, ICP). Health tech research experience. Passionate about decentralized healthcare solutions.",
  },
  {
    name: "Nabh Raghav",
    designation: "Lead Designer",
    avatar: "assets/team/designer.jpeg",
    content:
      "Frontend Expert, UI/UX Specialist excelling in crafting visually captivating designs, dedicated to elevating user experiences through innovation, precision and creativity.",
  },
  {
    name: "Harshvardhan Singh",
    designation: "AI & ML Head",
    avatar: "assets/team/aiml.jpeg",
    content:
      "AI & ML Head. Data Science Specialist excelling in leveraging advanced technologies. Drives innovation, analytics, and insightful solutions for enhanced data-driven decision-making.",
  },
  // Add more team members here
];

export default function AboutUs() {
  return (
    <AnimatedSection>
      <section  id="about"  className="w-full py-12 md:py-24 lg:py-32">

        <div class="circlePosition w-11/12 h-11/12 bg-[#367ed142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
          <div class="circle w-[17rem] h-[17rem] bg-[#5743ee42] rounded-[100%]" />
        </div>

        <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The talent that drives LyfeLynk.
            </p>

            
            <div className="flex justify-center container">
            <Carousel
              opts={{
                align: "start",
              }}
              className="py-4 w-full max-w-64 sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
            >
              <CarouselContent className="px-4 ">
                {teamData.map((member) => (
                  <CarouselItem key={member.name} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                    <Card className="flex flex-col items-center text-center p-6 h-full backdrop-filter bg-background/50 shadow-lg">
                      <Avatar className="w-20 h-20 border-2 border-gray-200">
                        <AvatarImage alt={member.name} src={member.avatar} />
                        <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                      <h4 className="mt-2 text-gray-600 font-medium">{member.designation}</h4>
                      <div className="flex flex-col h-full">
                        <p className="mt-4 text-gray-500 dark:text-gray-400">{member.content}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            </div>
          


            
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
