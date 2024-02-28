import AnimatedSection from "@/components/AnimatedSection"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <AnimatedSection>
      <section className="container py-10">
        <div className="shadow-[7px_7px_153px_10px_rgba(45,_72,_210,_0.52)] bg-gradient-to-r from-violet-400 via-blue-500 to-indigo-600 bg-primary
          py-20 px-10 text-center rounded-xl space-y-4 md:space-y-10">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">Start your Journey with LyfeLynk</h1>
          <div className="inline-flex space-x-4 pt-0">

            <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </button>
            
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}