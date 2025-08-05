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
    { id: "signup", href: "/signup", text: "Join as Builder", style: "primary" },
    { id: "browse", href: "/builders", text: "Browse Builders", style: "outline" }
  ],
}: Props) {
  return (
    <div class="relative w-full bg-[#1d1917] min-h-screen flex items-center">
      {/* Background Image */}
      {backgroundImage && (
        <div class="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            width={1920}
            height={1080}
            class="w-full h-full object-cover opacity-5"
          />
        </div>
      )}
      
      {/* Content */}
      <div class="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div class="max-w-5xl mx-auto text-center space-y-12">
          {/* Title & Description */}
          <div class="space-y-8">
            <h1 
              class="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-[#fafaf9] font-inter"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p class="text-xl md:text-2xl text-[#a49d9a] max-w-3xl mx-auto leading-relaxed font-inter">
              {description}
            </p>
          </div>

          {/* Search Bar */}
          <div class="max-w-3xl mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Icon id="MagnifyingGlass" size={24} class="text-[#a49d9a]" />
              </div>
              <input
                type="text"
                placeholder={searchPlaceholder}
                class="w-full pl-16 pr-6 py-6 text-lg bg-[#292524] border border-[#292524] rounded-2xl focus:ring-2 focus:ring-[#d0ec19] focus:border-[#d0ec19] outline-none transition-all duration-300 text-[#fafaf9] placeholder-[#a49d9a] font-inter"
              />
              <button class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span class="bg-[#d0ec19] text-[#1d1917] px-8 py-3 rounded-xl hover:bg-[#d0ec19]/90 transition-all duration-200 font-semibold font-inter hover:shadow-lg hover:shadow-[#d0ec19]/25">
                  Search
                </span>
              </button>
            </div>
          </div>

          {/* CTAs */}
          {ctas && ctas.length > 0 && (
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              {ctas.map((cta) => (
                <a
                  key={cta.id}
                  href={cta.href}
                  class={`px-10 py-4 rounded-2xl font-semibold font-inter transition-all duration-300 text-lg ${
                    cta.style === "primary" 
                      ? "bg-[#d0ec19] text-[#1d1917] hover:bg-[#d0ec19]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#d0ec19]/25"
                      : cta.style === "outline"
                      ? "border-2 border-[#292524] text-[#fafaf9] hover:border-[#d0ec19] hover:text-[#d0ec19] bg-[#292524] hover:bg-[#292524]/80"
                      : "bg-[#292524] text-[#fafaf9] hover:bg-[#292524]/80"
                  }`}
                >
                  {cta.text}
                </a>
              ))}
            </div>
          )}

          {/* Featured Builders Count */}
          <div class="pt-16">
            <p class="text-[#a49d9a] mb-6 font-inter">
              Join {featuredBuilders}00+ certified AI builders
            </p>
            <div class="flex justify-center items-center space-x-2">
              {Array.from({ length: Math.min(featuredBuilders, 5) }).map((_, i) => (
                <div
                  key={i}
                  class="w-12 h-12 bg-gradient-to-br from-[#d0ec19] to-[#d0ec19]/70 rounded-full border-2 border-[#292524] shadow-sm"
                  style={{ marginLeft: i > 0 ? '-12px' : '0' }}
                />
              ))}
              {featuredBuilders > 5 && (
                <div class="w-12 h-12 bg-[#292524] rounded-full border-2 border-[#292524] shadow-sm flex items-center justify-center text-sm font-medium text-[#a49d9a] ml-3 font-inter">
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