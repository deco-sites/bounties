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

const MICHAEL_CHEN_BUILDER: Builder = {
  id: "michael-chen",
  name: "Michael Chen",
  title: "AI Research Engineer",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  bio: "Research engineer focused on cutting-edge AI algorithms and neural network architectures.",
  fullBio: "Michael is an AI research engineer with over 6 years of experience in cutting-edge AI algorithms and neural network architectures. He has published papers in top AI conferences and developed novel approaches to deep learning. Michael specializes in transformer architectures, attention mechanisms, and efficient neural network design for real-world applications.",
  experienceLevel: "Expert",
  isL1Certified: true,
  location: "Palo Alto, CA",
  skills: ["PyTorch", "TensorFlow", "CUDA", "JAX", "Research", "Papers", "Neural Networks", "Transformers"],
  certifications: ["Agentic Engineer L1", "PhD Computer Science", "AI Research Certification"],
  socialLinks: {
    linkedin: "https://linkedin.com/in/michael-chen",
    github: "https://github.com/michael-chen",
    website: "https://michael-chen.dev",
    twitter: "https://twitter.com/michael_chen_ai"
  }
};

export default function MichaelChenPage({
  builder = MICHAEL_CHEN_BUILDER,
  showBackButton = true,
  backButtonUrl = "/",
  testProp = "Michael Chen Page",
  
  
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
                      <span class="ml-2 px-3 py-1 bg-[#d0ec19] text-[#1d1917] rounded-full text-sm font-semibold font-inter">
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
              ))}
            </div>
          </div>

          <div class="bg-[#292524] rounded-2xl p-8 mb-8">
            <h3 class="text-2xl font-bold text-[#fafaf9] mb-4 font-inter">Certifications</h3>
            <div class="flex flex-wrap gap-2">
              {builder.certifications.map((cert) => (
                <span class="px-3 py-1 bg-[#1d1917] text-[#fafaf9] rounded-full text-sm font-inter">
                  {cert}
                </span>
              ))}
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
                    class="px-4 py-2 bg-[#d0ec19] text-[#1d1917] rounded-lg font-semibold font-inter hover:bg-[#d0ec19]/90 transition-colors"
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