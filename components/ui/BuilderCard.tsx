import Image from "apps/website/components/Image.tsx";
import Icon from "./Icon.tsx";

export interface Builder {
  id: string;
  name: string;
  title: string;
  avatar?: string;
  bio: string;
  specialties: string[];
  isL1Certified: boolean;
  experienceLevel: "Junior" | "Mid" | "Senior" | "Expert";
  location?: string;
  rating?: number;
  projectsCount?: number;
  profileUrl: string;
  skills: string[];
  price?: {
    currency: string;
    amount: number;
    period: "hour" | "project" | "month";
  };
}

interface Props {
  builder: Builder;
  /**
   * @default card
   */
  layout?: "card" | "list";
  showPrice?: boolean;
  showSkills?: boolean;
}

const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";

export default function BuilderCard({ 
  builder, 
  layout = "card", 
  showPrice = true,
  showSkills = true 
}: Props) {
  const {
    name,
    title,
    avatar = DEFAULT_AVATAR,
    bio,
    specialties,
    isL1Certified,
    experienceLevel,
    location,
    rating,
    projectsCount,
    profileUrl,
    skills,
    price
  } = builder;

  if (layout === "list") {
    return (
      <div class="flex items-center space-x-6 p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
        {/* Avatar */}
        <div class="relative flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            width={80}
            height={80}
            class="w-20 h-20 rounded-full object-cover"
          />
          {isL1Certified && (
            <div class="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon id="Discount" size={14} class="text-white" />
            </div>
          )}
        </div>

        {/* Content */}
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 truncate">{name}</h3>
              <p class="text-blue-600 font-medium">{title}</p>
              <p class="text-gray-600 text-sm mt-1 line-clamp-2">{bio}</p>
              
              {/* Meta Info */}
              <div class="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                {location && (
                  <div class="flex items-center space-x-1">
                    <Icon id="MapPin" size={14} />
                    <span>{location}</span>
                  </div>
                )}
                {rating && (
                  <div class="flex items-center space-x-1">
                    <Icon id="Heart" size={14} class="text-yellow-400" />
                    <span>{rating.toFixed(1)}</span>
                  </div>
                )}
                {projectsCount && (
                  <span>{projectsCount} projects</span>
                )}
              </div>

              {/* Skills */}
              {showSkills && skills.length > 0 && (
                <div class="flex flex-wrap gap-2 mt-3">
                  {skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                  {skills.length > 4 && (
                    <span class="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
                      +{skills.length - 4} more
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Price */}
            {showPrice && price && (
              <div class="text-right ml-4">
                <div class="text-2xl font-bold text-gray-900">
                  {price.currency}{price.amount}
                </div>
                <div class="text-sm text-gray-500">/{price.period}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <a href={profileUrl} class="block group">
      <div class="bg-[#292524] rounded-2xl border border-[#292524] hover:border-[#d0ec19]/30 hover:shadow-xl hover:shadow-[#d0ec19]/10 transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div class="p-6 pb-4">
          <div class="flex items-start space-x-4">
            {/* Avatar */}
            <div class="relative flex-shrink-0">
              <Image
                src={avatar}
                alt={name}
                width={64}
                height={64}
                class="w-16 h-16 rounded-full object-cover border-2 border-[#1d1917]"
              />
              {isL1Certified && (
                <div class="absolute -top-1 -right-1 w-5 h-5 bg-[#d0ec19] rounded-full flex items-center justify-center">
                  <Icon id="Discount" size={12} class="text-[#1d1917]" />
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div class="flex-1 min-w-0">
              <h3 class="text-lg font-semibold text-[#fafaf9] truncate group-hover:text-[#d0ec19] transition-colors font-inter">
                {name}
              </h3>
              <p class="text-[#d0ec19] font-medium text-sm font-inter">{title}</p>
              
              {/* Badges */}
              <div class="flex items-center space-x-2 mt-2">
                <span class={`px-2 py-1 text-xs rounded-full font-medium font-inter ${
                  experienceLevel === "Expert" 
                    ? "bg-[#d0ec19]/20 text-[#d0ec19] border border-[#d0ec19]/30"
                    : experienceLevel === "Senior"
                    ? "bg-[#1d1917] text-[#a49d9a] border border-[#1d1917]"
                    : experienceLevel === "Mid"
                    ? "bg-[#1d1917] text-[#a49d9a] border border-[#1d1917]"
                    : "bg-[#1d1917] text-[#a49d9a] border border-[#1d1917]"
                }`}>
                  {experienceLevel}
                </span>
                {isL1Certified && (
                  <span class="px-2 py-1 text-xs rounded-full bg-[#d0ec19] text-[#1d1917] font-medium font-inter">
                    L1 Certified
                  </span>
                )}
              </div>
            </div>


          </div>
        </div>

        {/* Bio */}
        <div class="px-6 pb-4">
          <p class="text-[#a49d9a] text-sm line-clamp-2 leading-relaxed font-inter">{bio}</p>
        </div>

        {/* Specialties */}
        {specialties.length > 0 && (
          <div class="px-6 pb-4">
            <div class="flex flex-wrap gap-2">
              {specialties.slice(0, 3).map((specialty) => (
                <span
                  key={specialty}
                  class="px-3 py-1 bg-[#1d1917] text-[#a49d9a] text-xs rounded-lg border border-[#1d1917] font-inter"
                >
                  {specialty}
                </span>
              ))}
              {specialties.length > 3 && (
                <span class="px-3 py-1 bg-[#1d1917] text-[#a49d9a] text-xs rounded-lg border border-[#1d1917] font-inter">
                  +{specialties.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div class="px-6 py-4 bg-[#1d1917] border-t border-[#1d1917]">
          <div class="flex items-center justify-between text-sm text-[#a49d9a] font-inter">
            <div class="flex items-center space-x-3">
              {location && (
                <div class="flex items-center space-x-1">
                  <Icon id="MapPin" size={12} />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}