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

export interface BuilderPage {
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
   * @title Page URL
   * @description URL to the builder's detailed page
   */
  pageUrl?: string;
}

export interface Props {
  /**
   * @title Connected Builder Pages
   * @description List of builder pages to display
   */
  builderPages?: BuilderPage[];
  /**
   * @title Show Filters Button
   * @default true
   */
  showFilters?: boolean;
  /**
   * @title Show Pagination
   * @default true
   */
  showPagination?: boolean;
  /**
   * @title Items Per Page
   * @default 12
   */
  itemsPerPage?: number;
  /**
   * @title Grid Title
   * @description Optional title for the builders grid
   */
  title?: string;
  /**
   * @title Grid Subtitle
   * @description Optional subtitle for the builders grid
   */
  subtitle?: string;
}

// Default builders for when no pages are connected
const DEFAULT_BUILDERS: Builder[] = [
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
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    title: "AI Product Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Product leader with 8+ years experience bringing AI products to market. Expert in user research and go-to-market strategy.",
    experienceLevel: "Senior",
    isL1Certified: false,
    specialties: ["Product Strategy", "User Research", "Go-to-Market"],
    location: "Austin, TX"
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

export default function ConnectedBuildersGrid({
  builderPages = [],
  showFilters = true,
  showPagination = true,
  itemsPerPage = 12,
  title,
  subtitle
}: Props) {
  
  // Convert BuilderPage to Builder format
  const builders: Builder[] = builderPages.length > 0 
    ? builderPages.map(page => ({
        id: page.id,
        name: page.name,
        title: page.title,
        avatar: typeof page.avatar === 'string' ? page.avatar : page.avatar.src || "",
        bio: page.bio,
        experienceLevel: page.experienceLevel,
        isL1Certified: page.isL1Certified,
        specialties: page.specialties,
        location: page.location
      }))
    : DEFAULT_BUILDERS;
  
  return (
    <div class="w-full bg-[#1d1917] py-16 lg:py-24">
      <div class="container mx-auto px-4">
        {/* Header */}
        {(title || subtitle) && (
          <div class="text-center mb-12">
            {title && (
              <h2 class="text-3xl md:text-4xl font-bold text-[#fafaf9] mb-4 font-inter">
                {title}
              </h2>
            )}
            {subtitle && (
              <p class="text-xl text-[#a49d9a] font-inter">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Results Header */}
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <p class="text-[#a49d9a] font-inter">
              Showing <span class="font-medium text-[#fafaf9]">{builders.length}</span> builders
              {builderPages.length > 0 && (
                <span class="text-[#d0ec19] ml-2">(Connected to pages)</span>
              )}
            </p>
          </div>
          
          <div class="flex items-center space-x-4">
            {/* Filters Button */}
            {showFilters && (
              <button class="px-4 py-2 border border-[#292524] bg-[#292524] text-[#fafaf9] rounded-lg hover:bg-[#292524]/80 transition-colors font-inter flex items-center">
                <Icon id="FilterList" size={16} class="mr-2" />
                Filters
              </button>
            )}

            {/* Sort */}
            <select class="border border-[#292524] bg-[#292524] text-[#fafaf9] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#d0ec19] focus:border-[#d0ec19] outline-none font-inter">
              <option>Sort by: Relevance</option>
              <option>Sort by: Experience</option>
              <option>Sort by: Certification</option>
              <option>Sort by: Name</option>
            </select>
          </div>
        </div>

        {/* Builders Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {builders.map((builder) => (
            <BuilderCard 
              key={builder.id} 
              builder={builder} 
            />
          ))}
        </div>

        {/* Pagination */}
        {showPagination && (
          <div class="mt-12 flex justify-center">
            <div class="flex items-center space-x-2">
              <button class="p-2 rounded-lg border border-[#292524] bg-[#292524] text-[#a49d9a] hover:text-[#fafaf9] transition-colors">
                <Icon id="ChevronLeft" size={16} />
              </button>
              <button class="px-4 py-2 rounded-lg bg-[#d0ec19] text-[#1d1917] font-semibold font-inter">1</button>
              <button class="px-4 py-2 rounded-lg border border-[#292524] bg-[#292524] text-[#a49d9a] hover:bg-[#1d1917] hover:text-[#fafaf9] transition-colors font-inter">2</button>
              <button class="px-4 py-2 rounded-lg border border-[#292524] bg-[#292524] text-[#a49d9a] hover:bg-[#1d1917] hover:text-[#fafaf9] transition-colors font-inter">3</button>
              <span class="px-2 text-[#a49d9a] font-inter">...</span>
              <button class="px-4 py-2 rounded-lg border border-[#292524] bg-[#292524] text-[#a49d9a] hover:bg-[#1d1917] hover:text-[#fafaf9] transition-colors font-inter">10</button>
              <button class="p-2 rounded-lg border border-[#292524] bg-[#292524] text-[#a49d9a] hover:text-[#fafaf9] transition-colors">
                <Icon id="ChevronRight" size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 