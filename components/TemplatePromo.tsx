import Button from "./Button";
import Image from "next/image";

const TemplatePromo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`container relative ${className}`}>
      <div className="bg-gray-50 rounded-xl lg:flex shadow-lg items-center mt-28">
        <div className="lg:hidden w-full pt-8 px-8 pb-0 pt-12 text-center">
          <Image
            src="/template-mockup.png"
            width="400"
            height="306"
            alt="template mockup"
          />
        </div>
        <div className="w-full lg:w-6/12 p-8 lg:pl-8 lg:py-8">
          <h2 className="mb-5">Get a website just like this</h2>
          <p>
            Save hours and days of your time designing and coding. Instead, use
            my code and make it your own.
          </p>
          <Button
            target="_blank"
            className="mt-8"
            href="https://trishalim.gumroad.com/l/portfolio-website-template-for-software-developers"
          >
            Download template
          </Button>
        </div>
        <div
          className="hidden lg:block w-6/12 -mr-12 absolute -right-4 bottom-3 h-[calc(100%+2rem)] bg-contain bg-container bg-no-repeat"
          style={{
            backgroundImage: "url(/template-mockup.png)",
          }}
        />
      </div>
    </div>
  );
};

export default TemplatePromo;
