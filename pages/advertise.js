import React from "react";
import Index from "@/src/components/advertise/Index";
import SocialIcon from "@/src/components/advertise/SocialIcon";
import ServiceCards from "@/src/components/advertise/ServiceCards";
import Layout from "@/src/layouts/Layout";
import ItService from "@/src/components/advertise/ItService";
import WebsiteDetails from "@/src/components/advertise/WebsiteDetails";
import SearchAndSocial from "@/src/components/advertise/SearchAndSocial";
import ExpertIndustry from "@/src/components/advertise/ExpertIndustry";
import BusinessPlans from "@/src/components/advertise/BusinessPlans";
import WebHostingAndEmail from "@/src/components/advertise/WebHostingAndEmail";
import DigitalMarketingCards from "@/src/components/advertise/digital-marketing/DigitalMarketingCards";

const Advertise = () => {
  return (
    <Layout>
      <Index />
      <SocialIcon />
      <ServiceCards/>
      <SearchAndSocial />
      <ItService />
      <WebsiteDetails />
      <WebHostingAndEmail />
      <DigitalMarketingCards />
      <BusinessPlans />
      <ExpertIndustry />
    </Layout>
  );
};

export default Advertise;
