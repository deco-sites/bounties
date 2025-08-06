import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Hero Bounties
 * @description Hero section for AI Builders directory
 */
export interface Props {
  /**
   * @title Title
   * @description Main title for the hero section
   */
  title?: string;
  
  /**
   * @title Description
   * @description Subtitle/description for the hero section
   */
  description?: string;
  
  /**
   * @title Search Placeholder
   * @description Placeholder text for the search input
   */
  searchPlaceholder?: string;
  
  /**
   * @title Navbar Logo
   * @description Logo image for the navbar
   */
  navbarLogo?: ImageWidget;
  
  /**
   * @title Navbar Button Text
   * @description Text for the navbar button
   */
  navbarButtonText?: string;
  
  /**
   * @title Navbar Button URL
   * @description URL for the navbar button
   */
  navbarButtonUrl?: string;
}

export default function HeroBounties({
  title = "Find the Best AI Builders",
  description = "Discover and connect with certified AI professionals. Explore profiles, credentials, and expertise in our comprehensive builder directory.",
  searchPlaceholder = "Search builders by name, specialty, or certification...",
  navbarLogo = "https://assets.decocache.com/bounties/b9179a88-c921-4880-b935-e3fc2e951302/deco-logo-outline.png",
  navbarButtonText = "Join as Builder",
  navbarButtonUrl = "/signup"
}: Props) {
  return (
    <section class="bg-[#1d1917] relative">
      {/* Background Pattern */}
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #fafaf9 1px, transparent 0); background-size: 20px 20px;"></div>
      </div>
      
      {/* Content */}
      <div class="relative z-10 container mx-auto px-6 pt-8 lg:pt-12">
        {/* Navbar */}
        <div class="flex items-center justify-between mb-12">
          {/* Logo */}
          <div class="flex items-center">
            <img 
              src={navbarLogo} 
              alt="Deco Logo" 
              class="h-8 w-auto"
            />
          </div>
          
          {/* Join Button */}
          <a
            href={navbarButtonUrl}
            class="px-6 py-3 bg-[#d0ec19] text-[#1d1917] rounded-xl font-semibold hover:bg-[#d0ec19]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#d0ec19]/25 font-inter"
          >
            {navbarButtonText}
          </a>
        </div>
        
        {/* Hero Content */}
        <div class="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#fafaf9] font-inter mb-6">
            {title}
          </h1>
          
          {/* Description */}
          <p class="text-lg md:text-xl text-[#a49d9a] font-inter mb-12 max-w-2xl mx-auto">
            {description}
          </p>
          
          {/* Search Bar */}
          <div class="flex items-center justify-center gap-3 max-w-2xl mx-auto">
            <div class="relative flex-1">
              <input
                type="text"
                placeholder={searchPlaceholder}
                class="w-full px-6 py-4 bg-[#292524] border border-[#404040] rounded-xl text-[#fafaf9] placeholder-[#a49d9a] font-inter focus:outline-none focus:border-[#d0ec19] focus:shadow-lg focus:shadow-[#d0ec19]/20 transition-all duration-300"
                onInput="this.nextElementSibling.style.opacity = this.value ? '1' : '0.5'; this.nextElementSibling.style.backgroundColor = this.value ? '#d0ec19' : '#404040'; this.nextElementSibling.style.color = this.value ? '#1d1917' : '#a49d9a'"
              />
            </div>
            <button
              class="px-8 py-4 bg-[#404040] text-[#a49d9a] rounded-xl font-semibold transition-all duration-300 hover:bg-[#d0ec19] hover:text-[#1d1917] font-inter"
              style="opacity: 0.5;"
              onMouseOver="if(this.previousElementSibling.querySelector('input').value) this.style.opacity = '1'"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 