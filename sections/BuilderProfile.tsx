import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import BuilderDetail, { type DetailedBuilder } from "./BuilderDetail.tsx";

export interface Props {
  /**
   * @title Builder Data
   * @description Complete builder information
   */
  builder?: DetailedBuilder;
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
}

// Default builder data
const DEFAULT_BUILDER: DetailedBuilder = {
  id: "sarah-chen",
  name: "Sarah Chen",
  title: "Machine Learning Engineer",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  bio: "Specialized in computer vision and deep learning with 5+ years of experience building production ML systems.",
  fullBio: "Sarah is a senior machine learning engineer with over 5 years of experience in computer vision and deep learning. She has worked on production ML systems at scale, including autonomous vehicles, medical imaging, and recommendation systems. Sarah is passionate about making AI more accessible and ethical.",
  experienceLevel: "Senior",
  isL1Certified: true,
  specialties: ["Computer Vision", "Deep Learning", "PyTorch", "TensorFlow"],
  location: "San Francisco, CA",
  availability: "Available",
  rating: 4.9,
  responseTime: "Usually responds in 2 hours",
  profileUrl: "/builder/sarah-chen",
  skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Docker", "AWS", "Git", "Linux"],
  projectsCount: 24,
  price: { currency: "$", amount: 120, period: "hour" },
  experience: [
    {
      id: "1",
      position: "Senior ML Engineer",
      company: "TechCorp",
      duration: "2021 - Present",
      description: "Leading computer vision projects for autonomous systems.",
      technologies: ["PyTorch", "OpenCV", "Docker", "AWS"]
    },
    {
      id: "2",
      position: "ML Engineer",
      company: "AI Startup",
      duration: "2019 - 2021",
      description: "Built recommendation systems and NLP models.",
      technologies: ["TensorFlow", "Scikit-learn", "Python", "PostgreSQL"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Autonomous Vehicle Perception",
      description: "Developed computer vision system for autonomous vehicle navigation.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=200&fit=crop",
      url: "https://github.com/sarah-chen/autonomous-vision",
      githubUrl: "https://github.com/sarah-chen/autonomous-vision",
      technologies: ["PyTorch", "OpenCV", "ROS", "C++"],
      featured: true
    },
    {
      id: "2",
      title: "Medical Image Analysis",
      description: "AI system for detecting anomalies in medical imaging.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      url: "https://github.com/sarah-chen/medical-ai",
      githubUrl: "https://github.com/sarah-chen/medical-ai",
      technologies: ["TensorFlow", "DICOM", "Python", "Docker"],
      featured: true
    }
  ],
  skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Docker", "AWS", "Git", "Linux"],
  certifications: ["Agentic Engineer L1", "AWS Machine Learning Specialty", "Google Cloud ML Engineer"],
  education: [
    {
      id: "1",
      degree: "Master of Science",
      field: "Computer Science",
      institution: "Stanford University",
      year: "2019"
    },
    {
      id: "2",
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "UC Berkeley",
      year: "2017"
    }
  ],
  socialLinks: {
    linkedin: "https://linkedin.com/in/sarah-chen",
    github: "https://github.com/sarah-chen",
    website: "https://sarah-chen.dev",
    twitter: "https://twitter.com/sarah_chen_ai"
  }
};

export default function BuilderProfile({
  builder = DEFAULT_BUILDER,
  showBackButton = true,
  backButtonUrl = "/builders"
}: Props) {
  
  return (
    <div class="w-full bg-[#1d1917]">
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

      {/* Builder Detail */}
      <BuilderDetail builder={builder} />
    </div>
  );
} 