import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";



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
  /**
   * @default https://assets.decocache.com/bounties/b9179a88-c921-4880-b935-e3fc2e951302/deco-logo-outline.png
   */
  navbarLogo?: string;
  /**
   * @default Join as Builder
   */
  navbarButtonText?: string;
  /**
   * @default /signup
   */
  navbarButtonUrl?: string;
}

export default function HeroBounties({
  title = "Find the Best AI Builders",
  description = "Discover and connect with certified AI professionals. Explore profiles, credentials, and expertise in our comprehensive builder directory.",
  searchPlaceholder = "Search builders by name, specialty, or certification...",
  backgroundImage,
  featuredBuilders = 3,
  navbarLogo = "https://assets.decocache.com/bounties/b9179a88-c921-4880-b935-e3fc2e951302/deco-logo-outline.png",
  navbarButtonText = "Join as Builder",
  navbarButtonUrl = "/signup",
}: Props) {
  return (
    <div class="relative w-full bg-[#1d1917] min-h-screen">
      {/* Navbar */}
      <nav class="relative z-20 flex items-center justify-between px-6 py-3 lg:px-8">
        <div class="bg-[#292524] rounded-2xl px-6 py-4 flex items-center justify-between w-full max-w-4xl mx-auto">
          {/* Logo */}
          <div class="flex items-center">
            <Image
              src={navbarLogo}
              alt="deco.cx"
              width={120}
              height={48}
              class="h-8 w-auto"
            />
          </div>
          
          {/* CTA Button */}
          <a
            href={navbarButtonUrl}
            class="px-6 py-3 bg-[#d0ec19] text-[#1d1917] rounded-xl font-semibold hover:bg-[#d0ec19]/90 transition-all duration-200 font-inter"
          >
            {navbarButtonText}
          </a>
        </div>
      </nav>

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
      <div class="relative z-10 container mx-auto px-6 py-12 lg:py-20">
        <div class="max-w-5xl mx-auto text-center space-y-10">
          {/* Join Banner */}
          <div class="inline-flex items-center px-4 py-2 bg-[#292524] rounded-full text-[#fafaf9] text-sm font-inter">
            <span>Join {featuredBuilders}00+ certified AI builders</span>
            <Icon id="ChevronRight" size={16} class="ml-2 text-[#d0ec19]" />
          </div>

          {/* Title & Description */}
          <div class="space-y-8">
            <h1 
              class="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-[#fafaf9] font-inter"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p class="text-lg md:text-xl text-[#a49d9a] max-w-3xl mx-auto leading-relaxed font-inter">
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
                id="search-input"
                class="w-full pl-16 pr-6 py-6 text-lg bg-[#292524] border border-[#292524] rounded-xl focus:ring-2 focus:ring-[#d0ec19] focus:border-[#d0ec19] outline-none transition-all duration-300 text-[#fafaf9] placeholder-[#a49d9a] font-inter"
              />
              <button 
                id="search-button"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
                disabled
              >
                <span class="bg-[#a49d9a] text-[#1d1917] px-8 py-3 rounded-xl transition-all duration-200 font-semibold font-inter opacity-50 cursor-not-allowed">
                  Search
                </span>
              </button>
            </div>
          </div>

          {/* Search JavaScript */}
          <script dangerouslySetInnerHTML={{
            __html: `
              const searchInput = document.getElementById('search-input');
              const searchButton = document.getElementById('search-button');
              const searchButtonSpan = searchButton.querySelector('span');

              searchInput.addEventListener('input', function() {
                const hasValue = this.value.trim().length > 0;
                
                if (hasValue) {
                  searchButton.disabled = false;
                  searchButtonSpan.className = 'bg-[#d0ec19] text-[#1d1917] px-8 py-3 rounded-xl hover:bg-[#d0ec19]/90 transition-all duration-200 font-semibold font-inter hover:shadow-lg hover:shadow-[#d0ec19]/25 cursor-pointer';
                } else {
                  searchButton.disabled = true;
                  searchButtonSpan.className = 'bg-[#a49d9a] text-[#1d1917] px-8 py-3 rounded-xl transition-all duration-200 font-semibold font-inter opacity-50 cursor-not-allowed';
                }
              });
            `
          }} />
        </div>
      </div>
    </div>
  );
}