import Banner from "@/components/HomePage/Banner";
import ElevateSection from "@/components/HomePage/ElevateSection";
import EmpoweringSection from "@/components/HomePage/EmpoweringSection";
import SoftwareSection from "@/components/HomePage/SoftwareSection";
import Stats from "@/components/HomePage/Stats";
import SubscriptionSection from "@/components/HomePage/SubscriptionSection";
import Testimonial from "@/components/HomePage/TestimonialSection";
import VideoCarousel from "@/components/HomePage/VideoCarousel";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Banner />
      <div className='mt-16'>
        <WhyChooseUs title='Why choose Book My Doc for your clinic management?' description="In today's digital healthcare era, rely on us to support your successful clinic. Book My Doc is like having additional staff without the extra monthly expenses." />
      </div>
      <div className='mt-16'>
        <SoftwareSection title='Our app is your clinic management software' description='The app provides a complete set of features for seamless clinic management. From telemedicine to patient management and online prescriptions, it covers all your clinic needs.' />
      </div>
      <div className='mt-16'>
        <EmpoweringSection title='Empowering healthcare providers to deliver exceptional care and create an unmatched patient experience' description='The primary goal of healthcare is not only to cure but to foster comprehensive healing. This goes beyond treating physical ailments, encompassing every meaningful interaction between doctors and patients—both tangible and intangible.' />
      </div>
      <div className='mt-16'>
        <Stats />
      </div>
      <div className='mt-16'>
        <ElevateSection title='Elevate your clinic with our app for doctors' description='Book My Doc provides top healthcare technology solutions for clinic management. Achieve more with less effort, ensuring a seamless experience for both you and your patients.' />
      </div>
      <div className='mt-16'>
        <VideoCarousel title='YouTube videos made for our doctors' />
      </div>
      <div className='mt-16'>
        <Testimonial title='Our doctors love us! Here’s their feedback...' />
      </div>
      <div className='my-16'>
        <SubscriptionSection title='Comprehensive subscription for healthcare practice.' />
      </div>
    </>
  );
}
