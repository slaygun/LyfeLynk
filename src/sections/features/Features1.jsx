import { Tabs } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/AnimatedSection";


export default function Features1() {
  const tabs = [
    {
      title: "Control",
      value: "Control",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Be the Driver and take control !</h1>
          <p className="text-sm md:text-2xl mb-4">LyfeLynk puts you in complete control of your health data – no more scattered records or corporate ownership. Take charge of your health journey.
          </p>
          <img
            src="/assets/feature_pics/f1-1.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Access",
      value: "Access",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Say goodbye to fragmented medical records.</h1>
          <p className="text-sm md:text-2xl mb-4">LyfeLynk brings all your health information together for instant, streamlined access by you and your chosen providers.
          </p>
          <img
            src="/assets/feature_pics/f1-2.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Security",
      value: "Security",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Your health data is your most valuable asset.</h1>
          <p className="text-sm md:text-2xl mb-4">
            LyfeLynk employs advanced blockchain encryption for your health data, ensuring steadfast privacy and security.

          </p>
          <img
            src="/assets/feature_pics/f1-3.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Insights",
      value: "Insights",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Forget confusing medical jargon.</h1>
          <p className="text-sm md:text-2xl mb-4">Gain clear insights into your health, explained in an understandable way. Unlock knowledge to make informed decisions and improve your wellbeing.
          </p>
          <img
            src="/assets/feature_pics/f1-4.png"
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
    <AnimatedSection>
      <div id="features" className="container h-[30rem] md:h-[45rem] relative b flex flex-col mx-auto w-full  items-start justify-start md:mt-10 mb-40">
 
          <div class="bg-gradient-to-r from-slate-400 to-indigo-500 my-6 p-0.5 rounded-full ">
            <div class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl py-2 px-4 bg-background rounded-full">
              Health ID
            </div>
          </div>
          
        <Tabs tabs={tabs} />
      </div>

    </AnimatedSection>
  );
}

