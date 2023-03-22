import React from "react";
import Index from "@/src/components/advertise/Index";
import SocialIcon from "@/src/components/advertise/SocialIcon";
import ServiceCards from "@/src/components/advertise/ServiceCards";
import Layout from "@/src/layouts/Layout";
import ItService from "@/src/components/advertise/ItService";
import WebsiteDetails from "@/src/components/advertise/WebsiteDetails";

const Advertise = () => {
  return (
    <Layout>
      <Index />
      <SocialIcon />
      <ServiceCards/>
      <ItService />
      <WebsiteDetails />
    </Layout>
  );
};

export default Advertise;
