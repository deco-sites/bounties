import BuildersGrid from "./BuildersGrid.tsx";

/**
 * @title Builders Directory Page
 * @description Complete builders listing page with filters and search
 */
export interface Props {
  /**
   * @title Page Title
   * @default Browse AI Builders
   */
  title?: string;
  
  /**
   * @title Page Description
   * @default Find the perfect AI professional for your project
   */
  description?: string;
  
  /**
   * @title Default Layout
   * @default card
   */
  layout?: "card" | "list";
  
  /**
   * @title Items per Page
   * @default 12
   */
  itemsPerPage?: number;
}

export default function BuildersPage({
  title = "Browse AI Builders",
  description = "Find the perfect AI professional for your project",
  layout = "card",
  itemsPerPage = 12
}: Props) {
  return (
    <div class="w-full">
      {/* Page Header */}
      <section class="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              {description}
            </p>
            
            {/* Breadcrumb */}
            <nav class="flex justify-center">
              <ol class="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <a href="/" class="hover:text-gray-700">Home</a>
                </li>
                <li>/</li>
                <li class="text-gray-900 font-medium">Builders</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Builders Grid */}
      <section class="bg-white">
        <BuildersGrid
          title=""
          subtitle=""
          showFilters={true}
          layout={layout}
          showPagination={true}
          itemsPerPage={itemsPerPage}
        />
      </section>
    </div>
  );
}