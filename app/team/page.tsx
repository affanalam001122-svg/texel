import { Team } from "@/components/team";
import { Navigation } from "@/components/navigation";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata = {
  title: 'Our Team - Texel',
  description: 'Meet the talented and passionate team behind Texel. We are a group of designers, developers, and strategists dedicated to creating amazing digital experiences.',
  alternates: {
    canonical: 'https://texel.com/team',
  },
}

export default function TeamPage() {
  return (
    <PageWrapper>
      <Navigation />
      <Team />
    </PageWrapper>
  );
}
