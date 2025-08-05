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
    <div class="w-full bg-white">
      {/* Hero Section */}
      <div class="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
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
                    class="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-white shadow-lg"
                  />
                  {isL1Certified && (
                    <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                      <Icon id="Discount" size={16} class="text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Main Info */}
              <div class="flex-1">
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{name}</h1>
                    <p class="text-xl text-blue-600 font-medium mb-4">{title}</p>
                    
                    {/* Badges */}
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class={`px-3 py-1 rounded-full text-sm font-medium ${
                        experienceLevel === "Expert" 
                          ? "bg-purple-100 text-purple-700"
                          : experienceLevel === "Senior"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}>
                        {experienceLevel}
                      </span>
                      {isL1Certified && (
                        <span class="px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
                          L1 Certified
                        </span>
                      )}
                      <span class={`px-3 py-1 rounded-full text-sm font-medium ${
                        availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : availability === "Busy" 
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {availability}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div class="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      {location && (
                        <div class="flex items-center gap-1">
                          <Icon id="MapPin" size={16} />
                          <span>{location}</span>
                        </div>
                      )}
                      {rating && (
                        <div class="flex items-center gap-1">
                          <Icon id="Heart" size={16} class="text-yellow-400" />
                          <span>{rating.toFixed(1)} ({projectsCount} projects)</span>
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

                  {/* Price & CTA */}
                  <div class="flex-shrink-0 text-right">
                    {price && (
                      <div class="mb-4">
                        <div class="text-3xl font-bold text-gray-900">
                          {price.currency}{price.amount}
                        </div>
                        <div class="text-gray-600">/{price.period}</div>
                      </div>
                    )}
                    <div class="flex flex-col gap-2">
                      <button class="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                        Contact Builder
                      </button>
                      <button class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
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
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div class="lg:col-span-2 space-y-12">
              {/* About */}
              <section>
                <h2 class="text-2xl font-bold mb-6">About</h2>
                <p class="text-gray-700 leading-relaxed">{fullBio}</p>
              </section>

              {/* Experience */}
              <section>
                <h2 class="text-2xl font-bold mb-6">Experience</h2>
                <div class="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} class="border border-gray-200 rounded-xl p-6">
                      <div class="flex justify-between items-start mb-3">
                        <div>
                          <h3 class="text-lg font-semibold">{exp.position}</h3>
                          <p class="text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <span class="text-gray-500 text-sm">{exp.duration}</span>
                      </div>
                      <p class="text-gray-700 mb-4">{exp.description}</p>
                      {exp.technologies && (
                        <div class="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} class="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
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
                <h2 class="text-2xl font-bold mb-6">Featured Projects</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.filter(p => p.featured).map((project) => (
                    <div key={project.id} class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
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
                        <h3 class="text-lg font-semibold mb-2">{project.title}</h3>
                        <p class="text-gray-700 text-sm mb-4">{project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span class="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <div class="flex gap-3">
                          {project.url && (
                            <a href={project.url} class="text-blue-600 hover:underline text-sm">Live Demo</a>
                          )}
                          {project.githubUrl && (
                            <a href={project.githubUrl} class="text-blue-600 hover:underline text-sm">GitHub</a>
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
              <div class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-4">Skills</h3>
                <div class="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} class="px-3 py-1 bg-white text-gray-700 text-sm rounded-lg border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-4">Specialties</h3>
                <div class="space-y-2">
                  {specialties.map((specialty) => (
                    <div key={specialty} class="flex items-center gap-2">
                      <Icon id="Discount" size={16} class="text-blue-600" />
                      <span class="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-4">Certifications</h3>
                <div class="space-y-2">
                  {certifications.map((cert) => (
                    <div key={cert} class="flex items-center gap-2">
                      <Icon id="Discount" size={16} class="text-green-600" />
                      <span class="text-gray-700 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-4">Education</h3>
                <div class="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <p class="font-medium text-gray-900">{edu.degree} in {edu.field}</p>
                      <p class="text-sm text-gray-600">{edu.institution}</p>
                      <p class="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              {socialLinks && (
                <div class="bg-gray-50 rounded-xl p-6">
                  <h3 class="text-lg font-semibold mb-4">Connect</h3>
                  <div class="flex flex-wrap gap-3">
                    {socialLinks.linkedin && (
                      <a href={socialLinks.linkedin} class="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        <Icon id="Linkedin" size={16} />
                      </a>
                    )}
                    {socialLinks.github && (
                      <a href={socialLinks.github} class="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
                        <Icon id="Discount" size={16} />
                      </a>
                    )}
                    {socialLinks.website && (
                      <a href={socialLinks.website} class="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        <Icon id="Link" size={16} />
                      </a>
                    )}
                    {socialLinks.twitter && (
                      <a href={socialLinks.twitter} class="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
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