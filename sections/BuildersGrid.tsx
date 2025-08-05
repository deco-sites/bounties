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
  builders?: Builder[];
  showFilters?: boolean;
  showPagination?: boolean;
  itemsPerPage?: number;
  filterOptions?: FilterOptions;
}

// Mock data for demonstration
const MOCK_BUILDERS: Builder[] = [
  {
    id: "sarah-chen",
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
    id: "marcus-johnson",
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
    id: "elena-rodriguez",
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
    id: "david-kim",
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
  },
  {
    id: "alexandra-wang",
    name: "Alexandra Wang",
    title: "Data Scientist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    bio: "Data scientist specializing in predictive analytics and machine learning for healthcare applications.",
    specialties: ["Predictive Analytics", "Healthcare AI", "Machine Learning"],
    isL1Certified: true,
    experienceLevel: "Mid",
    location: "Boston, MA",
    rating: 4.6,
    projectsCount: 15,
    profileUrl: "/builder/alexandra-wang",
    skills: ["Python", "R", "SQL", "Scikit-learn", "Pandas", "Tableau"],
    price: { currency: "$", amount: 90, period: "hour" }
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "AI Research Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    bio: "Research engineer focused on cutting-edge AI algorithms and neural network architectures.",
    specialties: ["AI Research", "Neural Networks", "Deep Learning"],
    isL1Certified: true,
    experienceLevel: "Expert",
    location: "Palo Alto, CA",
    rating: 4.9,
    projectsCount: 22,
    profileUrl: "/builder/michael-chen",
    skills: ["PyTorch", "TensorFlow", "CUDA", "JAX", "Research", "Papers"],
    price: { currency: "$", amount: 180, period: "hour" }
  },
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    title: "MLOps Engineer",
    avatar: "https://images.unsplash.com/photo-1487412720507-7e378adf7ca3?w=150&h=150&fit=crop&crop=face",
    bio: "MLOps specialist building scalable machine learning infrastructure and deployment pipelines.",
    specialties: ["MLOps", "DevOps", "Cloud Infrastructure"],
    isL1Certified: false,
    experienceLevel: "Senior",
    location: "Denver, CO",
    rating: 4.5,
    projectsCount: 19,
    profileUrl: "/builder/sophia-martinez",
    skills: ["Kubernetes", "Docker", "AWS", "Azure", "CI/CD", "Monitoring"],
    price: { currency: "$", amount: 110, period: "hour" }
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Computer Vision Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Computer vision engineer developing advanced image processing and object detection systems.",
    specialties: ["Computer Vision", "Image Processing", "Object Detection"],
    isL1Certified: true,
    experienceLevel: "Senior",
    location: "Los Angeles, CA",
    rating: 4.7,
    projectsCount: 28,
    profileUrl: "/builder/james-wilson",
    skills: ["OpenCV", "PyTorch", "TensorFlow", "C++", "CUDA", "Computer Vision"],
    price: { currency: "$", amount: 130, period: "hour" }
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
  builders = MOCK_BUILDERS,
  showFilters = true,
  showPagination = true,
  itemsPerPage: _itemsPerPage = 12,
  filterOptions = DEFAULT_FILTER_OPTIONS
}: Props) {
  
  return (
    <div class="w-full bg-[#1d1917] py-4 lg:py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col gap-4">
          {/* Main Content */}
          <div class="flex-1">
            {/* Results Header */}
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <div>
                <p class="text-[#a49d9a] font-inter">
                  Showing <span class="font-medium text-[#fafaf9]">{builders.length}</span> builders
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
                  <option>Sort by: Rating</option>
                  <option>Sort by: Price (Low to High)</option>
                  <option>Sort by: Price (High to Low)</option>
                  <option>Sort by: Projects</option>
                </select>
              </div>
            </div>

            {/* Builders Grid */}
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {builders.map((builder) => (
                <BuilderCard 
                  key={builder.id} 
                  builder={builder} 
                />
              ))}
            </div>

            {/* Pagination */}
            {showPagination && (
              <div class="mt-8 flex justify-center">
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