import { Tabs } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"


export default function Features2() {
  const tabs = [
    {
      title: "Impact",
      value: "Impact",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Be a catalyst for scientific advancement!</h1>
          <p className="text-sm md:text-2xl mb-4">Share your anonymized health data and accelerate discoveries that have the potential to transform the medical world.. Your contributions could make a real difference in the lives of many.
          </p>
          <img
            src="/assets/image.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Rewards",
      value: "Rewards",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Your data has value.</h1>
          <p className="text-sm md:text-2xl mb-4">LyfeLynk ensures you receive fair compensation whenever your contributions fuel valuable research projects. Get rewarded for making positive contributions to healthcare.
          </p>
          <img
            src="/assets/image.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Purpose",
      value: "Purpose",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Join a movement making a difference.</h1>
          <p className="text-sm md:text-2xl mb-4">Help drive research that improves healthcare for yourself, your loved ones, and people around the world. Become a champion of medical progress.
          </p>
          <img
            src="/assets/image.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Clarity",
      value: "Clarity",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">No secrets here.</h1>
          <p className="text-sm md:text-2xl mb-4">Track how your data is used, understand its impact, and retain full control over every aspect of the process. LyfeLynk prioritizes transparency so you're always informed and in charge.
          </p>
          <img
            src="/assets/image.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="container h-[30rem] md:h-[45rem] relative b flex flex-col mx-auto w-full  items-start justify-start md:mt-10 mb-40">
      <Badge variant="outline" className="my-6">Ethical Data Sourcing</Badge>
      <Tabs tabs={tabs} />
    </div>
  );
}

