import HeroBounties from "./HeroBounties.tsx";
import BuildersGrid from "./BuildersGrid.tsx";

/**
 * @title AI Builders Home Page
 * @description Complete AI Builders directory homepage with hero banner and builders grid
 */
export interface Props {
  /**
   * @title Hero Section Configuration
   */
  hero?: {
    title?: string;
    description?: string;
    searchPlaceholder?: string;
    featuredBuilders?: number;
  };
  
  /**
   * @title Builders Grid Configuration  
   */
  buildersGrid?: {
    title?: string;
    subtitle?: string;
    showFilters?: boolean;
    layout?: "card" | "list";
  };
}

export default function AIBuildersHome({
  hero = {
    title: "Find the Best AI Builders",
    description: "Discover and connect with certified AI professionals. Explore profiles, credentials, and expertise in our comprehensive builder directory.",
    searchPlaceholder: "Search builders by name, specialty, or certification...",
    featuredBuilders: 3
  },
  buildersGrid = {
    title: "Featured AI Builders",
    subtitle: "Discover talented AI professionals ready to bring your projects to life",
    showFilters: true,
    layout: "card"
  }
}: Props) {
  return (
    <div class="w-full">
      {/* Hero Section */}
      <section class="bg-gradient-to-br from-blue-50 to-indigo-100">
        <HeroBounties
          title={hero.title}
          description={hero.description}
          searchPlaceholder={hero.searchPlaceholder}
          featuredBuilders={hero.featuredBuilders}
          ctas={[
            { id: "signup", href: "/signup", text: "Join as Builder", style: "primary" },
            { id: "browse", href: "/builders", text: "Browse Builders", style: "outline" }
          ]}
        />
      </section>

      {/* Builders Grid Section */}
      <section class="bg-[#1d1917]">
        <BuildersGrid
          title={buildersGrid.title}
          subtitle={buildersGrid.subtitle}
          showFilters={buildersGrid.showFilters}
          layout={buildersGrid.layout}
          showPagination={false}
          itemsPerPage={6}
        />
      </section>

      {/* Call to Action Section */}
      <section class="bg-[#292524] py-20">
        <div class="container mx-auto px-4 text-center">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-[#fafaf9] font-inter">
              Ready to Connect with AI Experts?
            </h2>
            <p class="text-xl mb-8 text-[#a49d9a] font-inter">
              Join our community of certified AI builders and take your projects to the next level.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                class="px-8 py-4 bg-[#d0ec19] text-[#1d1917] rounded-xl font-semibold hover:bg-[#d0ec19]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#d0ec19]/25 font-inter"
              >
                Sign Up as Builder
              </a>
              <a
                href="/builders"
                class="px-8 py-4 border-2 border-[#d0ec19] text-[#d0ec19] rounded-xl font-semibold hover:bg-[#d0ec19] hover:text-[#1d1917] transition-all duration-300 font-inter"
              >
                Browse All Builders
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="bg-[#1d1917] py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div class="space-y-2">
              <div class="text-4xl font-bold text-[#d0ec19] font-inter">300+</div>
              <div class="text-[#a49d9a] font-inter">AI Builders</div>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold text-[#d0ec19] font-inter">150+</div>
              <div class="text-[#a49d9a] font-inter">L1 Certified</div>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold text-[#d0ec19] font-inter">1200+</div>
              <div class="text-[#a49d9a] font-inter">Projects Completed</div>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold text-[#d0ec19] font-inter">98%</div>
              <div class="text-[#a49d9a] font-inter">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}