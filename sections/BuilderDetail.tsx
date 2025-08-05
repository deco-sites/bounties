import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { type Builder } from "site/components/ui/BuilderCard.tsx";

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
}

export interface DetailedBuilder extends Builder {
  fullBio: string;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: string[];
  achievements?: string[];
  languages?: { language: string; level: string }[];
  availability?: "Available" | "Busy" | "Not Available";
  responseTime?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    website?: string;
    twitter?: string;
  };
}

export interface Props {
  builder?: DetailedBuilder;
}

// Mock detailed builder data
const MOCK_DETAILED_BUILDER: DetailedBuilder = {
  id: "1",
  name: "Sarah Chen",
  title: "Machine Learning Engineer",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2a2?w=200&h=200&fit=crop&crop=face",
  bio: "Specialized in computer vision and deep learning with 5+ years of experience building production ML systems.",
  fullBio: "I'm a passionate Machine Learning Engineer with over 5 years of experience in developing and deploying production-scale AI systems. My expertise spans computer vision, deep learning, and MLOps, with a strong focus on creating robust and scalable solutions. I've worked with Fortune 500 companies and startups alike, helping them leverage AI to solve complex business problems. My approach combines technical excellence with clear communication, ensuring that stakeholders understand both the capabilities and limitations of AI solutions.",
  specialties: ["Computer Vision", "Deep Learning", "PyTorch", "MLOps"],
  isL1Certified: true,
  experienceLevel: "Senior",
  location: "San Francisco, CA",
  rating: 4.9,
  projectsCount: 24,
  profileUrl: "/builder/sarah-chen",
  skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Docker", "AWS", "Kubernetes", "Git", "SQL", "FastAPI"],
  price: { currency: "$", amount: 120, period: "hour" },
  availability: "Available",
  responseTime: "Usually responds within 2 hours",
  experience: [
    {
      id: "1",
      company: "TechCorp AI",
      position: "Senior ML Engineer",
      duration: "2022 - Present",
      description: "Lead a team of 4 engineers developing computer vision solutions for autonomous vehicles. Built and deployed models processing 1M+ images daily.",
      technologies: ["Python", "PyTorch", "CUDA", "Docker", "Kubernetes"]
    },
    {
      id: "2", 
      company: "StartupML",
      position: "ML Engineer",
      duration: "2020 - 2022",
      description: "Developed recommendation systems and NLP models for e-commerce platform. Improved conversion rates by 23% through personalization.",
      technologies: ["TensorFlow", "Python", "GCP", "BigQuery", "Flask"]
    },
    {
      id: "3",
      company: "DataSolutions Inc",
      position: "Data Scientist",
      duration: "2019 - 2020", 
      description: "Built predictive models for financial services. Created automated ETL pipelines and data quality monitoring systems.",
      technologies: ["Python", "Scikit-learn", "SQL", "Airflow", "Pandas"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Real-time Object Detection System",
      description: "Built a real-time object detection system for retail analytics using YOLO and custom CNN architectures. Achieved 95% accuracy with sub-100ms inference time.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
      technologies: ["PyTorch", "YOLO", "OpenCV", "FastAPI", "Docker"],
      githubUrl: "https://github.com/sarahchen/object-detection",
      featured: true
    },
    {
      id: "2",
      title: "Sentiment Analysis API",
      description: "Developed a multilingual sentiment analysis API using transformer models. Supports 12 languages with 92% accuracy.",
      technologies: ["Transformers", "FastAPI", "Docker", "Redis", "PostgreSQL"],
      url: "https://sentiment-api.example.com",
      githubUrl: "https://github.com/sarahchen/sentiment-api",
      featured: true
    },
    {
      id: "3",
      title: "MLOps Pipeline Framework", 
      description: "Created an end-to-end MLOps pipeline framework for model training, validation, and deployment with automated monitoring.",
      technologies: ["MLflow", "Kubeflow", "Kubernetes", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/sarahchen/mlops-framework"
    }
  ],
  education: [
    {
      id: "1",
      institution: "Stanford University",
      degree: "MS",
      field: "Computer Science (AI/ML)",
      year: "2019"
    },
    {
      id: "2",
      institution: "UC Berkeley",
      degree: "BS", 
      field: "Computer Science",
      year: "2017"
    }
  ],
  certifications: [
    "Agentic Engineer L1",
    "AWS Certified ML Specialty",
    "Google Cloud Professional ML Engineer",
    "Certified Kubernetes Administrator"
  ],
  achievements: [
    "Published 3 papers in top-tier ML conferences",
    "Keynote speaker at ML Summit 2023", 
    "Winner of Kaggle Computer Vision Competition 2022",
    "Mentor for 20+ junior engineers"
  ],
  languages: [
    { language: "English", level: "Native" },
    { language: "Mandarin", level: "Native" },
    { language: "Spanish", level: "Conversational" }
  ],
  socialLinks: {
    linkedin: "https://linkedin.com/in/sarahchen",
    github: "https://github.com/sarahchen",
    website: "https://sarahchen.dev",
    twitter: "https://twitter.com/sarahchen_ml"
  }
};

export default function BuilderDetail({ builder = MOCK_DETAILED_BUILDER }: Props) {
  const {
    name,
    title,
    avatar,
    fullBio,
    specialties,
    isL1Certified,
    experienceLevel,
    location,
    rating,
    projectsCount,
    skills,
    price,
    availability,
    responseTime,
    experience,
    projects,
    education,
    certifications,
    achievements: _achievements,
    languages: _languages,
    socialLinks
  } = builder;

  return (
    <div class="w-full bg-[#1d1917]">
      {/* Hero Section */}
      <div class="bg-[#1d1917] py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="flex flex-col md:flex-row items-start gap-8">
              {/* Avatar & Basic Info */}
              <div class="flex-shrink-0">
                <div class="relative">
                  <Image
                    src={avatar || ""}
                    alt={name}
                    width={150}
                    height={150}
                    class="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-[#292524] shadow-lg"
                  />
                  {isL1Certified && (
                    <div class="absolute -top-2 -right-2 w-8 h-8 bg-[#d0ec19] rounded-full flex items-center justify-center border-2 border-[#292524]">
                      <Icon id="Discount" size={16} class="text-[#1d1917]" />
                    </div>
                  )}
                </div>
              </div>

              {/* Main Info */}
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h1 class="text-3xl md:text-4xl font-bold text-[#fafaf9] mb-2 font-inter">{name}</h1>
                    <p class="text-xl text-[#d0ec19] font-medium mb-4 font-inter">{title}</p>
                    
                    {/* Badges */}
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class={`px-3 py-1 rounded-full text-sm font-medium font-inter ${
                        experienceLevel === "Expert" 
                          ? "bg-[#d0ec19]/20 text-[#d0ec19] border border-[#d0ec19]/30"
                          : experienceLevel === "Senior"
                          ? "bg-[#292524] text-[#a49d9a] border border-[#292524]"
                          : "bg-[#292524] text-[#a49d9a] border border-[#292524]"
                      }`}>
                        {experienceLevel}
                      </span>
                      {isL1Certified && (
                        <span class="px-3 py-1 rounded-full bg-[#d0ec19] text-[#1d1917] text-sm font-medium font-inter">
                          L1 Certified
                        </span>
                      )}
                      <span class={`px-3 py-1 rounded-full text-sm font-medium font-inter ${
                        availability === "Available"
                          ? "bg-[#d0ec19]/20 text-[#d0ec19] border border-[#d0ec19]/30"
                          : availability === "Busy" 
                          ? "bg-[#292524] text-[#a49d9a] border border-[#292524]"
                          : "bg-[#292524] text-[#a49d9a] border border-[#292524]"
                      }`}>
                        {availability}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div class="flex flex-wrap items-center gap-4 text-[#a49d9a] mb-4 font-inter">
                      {location && (
                        <div class="flex items-center gap-1">
                          <Icon id="MapPin" size={16} />
                          <span>{location}</span>
                        </div>
                      )}
                      {rating && (
                        <div class="flex items-center gap-1">
                          <Icon id="Heart" size={16} class="text-[#d0ec19]" />
                          <span>{rating.toFixed(1)}</span>
                        </div>
                      )}
                      {responseTime && (
                        <div class="flex items-center gap-1">
                          <Icon id="Phone" size={16} />
                          <span>{responseTime}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div class="flex-shrink-0">
                    <div class="flex flex-col gap-3">
                      <button class="px-8 py-3 bg-[#d0ec19] text-[#1d1917] rounded-xl font-semibold hover:bg-[#d0ec19]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#d0ec19]/25 font-inter">
                        Contact Builder
                      </button>
                      <button class="px-8 py-3 border border-[#292524] bg-[#292524] text-[#fafaf9] rounded-xl font-medium hover:bg-[#292524]/80 transition-colors font-inter">
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div class="container mx-auto px-4 py-16 bg-[#1d1917]">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div class="lg:col-span-2 space-y-12">
              {/* About */}
              <section>
                <h2 class="text-2xl font-bold mb-6 text-[#fafaf9] font-inter">About</h2>
                <p class="text-[#a49d9a] leading-relaxed font-inter">{fullBio}</p>
              </section>

              {/* Experience */}
              <section>
                <h2 class="text-2xl font-bold mb-6 text-[#fafaf9] font-inter">Experience</h2>
                <div class="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} class="border border-[#292524] bg-[#292524] rounded-xl p-6">
                      <div class="flex justify-between items-start mb-3">
                        <div>
                          <h3 class="text-lg font-semibold text-[#fafaf9] font-inter">{exp.position}</h3>
                          <p class="text-[#d0ec19] font-medium font-inter">{exp.company}</p>
                        </div>
                        <span class="text-[#a49d9a] text-sm font-inter">{exp.duration}</span>
                      </div>
                      <p class="text-[#a49d9a] mb-4 font-inter">{exp.description}</p>
                      {exp.technologies && (
                        <div class="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} class="px-3 py-1 bg-[#1d1917] text-[#a49d9a] text-sm rounded-lg border border-[#1d1917] font-inter">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 class="text-2xl font-bold mb-6 text-[#fafaf9] font-inter">Featured Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.filter(p => p.featured).map((project) => (
                    <div key={project.id} class="border border-[#292524] bg-[#292524] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#d0ec19]/10 transition-all duration-300 hover:border-[#d0ec19]/30">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={200}
                          class="w-full h-48 object-cover"
                        />
                      )}
                      <div class="p-6">
                        <h3 class="text-lg font-semibold mb-2 text-[#fafaf9] font-inter">{project.title}</h3>
                        <p class="text-[#a49d9a] text-sm mb-4 font-inter">{project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} class="px-3 py-1 bg-[#d0ec19]/20 text-[#d0ec19] text-xs rounded-lg border border-[#d0ec19]/30 font-inter">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span class="px-3 py-1 bg-[#1d1917] text-[#a49d9a] text-xs rounded-lg border border-[#1d1917] font-inter">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <div class="flex gap-3">
                          {project.url && (
                            <a href={project.url} class="text-[#d0ec19] hover:text-[#d0ec19]/80 text-sm font-inter">Live Demo</a>
                          )}
                          {project.githubUrl && (
                            <a href={project.githubUrl} class="text-[#d0ec19] hover:text-[#d0ec19]/80 text-sm font-inter">GitHub</a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div class="space-y-8">
              {/* Skills */}
              <div class="bg-[#292524] rounded-xl p-6 border border-[#292524]">
                <h3 class="text-lg font-semibold mb-4 text-[#fafaf9] font-inter">Skills</h3>
                <div class="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} class="px-3 py-1 bg-[#1d1917] text-[#a49d9a] text-sm rounded-lg border border-[#1d1917] font-inter">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div class="bg-[#292524] rounded-xl p-6 border border-[#292524]">
                <h3 class="text-lg font-semibold mb-4 text-[#fafaf9] font-inter">Specialties</h3>
                <div class="space-y-2">
                  {specialties.map((specialty) => (
                    <div key={specialty} class="flex items-center gap-2">
                      <Icon id="Discount" size={16} class="text-[#d0ec19]" />
                      <span class="text-[#a49d9a] font-inter">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div class="bg-[#292524] rounded-xl p-6 border border-[#292524]">
                <h3 class="text-lg font-semibold mb-4 text-[#fafaf9] font-inter">Certifications</h3>
                <div class="space-y-2">
                  {certifications.map((cert) => (
                    <div key={cert} class="flex items-center gap-2">
                      <Icon id="Discount" size={16} class="text-[#d0ec19]" />
                      <span class="text-[#a49d9a] text-sm font-inter">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div class="bg-[#292524] rounded-xl p-6 border border-[#292524]">
                <h3 class="text-lg font-semibold mb-4 text-[#fafaf9] font-inter">Education</h3>
                <div class="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <p class="font-medium text-[#fafaf9] font-inter">{edu.degree} in {edu.field}</p>
                      <p class="text-sm text-[#a49d9a] font-inter">{edu.institution}</p>
                      <p class="text-sm text-[#a49d9a] font-inter">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              {socialLinks && (
                <div class="bg-[#292524] rounded-xl p-6 border border-[#292524]">
                  <h3 class="text-lg font-semibold mb-4 text-[#fafaf9] font-inter">Connect</h3>
                  <div class="flex flex-wrap gap-3">
                    {socialLinks.linkedin && (
                      <a href={socialLinks.linkedin} class="p-3 bg-[#d0ec19] text-[#1d1917] rounded-lg hover:bg-[#d0ec19]/90 transition-colors">
                        <Icon id="Linkedin" size={16} />
                      </a>
                    )}
                    {socialLinks.github && (
                      <a href={socialLinks.github} class="p-3 bg-[#1d1917] text-[#fafaf9] rounded-lg hover:bg-[#1d1917]/80 transition-colors border border-[#1d1917]">
                        <Icon id="Discount" size={16} />
                      </a>
                    )}
                    {socialLinks.website && (
                      <a href={socialLinks.website} class="p-3 bg-[#d0ec19] text-[#1d1917] rounded-lg hover:bg-[#d0ec19]/90 transition-colors">
                        <Icon id="Link" size={16} />
                      </a>
                    )}
                    {socialLinks.twitter && (
                      <a href={socialLinks.twitter} class="p-3 bg-[#1d1917] text-[#fafaf9] rounded-lg hover:bg-[#1d1917]/80 transition-colors border border-[#1d1917]">
                        <Icon id="XTwitter" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}