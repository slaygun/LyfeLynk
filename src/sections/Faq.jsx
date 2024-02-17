import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"


function Faq() {
  return (
    <section className="py-10 w-full max-w-4xl p-6 mx-auto">
      <div className="text-center">
        <Badge variant="outline">FAQs</Badge>
        <h1 className="py-4 text-6xl font-bold">Frequently Asked Questions</h1>
      </div>

      <div className="mt-6">
        <Accordion className="w-full divide-y" collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-4 cursor-pointer text-lg font-medium  ">
              What is the purpose of this website?
            </AccordionTrigger>
            <AccordionContent className="p-4">
              This website is designed to provide users with a comprehensive overview of our services and products.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="p-4 cursor-pointer text-lg font-medium  ">
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="p-4">
              You can reach out to our customer support team via the 'Contact Us' page. We are available 24/7 to
              assist you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="p-4 cursor-pointer text-lg font-medium">
              What are the payment methods available?
            </AccordionTrigger>
            <AccordionContent className="p-4">
              We accept all major credit cards, PayPal, and bank transfers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="p-4 cursor-pointer text-lg font-medium">
              How safe is it to Sign Up?
            </AccordionTrigger>
            <AccordionContent className="p-4">
            Signing up with us is completely safe, and we employ industry-standard 
            security measures to protect your personal information. 
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>

    </section>
  )
}

export default Faq;