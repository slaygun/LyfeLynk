import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="container py-10">
      <div className="bg-gradient-to-r from-violet-400 via-blue-500 to-indigo-600 bg-primary py-10 px-10 text-center rounded-xl space-y-10">
        <h1 className="text-4xl md:text-8xl font-extrabold mb-4">Start your journey with LyfeLynk</h1>
        <div className="inline-flex space-x-4 pt-5">
          <Button variant="secondary">The Button</Button>
          <Button variant="outline">Get Started</Button>
        </div>
      </div>
    </section>
  )
}