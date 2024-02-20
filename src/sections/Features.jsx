import { Tabs } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge"


export default function Features() {
  const tabs = [
    {
      title: "Problem",
      value: "Problem",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Problem Tab</p>
        </div>
      ),
    },
    {
      title: "Solution",
      value: "Solution",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Solution tab</p>
        </div>
      ),
    },
    {
      title: "Features",
      value: "Features",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white bg-primary">
          <p>Features tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="container h-[20rem] relative b flex flex-col mx-auto w-full  items-start justify-start mt-10 mb-40">
      <Badge variant="outline" className="my-6">Health ID</Badge>
      <Tabs tabs={tabs} />
    </div>
  );
}

