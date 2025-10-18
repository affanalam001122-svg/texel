import { PageWrapper } from "@/components/page-wrapper";
import { Navigation } from "@/components/navigation";

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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last updated: October 26, 2023</p>
        <p className="mb-4">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Interpretation and Definitions</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">Interpretation</h3>
        <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        {/* Add more placeholder content as needed */}
      </div>
    </PageWrapper>
  );
}
