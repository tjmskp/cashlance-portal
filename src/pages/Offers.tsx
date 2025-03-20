
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OfferWalls } from "@/components/offers/OfferWalls";

const Offers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <OfferWalls />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
