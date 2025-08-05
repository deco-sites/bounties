import BuilderCard, { type Builder } from "site/components/ui/BuilderCard.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface FilterOptions {
  specialties: string[];
  certifications: string[];
  experienceLevels: ("Junior" | "Mid" | "Senior" | "Expert")[];
  locations: string[];
  priceRanges: { label: string; min: number; max: number }[];
}

export interface Props {
  /**
   * @default Our AI Builders
   */
  title?: string;
  /**
   * @default Discover talented AI professionals ready to bring your projects to life
   */
  subtitle?: string;
  builders?: Builder[];
  /**
   * @default card
   */
  layout?: "card" | "list";
  showFilters?: boolean;
  showPagination?: boolean;
  itemsPerPage?: number;
  filterOptions?: FilterOptions;
}

// Mock data for demonstration
const MOCK_BUILDERS: Builder[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Machine Learning Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2a2?w=150&h=150&fit=crop&crop=face",
    bio: "Specialized in computer vision and deep learning with 5+ years of experience building production ML systems.",
    specialties: ["Computer Vision", "Deep Learning", "PyTorch"],
    isL1Certified: true,
    experienceLevel: "Senior",
    location: "San Francisco, CA",
    rating: 4.9,
    projectsCount: 24,
    profileUrl: "/builder/sarah-chen",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Docker", "AWS"],
    price: { currency: "$", amount: 120, period: "hour" }
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "NLP Specialist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Expert in natural language processing and large language models. Built chatbots and text analysis systems.",
    specialties: ["NLP", "Large Language Models", "Transformers"],
    isL1Certified: true,
    experienceLevel: "Expert",
    location: "New York, NY",
    rating: 4.8,
    projectsCount: 31,
    profileUrl: "/builder/marcus-johnson",
    skills: ["Python", "Hugging Face", "BERT", "GPT", "spaCy", "LangChain"],
    price: { currency: "$", amount: 150, period: "hour" }
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    title: "AI Product Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Product leader with expertise in AI strategy and implementation. Helped scale AI products at Fortune 500 companies.",
    specialties: ["AI Strategy", "Product Management", "MLOps"],
    isL1Certified: false,
    experienceLevel: "Senior",
    location: "Austin, TX",
    rating: 4.7,
    projectsCount: 18,
    profileUrl: "/builder/elena-rodriguez",
    skills: ["Strategy", "MLOps", "Kubernetes", "DataDog", "Jira", "Figma"],
    price: { currency: "$", amount: 100, period: "hour" }
  },
  {
    id: "4",
    name: "David Kim",
    title: "Robotics Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Robotics and AI engineer focusing on autonomous systems and computer vision for robotic applications.",
    specialties: ["Robotics", "Autonomous Systems", "Computer Vision"],
    isL1Certified: true,
    experienceLevel: "Expert",
    location: "Seattle, WA",
    rating: 4.9,
    projectsCount: 27,
    profileUrl: "/builder/david-kim",
    skills: ["ROS", "C++", "Python", "OpenCV", "LIDAR", "SLAM"],
    price: { currency: "$", amount: 140, period: "hour" }
  }
];

const DEFAULT_FILTER_OPTIONS: FilterOptions = {
  specialties: [
    "Machine Learning",
    "Deep Learning", 
    "Computer Vision",
    "NLP",
    "Robotics",
    "AI Strategy",
    "MLOps",
    "Data Science"
  ],
  certifications: [
    "Agentic Engineer L1",
    "Google Cloud ML",
    "AWS ML",
    "Azure AI"
  ],
  experienceLevels: ["Junior", "Mid", "Senior", "Expert"],
  locations: [
    "San Francisco, CA",
    "New York, NY", 
    "Austin, TX",
    "Seattle, WA",
    "Remote"
  ],
  priceRanges: [
    { label: "$0 - $50/hr", min: 0, max: 50 },
    { label: "$50 - $100/hr", min: 50, max: 100 },
    { label: "$100 - $150/hr", min: 100, max: 150 },
    { label: "$150+/hr", min: 150, max: 999 }
  ]
};

export default function BuildersGrid({
  title = "Our AI Builders",
  subtitle = "Discover talented AI professionals ready to bring your projects to life",
  builders = MOCK_BUILDERS,
  layout = "card",
  showFilters = true,
  showPagination = true,
  itemsPerPage: _itemsPerPage = 12,
  filterOptions = DEFAULT_FILTER_OPTIONS
}: Props) {
  
  return (
    <div class="w-full bg-[#1d1917] py-16 lg:py-24">
      <div class="container mx-auto px-4">
        {/* Header */}
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#fafaf9] font-inter">{title}</h2>
          <p class="text-lg text-[#a49d9a] max-w-2xl mx-auto font-inter">{subtitle}</p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div class="lg:w-80 flex-shrink-0">
              <div class="bg-[#292524] rounded-2xl p-6 border border-[#292524] sticky top-6">
                <div class="flex items-center justify-between mb-6">
                  <h3 class="text-lg font-semibold text-[#fafaf9] font-inter">Filters</h3>
                  <button class="text-[#d0ec19] text-sm hover:text-[#d0ec19]/80 font-inter">
                    Clear all
                  </button>
                </div>

                {/* Search */}
                <div class="mb-6">
                  <label class="block text-sm font-medium text-[#fafaf9] mb-2 font-inter">
                    Search
                  </label>
                  <div class="relative">
                    <Icon id="MagnifyingGlass" size={16} class="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a49d9a]" />
                    <input
                      type="text"
                      placeholder="Search builders..."
                      class="w-full pl-10 pr-4 py-2 border border-[#1d1917] bg-[#1d1917] text-[#fafaf9] placeholder-[#a49d9a] rounded-lg focus:ring-2 focus:ring-[#d0ec19] focus:border-[#d0ec19] outline-none font-inter"
                    />
                  </div>
                </div>

                {/* Certification Filter */}
                <div class="mb-6">
                  <label class="block text-sm font-medium text-[#fafaf9] mb-3 font-inter">
                    Certification
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="checkbox" class="rounded border-[#a49d9a] text-[#d0ec19] focus:ring-[#d0ec19] bg-[#1d1917]" />
                    <span class="text-sm text-[#a49d9a] font-inter">Agentic Engineer L1 Only</span>
                  </label>
                </div>

                {/* Specialties Filter */}
                <div class="mb-6">
                  <label class="block text-sm font-medium text-[#fafaf9] mb-3 font-inter">
                    Specialties
                  </label>
                  <div class="space-y-2 max-h-40 overflow-y-auto">
                    {filterOptions.specialties.map((specialty) => (
                      <label key={specialty} class="flex items-center space-x-2">
                        <input type="checkbox" class="rounded border-[#a49d9a] text-[#d0ec19] focus:ring-[#d0ec19] bg-[#1d1917]" />
                        <span class="text-sm text-[#a49d9a] font-inter">{specialty}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience Level */}
                <div class="mb-6">
                  <label class="block text-sm font-medium text-[#fafaf9] mb-3 font-inter">
                    Experience Level
                  </label>
                  <div class="space-y-2">
                    {filterOptions.experienceLevels.map((level) => (
                      <label key={level} class="flex items-center space-x-2">
                        <input type="checkbox" class="rounded border-[#a49d9a] text-[#d0ec19] focus:ring-[#d0ec19] bg-[#1d1917]" />
                        <span class="text-sm text-[#a49d9a] font-inter">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div class="mb-6">
                  <label class="block text-sm font-medium text-[#fafaf9] mb-3 font-inter">
                    Hourly Rate
                  </label>
                  <div class="space-y-2">
                    {filterOptions.priceRanges.map((range) => (
                      <label key={range.label} class="flex items-center space-x-2">
                        <input type="checkbox" class="rounded border-[#a49d9a] text-[#d0ec19] focus:ring-[#d0ec19] bg-[#1d1917]" />
                        <span class="text-sm text-[#a49d9a] font-inter">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div class="mb-6">
                  <label class="block text-sm font-medium text-[#fafaf9] mb-3 font-inter">
                    Location
                  </label>
                  <div class="space-y-2 max-h-32 overflow-y-auto">
                    {filterOptions.locations.map((location) => (
                      <label key={location} class="flex items-center space-x-2">
                        <input type="checkbox" class="rounded border-[#a49d9a] text-[#d0ec19] focus:ring-[#d0ec19] bg-[#1d1917]" />
                        <span class="text-sm text-[#a49d9a] font-inter">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div class="flex-1">
            {/* Results Header */}
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <p class="text-[#a49d9a] font-inter">
                  Showing <span class="font-medium text-[#fafaf9]">{builders.length}</span> builders
                </p>
              </div>
              
              <div class="flex items-center space-x-4">
                {/* Layout Toggle */}
                <div class="flex items-center space-x-2 bg-[#292524] rounded-lg p-1">
                  <button class={`p-2 rounded-lg transition-colors ${layout === "card" ? "bg-[#d0ec19] text-[#1d1917]" : "text-[#a49d9a] hover:text-[#fafaf9]"}`}>
                    <Icon id="FilterList" size={16} />
                  </button>
                  <button class={`p-2 rounded-lg transition-colors ${layout === "list" ? "bg-[#d0ec19] text-[#1d1917]" : "text-[#a49d9a] hover:text-[#fafaf9]"}`}>
                    <Icon id="Bars3" size={16} />
                  </button>
                </div>

                {/* Sort */}
                <select class="border border-[#292524] bg-[#292524] text-[#fafaf9] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#d0ec19] focus:border-[#d0ec19] outline-none font-inter">
                  <option>Sort by: Relevance</option>
                  <option>Sort by: Rating</option>
                  <option>Sort by: Price (Low to High)</option>
                  <option>Sort by: Price (High to Low)</option>
                  <option>Sort by: Projects</option>
                </select>
              </div>
            </div>

            {/* Builders Grid/List */}
            <div class={`${
              layout === "card" 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
                : "space-y-4"
            }`}>
              {builders.map((builder) => (
                <BuilderCard 
                  key={builder.id} 
                  builder={builder} 
                  layout={layout}
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
      </div>
    </div>
  );
}