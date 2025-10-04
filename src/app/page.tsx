import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import ProfessionalServices from '@/components/ProfessionalServices';
import StrategicDifferentiators from '@/components/StrategicDifferentiators';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider variant="gradient" />
      
      <ServiceCards />
      <SectionDivider variant="default" />
      
      <ProfessionalServices />
      <SectionDivider variant="dots" />
      
      <StrategicDifferentiators />
      <SectionDivider variant="gradient" />
      <SectionDivider variant="dots" />
      
      <HowItWorks />
      <SectionDivider variant="default" />
      
      <Testimonials />
      <SectionDivider variant="gradient" />
      
      <FAQ />
    </>
  );
}