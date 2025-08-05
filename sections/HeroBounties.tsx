import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "primary" | "secondary" | "outline";
}

export interface Props {
  /**
   * @format rich-text
   * @default Find the Best AI Builders
   */
  title?: string;
  /**
   * @default Discover and connect with certified AI professionals. Explore profiles, credentials, and expertise in our comprehensive builder directory.
   */
  description?: string;
  /**
   * @default Search builders by name, specialty, or certification...
   */
  searchPlaceholder?: string;
  backgroundImage?: ImageWidget;
  /**
   * @default 3
   */
  featuredBuilders?: number;
  ctas?: CTA[];
}

export default function HeroBounties({
  title = "Find the Best AI Builders",
  description = "Discover and connect with certified AI professionals. Explore profiles, credentials, and expertise in our comprehensive builder directory.",
  searchPlaceholder = "Search builders by name, specialty, or certification...",
  backgroundImage,
  featuredBuilders = 3,
  ctas = [
    { id: "signup", href: "/signup", text: "Sign Up", style: "primary" },
    { id: "login", href: "/login", text: "Login", style: "outline" }
  ],
}: Props) {
  return (
    <div class="relative w-full">
      {/* Background Image */}
      {backgroundImage && (
        <div class="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            width={1920}
            height={1080}
            class="w-full h-full object-cover opacity-10"
          />
        </div>
      )}
      
      {/* Content */}
      <div class="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          {/* Title & Description */}
          <div class="space-y-6">
            <h1 
              class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Search Bar */}
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon id="MagnifyingGlass" size={20} class="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={searchPlaceholder}
                class="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
              <button class="absolute inset-y-0 right-0 pr-2 flex items-center">
                <span class="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200">
                  Search
                </span>
              </button>
            </div>
          </div>

          {/* CTAs */}
          {ctas && ctas.length > 0 && (
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              {ctas.map((cta) => (
                <a
                  key={cta.id}
                  href={cta.href}
                  class={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                    cta.style === "primary" 
                      ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                      : cta.style === "outline"
                      ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cta.text}
                </a>
              ))}
            </div>
          )}

          {/* Featured Builders Count */}
          <div class="pt-12">
            <p class="text-sm text-gray-500 mb-4">
              Join {featuredBuilders}00+ certified AI builders
            </p>
            <div class="flex justify-center items-center space-x-2">
              {Array.from({ length: Math.min(featuredBuilders, 5) }).map((_, i) => (
                <div
                  key={i}
                  class="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full border-2 border-white shadow-sm"
                  style={{ marginLeft: i > 0 ? '-8px' : '0' }}
                />
              ))}
              {featuredBuilders > 5 && (
                <div class="w-10 h-10 bg-gray-200 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-xs font-medium text-gray-600 ml-2">
                  +{featuredBuilders - 5}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}