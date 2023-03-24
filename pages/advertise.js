import React from "react";
import Index from "@/src/components/advertise/Index";
import SocialIcon from "@/src/components/advertise/SocialIcon";
import ServiceCards from "@/src/components/advertise/ServiceCards";
import Layout from "@/src/layouts/Layout";
import ItService from "@/src/components/advertise/ItService";
import WebsiteDetails from "@/src/components/advertise/WebsiteDetails";
import SearchAndSocial from "@/src/components/advertise/SearchAndSocial";
import ExpertIndustry from "@/src/components/advertise/ExpertIndustry";

const Advertise = () => {
  return (
    <Layout>
      <Index />
      <SocialIcon />
      <ServiceCards/>
      <SearchAndSocial />
      <ItService />
      <WebsiteDetails />
      <ExpertIndustry />
    </Layout>
  );
};

export default Advertise;
