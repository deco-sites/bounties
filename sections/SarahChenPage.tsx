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

const SARAH_CHEN_BUILDER: Builder = {
  id: "sarah-chen",
  name: "Sarah Chen",
  title: "Machine Learning Engineer",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  bio: "Specialized in computer vision and deep learning with 5+ years of experience building production ML systems.",
  fullBio: "Sarah is a senior machine learning engineer with over 5 years of experience in computer vision and deep learning. She has worked on production ML systems at scale, including autonomous vehicles, medical imaging, and recommendation systems. Sarah is passionate about making AI more accessible and ethical.",
  experienceLevel: "Senior",
  isL1Certified: true,
  location: "San Francisco, CA",
  skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Docker", "AWS", "Git", "Linux"],
  certifications: ["Agentic Engineer L1", "AWS Machine Learning Specialty", "Google Cloud ML Engineer"],
  socialLinks: {
    linkedin: "https://linkedin.com/in/sarah-chen",
    github: "https://github.com/sarah-chen",
    website: "https://sarah-chen.dev",
    twitter: "https://twitter.com/sarah_chen_ai"
  }
};

export default function SarahChenPage({
  builder = SARAH_CHEN_BUILDER,
  showBackButton = true,
  backButtonUrl = "/",
  testProp = "Sarah Chen Page"
}: Props) {
  
  return (
    <div class="w-full bg-[#1d1917] min-h-screen">
      {/* Back Button */}
      {showBackButton && (
        <div class="px-6 py-4 lg:px-8">
          <a
            href={backButtonUrl}
            class="inline-flex items-center text-[#a49d9a] hover:text-[#fafaf9] transition-colors font-inter"
          >
            <Icon id="ArrowBack" size={20} class="mr-2" />
            Back to Builders
          </a>
        </div>
      )}

      {/* Builder Profile */}
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div class="lg:col-span-2">
              {/* Profile Header */}
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
                      <div class="flex items-center text-[#a49d9a] font-inter mb-4">
                        <Icon id="LocationOn" size={20} class="mr-2 text-[#d0ec19]" />
                        {builder.location}
                      </div>
                    )}

                    {/* Social Links */}
                    {builder.socialLinks && (
                      <div class="flex gap-3">
                        {builder.socialLinks.linkedin && (
                          <a
                            href={builder.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 bg-[#1d1917] text-[#fafaf9] rounded-xl hover:bg-[#292524] transition-colors"
                            title="LinkedIn"
                          >
                            <Icon id="Linkedin" size={20} />
                          </a>
                        )}
                        {builder.socialLinks.github && (
                          <a
                            href={builder.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 bg-[#1d1917] text-[#fafaf9] rounded-xl hover:bg-[#292524] transition-colors"
                            title="GitHub"
                          >
                            <Icon id="GitHub" size={20} />
                          </a>
                        )}
                        {builder.socialLinks.website && (
                          <a
                            href={builder.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 bg-[#1d1917] text-[#fafaf9] rounded-xl hover:bg-[#292524] transition-colors"
                            title="Website"
                          >
                            <Icon id="Language" size={20} />
                          </a>
                        )}
                        {builder.socialLinks.twitter && (
                          <a
                            href={builder.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 bg-[#1d1917] text-[#fafaf9] rounded-xl hover:bg-[#292524] transition-colors"
                            title="Twitter"
                          >
                            <Icon id="Twitter" size={20} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div class="bg-[#292524] rounded-2xl p-8 mb-8">
                <h3 class="text-2xl font-bold text-[#fafaf9] mb-4 font-inter">About</h3>
                <p class="text-[#a49d9a] font-inter leading-relaxed">
                  {builder.fullBio}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div class="lg:col-span-1">
              {/* Skills */}
              <div class="bg-[#292524] rounded-2xl p-6 mb-6">
                <h3 class="text-xl font-bold text-[#fafaf9] mb-4 font-inter">Skills</h3>
                <div class="flex flex-wrap gap-2">
                  {builder.skills.map((skill) => (
                    <span class="px-3 py-1 bg-[#1d1917] text-[#fafaf9] rounded-full text-sm font-inter">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div class="bg-[#292524] rounded-2xl p-6">
                <h3 class="text-xl font-bold text-[#fafaf9] mb-4 font-inter">Certifications</h3>
                <div class="flex flex-wrap gap-2">
                  {builder.certifications.map((cert) => (
                    <span class="px-3 py-1 bg-[#1d1917] text-[#fafaf9] rounded-full text-sm font-inter">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 