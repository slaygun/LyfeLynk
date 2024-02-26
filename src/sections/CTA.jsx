import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="container py-10">
      <div className="shadow-[7px_7px_153px_10px_rgba(45,_72,_210,_0.52)] bg-gradient-to-r from-violet-400 via-blue-500 to-indigo-600 bg-primary py-10 px-10 text-center rounded-xl space-y-10">
        <h1 className="text-4xl md:text-8xl font-semibold mb-4">Start your Journey with LyfeLynk</h1>
        <div className="inline-flex space-x-4 pt-5">
          <Button variant="outline">Get Started</Button>
        </div>
      </div>
    </section>
  )
}