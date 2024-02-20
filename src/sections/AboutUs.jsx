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
    name: "Alice Smith",
    designation: "CEO",
    avatar: "your-avatar-image-1.jpg", // Replace with your image paths
    content:
      "I'm passionate about empowering people to take control of their health data. LyfeLynk makes it easy and secure to manage and share your information.",
  },
  {
    name: "David Moore",
    designation: "Head of Marketing",
    avatar: "your-avatar-image-2.jpg",
    content:
      "Our marketing team is dedicated to raising awareness about the importance of data privacy and the benefits of LyfeLynk's innovative platform.",
  },
  {
    name: "David Moore",
    designation: "Head of Marketing",
    avatar: "your-avatar-image-2.jpg",
    content:
      "Our marketing team is dedicated to raising awareness about the importance of data privacy and the benefits of LyfeLynk's innovative platform.",
  },
  // Add more team members here
];

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">

      <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Learn more about the team behind LyfeLynk.
          </p>

          <div class="circlePosition w-11/12 h-11/12 bg-[#367ed142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
            <div class="circle w-[17rem] h-[17rem] bg-[#5743ee42] rounded-[100%]" />
          </div>
          
          <div className="flex justify-center container">
          <Carousel
            opts={{
              align: "start",
            }}
            className="py-4 w-full max-w-64 sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
          >
            <CarouselContent className="px-4">
              {teamData.map((member) => (
                <CarouselItem key={member.name} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <Card className="flex flex-col items-center text-center p-6 h-full">
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
        

          <Button
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Meet the Team
          </Button>
        </div>
      </div>
    </section>
  )
}
