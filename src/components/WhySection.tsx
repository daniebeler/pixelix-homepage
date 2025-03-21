import { Download, Camera, Share2, Users, Globe, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Camera,
    title: "Beautiful Image Sharing",
    description:
      "Share your photos with the federated Pixelfed network. Support for filters, albums, and stories to make your content shine.",
  },
  {
    icon: Globe,
    title: "Federated Network",
    description:
      "Connect with users across the Fediverse. Follow accounts from any Pixelfed instance and expand your social reach.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Engage with a community that values privacy and user control over algorithms. Build real connections.",
  },
  {
    icon: Shield,
    title: "Privacy Respecting",
    description:
      "No tracking, no ads, no algorithms manipulating your feed. Just the content you choose to follow.",
  },
  {
    icon: Share2,
    title: "Open Source",
    description:
      "Fully open source and transparent. Contribute to the development or audit the code yourself anytime.",
  },
  /* {
    icon: Download,
    title: "Free Forever",
    description:
      "Pixelix is and will always be free to download and use, with no premium features or paywalls ever.",
  }, */
];

export default function WhySection() {
  return (
    <section
      id="features"
      className="bg-black text-white py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-lime-500/10 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMzAgMzBoMzBWMEgzMHYzMHpNMCA2MGgzMFYzMEgwdjMweiIgZmlsbC1vcGFjaXR5PSIuMDMiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 backdrop-blur-sm rounded-full mb-6 border border-lime-500/20">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <span className="text-sm font-medium text-lime-400">
              POWERFUL FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-lime-400 to-lime-200 bg-clip-text text-transparent">
            Why Choose Pixelix?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Experience social media the way it should be - beautiful, private,
            and community-driven.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={<feature.icon />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
