import { Tabs } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"


export default function Features1() {
  const tabs = [
    {
      title: "Control",
      value: "Control",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 bg-primary">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Be the Driver and take control !</h1>
          <p className="text-sm md:text-2xl mb-4">LyfeLynk puts you in complete control of your health data – no more scattered records or corporate ownership. Take charge of your health journey.
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
      title: "Access",
      value: "Access",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 bg-primary">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Say goodbye to fragmented medical records.</h1>
          <p className="text-sm md:text-2xl mb-4">LyfeLynk brings all your health information together for instant, streamlined access by you and your chosen providers. Experience the convenience of having your health history at your fingertips.

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
      title: "Security",
      value: "Security",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 bg-primary">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Your health data is your most valuable asset.</h1>
          <p className="text-sm md:text-2xl mb-4">LyfeLynk safeguards it with advanced blockchain encryption for unyielding privacy and security. Rest assured, your health information is in the safest hands.

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
      title: "Insights",
      value: "Insights",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 bg-primary">
          <h1 className="text-xl md:text-4xl pb-4 font-bold text-white">Forget confusing medical jargon.</h1>
          <p className="text-sm md:text-2xl mb-4">Get crystal-clear insights into your health, explained in a way you can actually understand and use to improve your wellbeing. Unlock the power of knowledge to make informed health decisions.
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
      <Badge variant="outline" className="my-6">Health ID</Badge>
      <Tabs tabs={tabs} />
    </div>
  );
}

