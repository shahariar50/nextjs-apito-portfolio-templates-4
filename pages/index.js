import { Inter } from "@next/font/google";
import ClientsSection from "components/ClientsSection";
import DownloadSection from "components/DownloadSection";
import FAQSection from "components/FAQSection";
import FeaturesSection1 from "components/FeaturesSection1";
import FeaturesSection2 from "components/FeaturesSection2";
import FeaturesSection3 from "components/FeaturesSection3";
import FeaturesSection4 from "components/FeaturesSection4";
import HeroSection from "components/HeroSection";
import MainLayout from "components/MainLayout";
import PackageSection from "components/PackageSection";
import TestemonialSection from "components/TestemonialSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div class="main" id="top">
      <MainLayout>
        <HeroSection />
        <ClientsSection />
        <FeaturesSection1 />
        <FeaturesSection2 />
        <FeaturesSection3 />
        <FeaturesSection4 />
        <PackageSection />
        <TestemonialSection />
        <FAQSection />
        <DownloadSection />
      </MainLayout>
    </div>
  );
}
