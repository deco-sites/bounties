import BuilderDetail from "./BuilderDetail.tsx";
import BuildersGrid from "./BuildersGrid.tsx";

/**
 * @title Builder Profile Page
 * @description Individual builder profile with related builders
 */
export interface Props {
  /**
   * @title Show Related Builders
   * @default true
   */
  showRelatedBuilders?: boolean;
  
  /**
   * @title Related Builders Title
   * @default Other Recommended Builders
   */
  relatedBuildersTitle?: string;
}

export default function BuilderProfilePage({
  showRelatedBuilders = true,
  relatedBuildersTitle = "Other Recommended Builders"
}: Props) {
  return (
    <div class="w-full">
      {/* Builder Detail */}
      <BuilderDetail />
      
      {/* Related Builders */}
      {showRelatedBuilders && (
        <section class="bg-[#1d1917] py-16">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-[#fafaf9] mb-4 font-inter">
                {relatedBuildersTitle}
              </h2>
              <p class="text-[#a49d9a] font-inter">
                Discover other talented AI professionals you might be interested in
              </p>
            </div>
            
            <BuildersGrid
              title=""
              subtitle=""
              showFilters={false}
              layout="card"
              showPagination={false}
              itemsPerPage={3}
            />
            
            <div class="text-center mt-12">
              <a
                href="/builders"
                class="inline-flex items-center px-6 py-3 bg-[#d0ec19] text-[#1d1917] rounded-xl font-semibold hover:bg-[#d0ec19]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#d0ec19]/25 font-inter"
              >
                View All Builders
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}