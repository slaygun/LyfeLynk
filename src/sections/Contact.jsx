import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Get in touch</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the given form and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name">First name</label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name">Last name</label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
