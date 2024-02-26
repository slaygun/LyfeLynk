import { Tabs } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"


export default function Features2() {
  const tabs = [
    {
      title: "Accuracy",
      value: "Accuracy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Leave no doubt.</h1>
          <p className="text-sm md:text-2xl mb-4">LyfeLynk's cutting-edge AI analyzes data with meticulous precision, providing researchers with the clearest picture of health trends. Ensure your data helps generate the most accurate and beneficial health discoveries.
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
      title: "Protection",
      value: "Protection",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Maximum benefits, zero compromise.</h1>
          <p className="text-sm md:text-2xl mb-4">Our powerful AI safeguards sensitive information while unlocking profound health insights. Rest easy knowing your privacy is safe as science moves forward.
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
      title: "Voice",
      value: "Voice",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Your voice matters.</h1>
          <p className="text-sm md:text-2xl mb-4">Help guide LyfeLynk's AI development to drive research tailored to the medical concerns that matter most to you. Shape the future of healthcare analytics for the issues closest to your heart.
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
      title: "Reach",
      value: "Reach",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 gradient">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Think big!</h1>
          <p className="text-sm md:text-2xl mb-4">Become part of a global effort to develop innovative healthcare solutions with benefits that extend far and wide. Your data can contribute to improving lives on an international scale.
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
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl my-6">DeAI Analytics</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

