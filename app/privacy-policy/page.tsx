import dynamic from 'next/dynamic';
import { Navigation } from "@/components/navigation";
import { PageWrapper } from "@/components/page-wrapper";

const PrivacyPolicy = dynamic(() => import('@/components/privacy-policy').then(mod => mod.PrivacyPolicy));

export const metadata = {
  title: 'Privacy Policy - Texel',
  description: 'Privacy Policy for Texel.',
  alternates: {
    canonical: 'https://texel.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <Navigation />
      <PrivacyPolicy />
    </PageWrapper>
  );
}
