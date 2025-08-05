import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  /**
   * @default Create Account
   */
  title?: string;
  /**
   * @default Join the AI Builders community
   */
  subtitle?: string;
  /**
   * @default /login
   */
  loginUrl?: string;
  /**
   * @default /welcome
   */
  redirectUrl?: string;
  backgroundImage?: ImageWidget;
  /**
   * @default false
   */
  showSocialSignup?: boolean;
  /**
   * @default false
   */
  requireTermsAcceptance?: boolean;
}

export default function AuthSignup({
  title = "Create Account",
  subtitle = "Join the AI Builders community",
  loginUrl = "/login",
  redirectUrl = "/welcome",
  backgroundImage,
  showSocialSignup = false,
  requireTermsAcceptance = true
}: Props) {
  return (
    <div class="min-h-screen flex">
      {/* Left Side - Image/Illustration */}
      <div class="hidden lg:flex lg:flex-1 relative bg-gradient-to-br from-purple-600 to-blue-700">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Signup illustration"
            width={800}
            height={1000}
            class="w-full h-full object-cover"
          />
        ) : (
          <div class="flex items-center justify-center w-full h-full">
            <div class="max-w-md text-center text-white px-8">
              <div class="mb-8">
                <div class="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon id="Discount" size={40} class="text-white" />
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-4">
                Showcase Your AI Expertise
              </h3>
              <p class="text-purple-100 leading-relaxed">
                Create your professional profile and connect with clients looking for AI builders like you.
              </p>
              <div class="mt-8 grid grid-cols-3 gap-4">
                <div class="text-center">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon id="User" size={20} class="text-white" />
                  </div>
                  <p class="text-sm text-purple-100">Build Profile</p>
                </div>
                <div class="text-center">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon id="MagnifyingGlass" size={20} class="text-white" />
                  </div>
                  <p class="text-sm text-purple-100">Get Discovered</p>
                </div>
                <div class="text-center">
                  <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon id="Heart" size={20} class="text-white" />
                  </div>
                  <p class="text-sm text-purple-100">Grow Network</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Side - Form */}
      <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-md w-full space-y-8">
          {/* Header */}
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p class="text-gray-600">{subtitle}</p>
          </div>

          {/* Social Signup */}
          {showSocialSignup && (
            <div class="space-y-3">
              <button class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Icon id="Logo" size={20} class="mr-3" />
                Sign up with Google
              </button>
              <button class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Icon id="Linkedin" size={20} class="mr-3" />
                Sign up with LinkedIn
              </button>
              
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">Or sign up with email</span>
                </div>
              </div>
            </div>
          )}

          {/* Signup Form */}
          <form class="space-y-6" action={redirectUrl} method="POST">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" class="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div class="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-12"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <Icon id="User" size={20} />
                </button>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Must be at least 8 characters long
              </p>
            </div>

            <div>
              <label htmlFor="userType" class="block text-sm font-medium text-gray-700 mb-2">
                I am a...
              </label>
              <select
                id="userType"
                name="userType"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select your role</option>
                <option value="builder">AI Builder / Professional</option>
                <option value="client">Client / Looking to hire</option>
                <option value="both">Both</option>
              </select>
            </div>

            {requireTermsAcceptance && (
              <div class="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  class="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" class="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="/terms" class="text-blue-600 hover:text-blue-500">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" class="text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </a>
                </label>
              </div>
            )}

            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div class="text-center">
            <p class="text-gray-600">
              Already have an account?{" "}
              <a href={loginUrl} class="text-blue-600 hover:text-blue-500 font-medium">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}