import { Feature } from "./_components/feature";
import { Heading } from "./_components/heading";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Feature />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default MarketingPage;