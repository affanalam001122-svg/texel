import dynamic from 'next/dynamic';
import { Navigation } from "@/components/navigation";
import { PageWrapper } from "@/components/page-wrapper";

const Hero = dynamic(() => import('@/components/hero').then(mod => mod.Hero));
const About = dynamic(() => import('@/components/about').then(mod => mod.About));
const Services = dynamic(() => import('@/components/services').then(mod => mod.Services));
const Portfolio = dynamic(() => import('@/components/portfolio').then(mod => mod.Portfolio));
const Testimonials = dynamic(() => import('@/components/testimonials').then(mod => mod.Testimonials));
const Contact = dynamic(() => import('@/components/contact').then(mod => mod.Contact));

export default function Home() {
  return (
    <PageWrapper>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </PageWrapper>
  )
}
