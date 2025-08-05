import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  /**
   * @default Welcome Back
   */
  title?: string;
  /**
   * @default Sign in to your AI Builders account
   */
  subtitle?: string;
  /**
   * @default /signup
   */
  signupUrl?: string;
  /**
   * @default /forgot-password
   */
  forgotPasswordUrl?: string;
  /**
   * @default /dashboard
   */
  redirectUrl?: string;
  backgroundImage?: ImageWidget;
  /**
   * @default false
   */
  showSocialLogin?: boolean;
}

export default function AuthLogin({
  title = "Welcome Back",
  subtitle = "Sign in to your AI Builders account",
  signupUrl = "/signup",
  forgotPasswordUrl = "/forgot-password",
  redirectUrl = "/dashboard",
  backgroundImage,
  showSocialLogin = false
}: Props) {
  return (
    <div class="min-h-screen flex bg-[#1d1917]">
      {/* Left Side - Form */}
      <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#1d1917]">
        <div class="max-w-md w-full space-y-8">
          {/* Header */}
          <div class="text-center">
            <h2 class="text-3xl font-bold text-[#fafaf9] mb-2 font-inter">{title}</h2>
            <p class="text-[#a49d9a] font-inter">{subtitle}</p>
          </div>

          {/* Social Login */}
          {showSocialLogin && (
            <div class="space-y-3">
              <button class="w-full flex items-center justify-center px-4 py-3 border border-[#292524] rounded-xl text-[#fafaf9] bg-[#292524] hover:bg-[#292524]/80 transition-colors font-inter">
                <Icon id="Logo" size={20} class="mr-3" />
                Continue with Google
              </button>
              <button class="w-full flex items-center justify-center px-4 py-3 border border-[#292524] rounded-xl text-[#fafaf9] bg-[#292524] hover:bg-[#292524]/80 transition-colors font-inter">
                <Icon id="Linkedin" size={20} class="mr-3" />
                Continue with LinkedIn
              </button>
              
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-[#292524]" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-[#1d1917] text-[#a49d9a] font-inter">Or continue with email</span>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form class="space-y-6" action={redirectUrl} method="POST">
            <div>
              <label htmlFor="email" class="block text-sm font-medium text-[#fafaf9] mb-2 font-inter">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                class="w-full px-4 py-3 border border-[#292524] bg-[#292524] text-[#fafaf9] placeholder-[#a49d9a] rounded-xl focus:ring-2 focus:ring-[#d0ec19] focus:border-[#d0ec19] outline-none transition-all font-inter"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" class="block text-sm font-medium text-[#fafaf9] mb-2 font-inter">
                Password
              </label>
              <div class="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  class="w-full px-4 py-3 border border-[#292524] bg-[#292524] text-[#fafaf9] placeholder-[#a49d9a] rounded-xl focus:ring-2 focus:ring-[#d0ec19] focus:border-[#d0ec19] outline-none transition-all pr-12 font-inter"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-[#a49d9a] hover:text-[#fafaf9]"
                >
                  <Icon id="User" size={20} />
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-[#d0ec19] focus:ring-[#d0ec19] border-[#a49d9a] bg-[#292524] rounded"
                />
                <label htmlFor="remember-me" class="ml-2 block text-sm text-[#a49d9a] font-inter">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href={forgotPasswordUrl} class="text-[#d0ec19] hover:text-[#d0ec19]/80 font-inter">
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-[#1d1917] bg-[#d0ec19] hover:bg-[#d0ec19]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d0ec19] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d0ec19]/25 font-inter"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <div class="text-center">
            <p class="text-[#a49d9a] font-inter">
              Don't have an account?{" "}
              <a href={signupUrl} class="text-[#d0ec19] hover:text-[#d0ec19]/80 font-medium font-inter">
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Illustration */}
      <div class="hidden lg:flex lg:flex-1 relative bg-gradient-to-br from-[#292524] to-[#1d1917]">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Login illustration"
            width={800}
            height={1000}
            class="w-full h-full object-cover opacity-30"
          />
        ) : (
          <div class="flex items-center justify-center w-full h-full">
            <div class="max-w-md text-center text-[#fafaf9] px-8">
              <div class="mb-8">
                <div class="w-24 h-24 bg-[#d0ec19] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon id="User" size={40} class="text-[#d0ec19]" />
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-4 font-inter">
                Join the AI Builders Community
              </h3>
              <p class="text-[#a49d9a] leading-relaxed font-inter">
                Connect with top AI professionals and discover opportunities to grow your career in artificial intelligence.
              </p>
              <div class="mt-8 flex justify-center space-x-4">
                <div class="w-12 h-12 bg-[#d0ec19] bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon id="Heart" size={20} class="text-[#d0ec19]" />
                </div>
                <div class="w-12 h-12 bg-[#d0ec19] bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon id="Discount" size={20} class="text-[#d0ec19]" />
                </div>
                <div class="w-12 h-12 bg-[#d0ec19] bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon id="User" size={20} class="text-[#d0ec19]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}