import { Button } from "@/components/ui/button"


export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Learn more about the team behind LyfeLynk.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="flex flex-col items-center justify-center p-4 md:p-8">
            <img
              alt="Team member"
              className="rounded-full object-cover object-center border-4 border-gray-100 w-40 h-40"
              height="160"
              src="/placeholder.svg"
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Alice Smith</h3>
              <p className="text-sm text-gray-500">CEO</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 md:p-8">
            <img
              alt="Team member"
              className="rounded-full object-cover object-center border-4 border-gray-100 w-40 h-40"
              height="160"
              src="/placeholder.svg"
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Bob Johnson</h3>
              <p className="text-sm text-gray-500">CTO</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 md:p-8">
            <img
              alt="Team member"
              className="rounded-full object-cover object-center border-4 border-gray-100 w-40 h-40"
              height="160"
              src="/placeholder.svg"
              style={{
                aspectRatio: "160/160",
                objectFit: "cover",
              }}
              width="160"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Ella Brown</h3>
              <p className="text-sm text-gray-500">CFO</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
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

