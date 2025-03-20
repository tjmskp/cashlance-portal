
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OfferWalls } from "@/components/offers/OfferWalls";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Offers = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 md:w-[600px]">
              <TabsTrigger value="all">All Offers</TabsTrigger>
              <TabsTrigger value="surveys">Surveys</TabsTrigger>
              <TabsTrigger value="offerwalls">Offerwalls</TabsTrigger>
              <TabsTrigger value="affiliates">Affiliates</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <OfferWalls />
            </TabsContent>
            <TabsContent value="surveys">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Survey Networks</h2>
                <p className="text-muted-foreground mb-6">
                  Complete surveys and share your opinions to earn rewards.
                </p>
                <OfferWalls />
              </Card>
            </TabsContent>
            <TabsContent value="offerwalls">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Offerwall Providers</h2>
                <p className="text-muted-foreground mb-6">
                  Access a wide range of tasks and offers from various providers.
                </p>
                <OfferWalls />
              </Card>
            </TabsContent>
            <TabsContent value="affiliates">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Affiliate Networks</h2>
                <p className="text-muted-foreground mb-6">
                  Earn through promotions and affiliate partnerships.
                </p>
                <OfferWalls />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
