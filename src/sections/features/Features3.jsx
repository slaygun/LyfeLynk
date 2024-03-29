import { Tabs } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/AnimatedSection";


export default function Features2() {
  const tabs = [
    {
      title: "Accuracy",
      value: "Accuracy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Leave no doubt.</h1>
          <p className="text-sm md:text-2xl mb-4">LyfeLynk's advanced AI meticulously analyzes data, offering researchers a clear picture of health trends. Contribute to accurate health discoveries with your data.
          </p>
          <img
            src="/assets/feature_pics/f3-1.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Protection",
      value: "Protection",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Maximum benefits, zero compromise.</h1>
          <p className="text-sm md:text-2xl mb-4">Our powerful AI safeguards sensitive information while unlocking profound health insights. Rest easy knowing your privacy is safe as science moves forward.
          </p>
          <img
            src="/assets/feature_pics/f3-2.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Voice",
      value: "Voice",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Your voice matters.</h1>
          <p className="text-sm md:text-2xl mb-4">Help guide LyfeLynk's AI development to drive research tailored to the medical concerns that matter most to you. Shape the future of healthcare analytics for the issues closest to your heart.
          </p>
          <img
            src="/assets/feature_pics/f3-3.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Reach",
      value: "Reach",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Think big!</h1>
          <p className="text-sm md:text-2xl mb-4">Become part of a global effort to develop innovative healthcare solutions with benefits that extend far and wide. Your data can contribute to improving lives on an international scale.
          </p>
          <img
            src="/assets/feature_pics/f3-4.png"
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
      <div className="container h-[30rem] md:h-[45rem] relative b flex flex-col mx-auto w-full  items-start justify-start md:mt-10 mb-40">
        
        <div class="bg-gradient-to-r from-slate-400 to-indigo-500 my-6 p-0.5 rounded-full ">
          <div class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl py-2 px-4 bg-background rounded-full">
            DeAI Analytics
          </div>
        </div>
        
        <Tabs tabs={tabs} />
      </div>
    </AnimatedSection>
  );
}

