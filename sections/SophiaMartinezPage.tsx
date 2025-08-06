import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
export interface Builder {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  fullBio: string;
  experienceLevel: "Junior" | "Mid" | "Senior" | "Expert";
  isL1Certified: boolean;
  location?: string;
  skills: string[];
  certifications: string[];
  socialLinks?: {
    linkedin?: string;
    github?: string;
    website?: string;
    twitter?: string;
  };
}
export interface Props {
  builder?: Builder;
  showBackButton?: boolean;
  backButtonUrl?: string;
  testProp?: string;
  navbarLogo?: string;
  navbarButtonText?: string;
  navbarButtonUrl?: string;
}
const SOPHIA_MARTINEZ_BUILDER: Builder = {
  id: "sophia-martinez",
  name: "Sophia Martinez",
  title: "MLOps Engineer",
  avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1644&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bio: "MLOps specialist building scalable machine learning infrastructure and deployment pipelines.",
  fullBio: "Sophia is a senior MLOps engineer with over 5 years of experience building scalable machine learning infrastructure and deployment pipelines. She has designed and implemented CI/CD systems for ML models, monitoring solutions, and automated deployment strategies. Sophia specializes in Kubernetes, Docker, cloud infrastructure, and ensuring ML models are production-ready and maintainable.",
  experienceLevel: "Senior",
  isL1Certified: false,
  location: "Denver, CO",
  skills: ["Kubernetes", "Docker", "AWS", "Azure", "CI/CD", "Monitoring", "MLOps", "Infrastructure"],
  certifications: ["Kubernetes Administrator", "AWS Solutions Architect", "DevOps Certification"],
  socialLinks: {
    linkedin: "https://linkedin.com/in/sophia-martinez",
    github: "https://github.com/sophia-martinez",
    website: "https://sophia-martinez.dev",
    twitter: "https://twitter.com/sophia_martinez_mlops"
  }
};
export default function SophiaMartinezPage({
  builder = SOPHIA_MARTINEZ_BUILDER,
  showBackButton = true,
  backButtonUrl = "/",
  testProp = "Sophia Martinez Page",
  navbarButtonUrl = "/"
}: Props) {
  return (
    <div class="w-full bg-[#1d1917] min-h-screen">
      {/* Navbar */}
      {showBackButton && (
        <nav class="relative z-20 flex items-center justify-between px-6 py-4 lg:px-8">
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <Image
                src={navbarLogo}
                alt="deco.cx"
                width={120}
                height={40}
                class="h-8 w-auto"
              />
            </a>
          </div>
          <a
            href={navbarButtonUrl}
            class="px-4 py-2 border border-[#292524] bg-[#292524] text-[#fafaf9] rounded-lg hover:bg-[#292524]/80 transition-colors font-inter flex items-center"
          >
            <Icon id="ChevronLeft" size={16} class="mr-2" />
            {navbarButtonText}
          </a>
        </nav>
      )}
      {/* Builder Profile */}
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
          <div class="bg-[#292524] rounded-2xl p-8 mb-8">
            <div class="flex flex-col lg:flex-row gap-8">
              <div class="flex-shrink-0">
                <Image
                  src={builder.avatar}
                  alt={builder.name}
                  width={200}
                  height={200}
                  class="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                />
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <h1 class="text-3xl lg:text-4xl font-bold text-[#fafaf9] font-inter">
                    {builder.name}
                  </h1>
                  {builder.isL1Certified && (
                    <div class="flex items-center">
                      <Image
                        src="https://assets.decocache.com/bounties/c61bbf50-e820-4910-be4a-0e39c96b7ce9/badge-l1.png"
                        alt="L1 Certified"
                        width={32}
                        height={32}
                        class="w-8 h-8"
                      />
                      <span class="ml-2 px-3 py-1 bg-[#1d1917] text-[#fafaf9] rounded-full text-sm font-semibold font-inter">
                        L1 Certified
                      </span>
                    </div>
                  )}
                </div>
                <h2 class="text-xl text-[#d0ec19] font-inter mb-4">
                  {builder.title}
                </h2>
                <p class="text-[#a49d9a] font-inter mb-4">
                  {builder.bio}
                </p>
                {builder.location && (
                  <div class="flex items-center text-[#a49d9a] font-inter">
                    <Icon id="MapPin" size={16} class="mr-2" />
                    {builder.location}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="bg-[#292524] rounded-2xl p-8 mb-8">
            <h3 class="text-2xl font-bold text-[#fafaf9] mb-4 font-inter">About</h3>
            <p class="text-[#a49d9a] font-inter leading-relaxed">
              {builder.fullBio}
            </p>
          </div>
          <div class="bg-[#292524] rounded-2xl p-8 mb-8">
            <h3 class="text-2xl font-bold text-[#fafaf9] mb-4 font-inter">Skills</h3>
            <div class="flex flex-wrap gap-2">
              {builder.skills.map((skill) => (
                <span class="px-3 py-1 bg-[#1d1917] text-[#fafaf9] rounded-full text-sm font-inter">
                  {skill}
                </span>
              )}
            </div>
          </div>
          <div class="bg-[#292524] rounded-2xl p-8 mb-8">
            <h3 class="text-2xl font-bold text-[#fafaf9] mb-4 font-inter">Certifications</h3>
            <div class="flex flex-wrap gap-2">
              {builder.isL1Certified && (
                <span class="px-3 py-1 bg-[#1d1917] text-[#fafaf9] rounded-full text-sm font-inter">
                  Agentic Engineer L1
                </span>
              )}
            </div>
          </div>
          {builder.socialLinks && (
            <div class="bg-[#292524] rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-[#fafaf9] mb-4 font-inter">Connect</h3>
              <div class="flex gap-4">
                {builder.socialLinks.linkedin && (
                  <a
                    href={builder.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-[#1d1917] text-[#fafaf9] rounded-lg font-semibold font-inter hover:bg-[#292524] transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {builder.socialLinks.github && (
                  <a
                    href={builder.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 border border-[#292524] text-[#fafaf9] rounded-lg font-inter hover:bg-[#292524] transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {builder.socialLinks.website && (
                  <a
                    href={builder.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 border border-[#292524] text-[#fafaf9] rounded-lg font-inter hover:bg-[#292524] transition-colors"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 