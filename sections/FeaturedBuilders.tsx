import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import BuilderCard from "site/components/ui/BuilderCard.tsx";

export interface Builder {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  experienceLevel: "Junior" | "Mid" | "Senior" | "Expert";
  isL1Certified: boolean;
  specialties: string[];
  location?: string;
}

export interface FeaturedBuilder {
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
   * @title Specialties
   * @description Areas of expertise
   */
  specialties: string[];
  /**
   * @title Location
   * @description Builder's location (optional)
   */
  location?: string;
  /**
   * @title Featured Reason
   * @description Why this builder is featured
   */
  featuredReason?: string;
}

export interface Props {
  /**
   * @title Section Title
   * @default "Featured AI Builders"
   */
  title?: string;
  /**
   * @title Section Subtitle
   * @default "Meet our top certified AI professionals"
   */
  subtitle?: string;
  /**
   * @title Featured Builders
   * @description List of builders to feature
   */
  featuredBuilders?: FeaturedBuilder[];
  /**
   * @title Show View All Button
   * @default true
   */
  showViewAll?: boolean;
  /**
   * @title View All Button Text
   * @default "View All Builders"
   */
  viewAllText?: string;
  /**
   * @title View All Button URL
   * @default "/builders"
   */
  viewAllUrl?: string;
}

// Default featured builders
const DEFAULT_FEATURED_BUILDERS: Builder[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Machine Learning Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "Specialized in computer vision and deep learning with 5+ years of experience building production ML systems.",
    experienceLevel: "Senior",
    isL1Certified: true,
    specialties: ["Computer Vision", "Deep Learning", "PyTorch"],
    location: "San Francisco, CA"
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    title: "NLP Specialist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Expert in natural language processing and large language models. Built chatbots and text analysis systems.",
    experienceLevel: "Expert",
    isL1Certified: true,
    specialties: ["NLP", "Large Language Models", "Transformers"],
    location: "New York, NY"
  },
  {
    id: "david-kim",
    name: "David Kim",
    title: "MLOps Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Specialized in ML infrastructure and deployment. Built scalable ML pipelines and monitoring systems.",
    experienceLevel: "Expert",
    isL1Certified: true,
    specialties: ["MLOps", "Kubernetes", "AWS"],
    location: "Seattle, WA"
  }
];

export default function FeaturedBuilders({
  title = "Featured AI Builders",
  subtitle = "Meet our top certified AI professionals",
  featuredBuilders = [],
  showViewAll = true,
  viewAllText = "View All Builders",
  viewAllUrl = "/builders"
}: Props) {
  
  // Convert FeaturedBuilder to Builder format
  const builders: Builder[] = featuredBuilders.length > 0 
    ? featuredBuilders.map(builder => ({
        id: builder.id,
        name: builder.name,
        title: builder.title,
        avatar: typeof builder.avatar === 'string' ? builder.avatar : builder.avatar.src || "",
        bio: builder.bio,
        experienceLevel: builder.experienceLevel,
        isL1Certified: builder.isL1Certified,
        specialties: builder.specialties,
        location: builder.location
      }))
    : DEFAULT_FEATURED_BUILDERS;
  
  return (
    <section class="w-full bg-[#1d1917] py-16 lg:py-24">
      <div class="container mx-auto px-4">
        {/* Header */}
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#fafaf9] mb-4 font-inter">
            {title}
          </h2>
          <p class="text-xl text-[#a49d9a] font-inter max-w-2xl mx-auto">
            {subtitle}
            {featuredBuilders.length > 0 && (
              <span class="text-[#d0ec19] ml-2">(Connected to pages)</span>
            )}
          </p>
        </div>

        {/* Featured Builders Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {builders.map((builder) => (
            <BuilderCard 
              key={builder.id} 
              builder={builder} 
            />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div class="text-center">
            <a
              href={viewAllUrl}
              class="inline-flex items-center px-8 py-4 bg-[#d0ec19] text-[#1d1917] rounded-xl font-semibold hover:bg-[#d0ec19]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#d0ec19]/25 font-inter"
            >
              {viewAllText}
              <Icon id="ChevronRight" size={20} class="ml-2" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
} 