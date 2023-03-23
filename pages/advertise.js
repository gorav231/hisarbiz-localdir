import React from "react";
import Index from "@/src/components/advertise/Index";
import SocialIcon from "@/src/components/advertise/SocialIcon";
import ServiceCards from "@/src/components/advertise/ServiceCards";
import Layout from "@/src/layouts/Layout";
import ItService from "@/src/components/advertise/ItService";
import WebsiteDetails from "@/src/components/advertise/WebsiteDetails";
import WebDesignDevelopment from "@/src/components/advertise/WebDesign&Development";
import DigitalMarketing from "@/src/components/advertise/DigitalMarketing";
import WebEmail from "@/src/components/advertise/Web&Email";
import StarterPlan from "@/src/components/advertise/StarterPlan";

const Advertise = () => {
  return (
    <Layout>
      <Index />
      <SocialIcon />
      <ServiceCards/>
      <WebDesignDevelopment />
      <DigitalMarketing />
      <WebEmail />
      <StarterPlan />
      <ItService />
      <WebsiteDetails />
    </Layout>
  );
};

export default Advertise;
