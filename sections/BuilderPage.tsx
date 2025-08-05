import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Builder {
  /**
   * @title Builder ID
   * @description Unique identifier for this builder
   */
  id: string;
  /**
   * @title Builder Name
   * @description Full name of the builder
   */
  name: string;
  /**
   * @title Builder Title
   * @description Professional title or role
   */
  title: string;
  /**
   * @title Builder Avatar
   * @description Profile photo of the builder
   */
  avatar: ImageWidget;
  /**
   * @title Builder Bio
   * @description Short description of the builder
   */
  bio: string;
  /**
   * @title Full Bio
   * @description Complete biography of the builder
   */
  fullBio: string;
  /**
   * @title Experience Level
   * @description Professional experience level
   */
  experienceLevel: "Junior" | "Mid" | "Senior" | "Expert";
  /**
   * @title L1 Certified
   * @description Whether the builder has L1 certification
   */
  isL1Certified: boolean;
  /**
   * @title Location
   * @description Builder's location (optional)
   */
  location?: string;
  /**
   * @title Skills
   * @description Technical skills
   */
  skills: string[];
  /**
   * @title Certifications
   * @description Professional certifications
   */
  certifications: string[];
  /**
   * @title Social Links
   * @description Social media and professional links
   */
  socialLinks?: {
    linkedin?: string;
    github?: string;
    website?: string;
    twitter?: string;
  };
}

export interface Props {
  /**
   * @title Builder Data
   * @description Complete builder information
   */
  builder?: Builder;
  /**
   * @title Show Back Button
   * @default true
   */
  showBackButton?: boolean;
  /**
   * @title Back Button URL
   * @default "/builders"
   */
  backButtonUrl?: string;
  /**
   * @title Test Prop
   * @description Test prop to verify changes
   */
  testProp?: string;
}

// Default builder data
const DEFAULT_BUILDER: Builder = {
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

export default function BuilderPage({
  builder = DEFAULT_BUILDER,
  showBackButton = true,
  backButtonUrl = "/builders",
  testProp = "Default Test Value"
}: Props) {
  
  return (
    <div class="w-full bg-[#1d1917] min-h-screen">
      {/* Test Banner - This should change when you modify testProp */}
      <div class="bg-[#d0ec19] text-[#1d1917] p-4 text-center font-bold">
        Test Prop Value: {testProp}
      </div>

      {/* Navbar */}
      {showBackButton && (
        <nav class="relative z-20 flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <Image
                src="/deco-logo-outline.png"
                alt="deco.cx"
                width={120}
                height={40}
                class="h-8 w-auto"
              />
            </a>
          </div>
          
          {/* Back Button */}
          <a
            href={backButtonUrl}
            class="px-4 py-2 border border-[#292524] bg-[#292524] text-[#fafaf9] rounded-lg hover:bg-[#292524]/80 transition-colors font-inter flex items-center"
          >
            <Icon id="ChevronLeft" size={16} class="mr-2" />
            Back to Builders
          </a>
        </nav>
      )}

      {/* Builder Profile */}
      <div class="container mx-auto px-4 py-8">
        {/* Header */}
        <div class="max-w-4xl mx-auto">
          <div class="bg-[#292524] rounded-2xl p-8 mb-8">
            <div class="flex flex-col lg:flex-row gap-8">
              {/* Avatar */}
              <div class="flex-shrink-0">
                <Image
                  src={builder.avatar}
                  alt={builder.name}
                  width={200}
                  height={200}
                  class="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                />
              </div>
              
              {/* Info */}
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <h1 class="text-3xl lg:text-4xl font-bold text-[#fafaf9] font-inter">
                    {builder.name}
                  </h1>
                  {builder.isL1Certified && (
                    <span class="px-3 py-1 bg-[#d0ec19] text-[#1d1917] rounded-full text-sm font-semibold font-inter">
                      L1 Certified
                    </span>
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

          {/* Full Bio */}
          <div class="bg-[#292524] rounded-2xl p-8 mb-8">
            <h3 class="text-2xl font-bold text-[#fafaf9] mb-4 font-inter">About</h3>
            <p class="text-[#a49d9a] font-inter leading-relaxed">
              {builder.fullBio}
            </p>
          </div>

          {/* Skills */}
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



          {/* Certifications */}
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

          {/* Social Links */}
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