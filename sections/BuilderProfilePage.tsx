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
        <section class="bg-gray-50 py-16">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                {relatedBuildersTitle}
              </h2>
              <p class="text-gray-600">
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
                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
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