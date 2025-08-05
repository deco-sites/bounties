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
    <div class="min-h-screen flex">
      {/* Left Side - Form */}
      <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-md w-full space-y-8">
          {/* Header */}
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p class="text-gray-600">{subtitle}</p>
          </div>

          {/* Social Login */}
          {showSocialLogin && (
            <div class="space-y-3">
              <button class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Icon id="Logo" size={20} class="mr-3" />
                Continue with Google
              </button>
              <button class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Icon id="Linkedin" size={20} class="mr-3" />
                Continue with LinkedIn
              </button>
              
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form class="space-y-6" action={redirectUrl} method="POST">
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
                placeholder="Enter your email"
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
                  autoComplete="current-password"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
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
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" class="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href={forgotPasswordUrl} class="text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <div class="text-center">
            <p class="text-gray-600">
              Don't have an account?{" "}
              <a href={signupUrl} class="text-blue-600 hover:text-blue-500 font-medium">
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Illustration */}
      <div class="hidden lg:flex lg:flex-1 relative bg-gradient-to-br from-blue-600 to-indigo-700">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Login illustration"
            width={800}
            height={1000}
            class="w-full h-full object-cover"
          />
        ) : (
          <div class="flex items-center justify-center w-full h-full">
            <div class="max-w-md text-center text-white px-8">
              <div class="mb-8">
                <div class="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon id="User" size={40} class="text-white" />
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-4">
                Join the AI Builders Community
              </h3>
              <p class="text-blue-100 leading-relaxed">
                Connect with top AI professionals and discover opportunities to grow your career in artificial intelligence.
              </p>
              <div class="mt-8 flex justify-center space-x-4">
                <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon id="Heart" size={20} class="text-white" />
                </div>
                <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon id="Discount" size={20} class="text-white" />
                </div>
                <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon id="User" size={20} class="text-white" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}