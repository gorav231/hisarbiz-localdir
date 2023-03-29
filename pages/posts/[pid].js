import { useRouter } from "next/router";
import BestStrategies from "@/src/components/advertise/digital-marketing/card-1/BestStrategies";
import SocialMediaMarketing from "@/src/components/advertise/digital-marketing/card-2/SocialMediaMarketing";
import BrandAwareness from "@/src/components/advertise/digital-marketing/card-3/BrandAwareness";
import ListingTalk from "@/src/components/advertise/digital-marketing/card-4/ListingTalk";
import ListingStories from "@/src/components/advertise/digital-marketing/card-5/ListingStories";
import LoanAndFinancing from "@/src/components/advertise/digital-marketing/card-6/LoanAndFinancing";
import VpnNeed from "@/src/components/advertise/digital-marketing/card-7/VpnNeed";
import SeoListing from "@/src/components/advertise/digital-marketing/card-8/SeoListing";
import ListingMarketing from "@/src/components/advertise/digital-marketing/card-9/ListingMarketing";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  if (pid == "Best Strategies For Make My Listing To Increase Engagement") {
    return <BestStrategies />;
  } else if (pid == "Social Media Marketing for Make My Listing") {
    return <SocialMediaMarketing />;
  } else if (pid == "Brand Awareness for Make My Listing") {
    return <BrandAwareness />;
  } else if (pid == "Make My Listing Talk") {
    return <ListingTalk />;
  } else if (pid == "Make My Listing Stories") {
    return <ListingStories />;
  } else if (pid == "Loan And Financing Options For Make My Listing In Australia") {
    return <LoanAndFinancing />;
  } else if (pid == "What Is a VPN and Why Do You Need One") {
    return <VpnNeed />;
  } else if (pid == "SEO for Make My Listing") {
    return <SeoListing />;
  } else if (pid == "Make My Listing Marketing") {
    return <ListingMarketing />;
  } else {
    alert("invalid post");
    router.push("/")
  }
  return <p>{pid}</p>;
};

export default Post;
