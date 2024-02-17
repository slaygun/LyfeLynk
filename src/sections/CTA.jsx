import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

function CTA() {
  return (
    <section className='py-10 container px-4 md:px-6'>
      <div className="bg-primary rounded-lg p-8 shadow-md text-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left container space-y-6"> {/* Increased vertical spacing */}
            <h6 className="text-sm font-medium uppercase">Lyfelynk healthcare</h6>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Own Your Health</h1> {/* Increased bottom margin */}
            <p className="text-lg leading-loose"> {/* Increased line-height */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <Button variant="outline"> Get Started <ChevronRight/></Button>
          </div>
          <div className='flex justify-center'>
            <img
              alt="f1"
              height="auto"
              src="assets/ctapic.png"
              style={{
                aspectRatio: "1080/720",
              }}
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
