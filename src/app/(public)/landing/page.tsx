import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Lock,
  Database,
  ChevronRight,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              One <span className="text-purple-600">VAult</span>
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Where <span className="text-purple-600">Work</span> Happens
            </h1>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto mb-8">
              Encrypt it. <span className="text-black">Share it.</span> Secure
              it. <span className="text-black">Save it.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-6 text-base">
                GET STARTED
              </Button>
              <Button
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 text-base"
              >
                FIND YOUR PLAN <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src="/assets/image/hero-illustration.png"
                alt="App Preview"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything you need to secure your data
              </h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides enterprise-grade security with an
                intuitive interface, making data management both secure and
                simple.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/images/features-illustration.png"
              alt="Vault Inc. Features"
              width={500}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <Shield className="mt-1 h-6 w-6 text-slate-800" />
                  <div>
                    <h3 className="text-xl font-bold">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-slate-500">
                      Military-grade encryption with multi-factor authentication
                      and role-based access controls.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Database className="mt-1 h-6 w-6 text-slate-800" />
                  <div>
                    <h3 className="text-xl font-bold">Scalable Storage</h3>
                    <p className="text-slate-500">
                      Automatically scale your storage needs as your business
                      grows without compromising performance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Lock className="mt-1 h-6 w-6 text-slate-800" />
                  <div>
                    <h3 className="text-xl font-bold">Compliance Ready</h3>
                    <p className="text-slate-500">
                      Built-in compliance with GDPR, HIPAA, SOC 2, and other
                      regulatory requirements.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-200 px-3 py-1 text-sm text-slate-600">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, secure, and straightforward
              </h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started in minutes with our intuitive platform designed for
                teams of all sizes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Create your vault",
                description:
                  "Set up your secure vault with just a few clicks and customize your security settings.",
              },
              {
                step: "2",
                title: "Upload your data",
                description:
                  "Easily upload and organize your sensitive data with our drag-and-drop interface.",
              },
              {
                step: "3",
                title: "Manage access",
                description:
                  "Control who can access your data with granular permissions and audit logs.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-center text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by security professionals
              </h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our customers have to say about our secure storage
                solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            {[
              {
                quote:
                  "Vault Inc. has transformed how we handle sensitive customer data. The platform is intuitive yet powerful.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
              },
              {
                quote:
                  "We needed a solution that would scale with our growing business while maintaining compliance. Vault Inc. delivered.",
                author: "Michael Chen",
                role: "Security Director, FinanceHub",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-lg font-medium leading-relaxed text-slate-700">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={`/images/testimonial-avatar-${index + 1}.png`}
                      alt={`${testimonial.author} avatar`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="w-full py-12 md:py-24 lg:py-32 bg-slate-50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-200 px-3 py-1 text-sm text-slate-600">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, transparent pricing
              </h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that's right for your business. All plans
                include a 14-day free trial.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small teams and startups",
                features: [
                  "5GB secure storage",
                  "Up to 10 team members",
                  "Basic encryption",
                  "Email support",
                ],
              },
              {
                name: "Professional",
                price: "$99",
                description: "Ideal for growing businesses",
                features: [
                  "50GB secure storage",
                  "Unlimited team members",
                  "Advanced encryption",
                  "Priority support",
                  "Compliance reporting",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations with specific needs",
                features: [
                  "Unlimited storage",
                  "Custom security policies",
                  "Dedicated account manager",
                  "24/7 phone support",
                  "Advanced compliance tools",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col rounded-lg border ${index === 1 ? "border-slate-900 bg-slate-900 text-white shadow-lg" : "border-slate-200 bg-white"} p-6`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="ml-1 text-sm font-medium text-slate-400">
                        /month
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm ${index === 1 ? "text-slate-300" : "text-slate-500"}`}
                  >
                    {plan.description}
                  </p>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle
                        className={`mr-2 h-4 w-4 ${index === 1 ? "text-slate-300" : "text-slate-800"}`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/sign-up">
                  <Button
                    className={
                      index === 1
                        ? "bg-white text-slate-900 hover:bg-slate-100 w-full"
                        : "bg-slate-900 text-white hover:bg-slate-800 w-full"
                    }
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently asked questions
              </h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to know about Vault Inc.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 py-12">
            {[
              {
                question: "How secure is Vault Inc.?",
                answer:
                  "Vault Inc. uses military-grade encryption and follows industry best practices for security. All data is encrypted at rest and in transit, and we regularly undergo security audits.",
              },
              {
                question:
                  "Can I integrate Vault Inc. with my existing systems?",
                answer:
                  "Yes, Vault Inc. provides APIs and integrations with popular platforms and services. Our developer documentation provides detailed guides for integration.",
              },
              {
                question: "What compliance standards does Vault Inc. meet?",
                answer:
                  "Vault Inc. is compliant with GDPR, HIPAA, SOC 2, and other regulatory requirements. We provide detailed compliance reports and documentation.",
              },
              {
                question: "How does pricing work for larger teams?",
                answer:
                  "For teams larger than 50 members, we offer custom pricing plans. Contact our sales team for a personalized quote based on your specific needs.",
              },
              {
                question: "Is there a free trial available?",
                answer:
                  "Yes, all plans include a 14-day free trial with full access to all features. No credit card required to start.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 text-slate-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to secure your data?
              </h2>
              <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of companies that trust Vault Inc. with their
                most sensitive data.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-purple-500 text-white border-slate-900"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-slate-950 text-slate-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Vault Inc.</h3>
              <p className="text-sm text-slate-400">
                Secure data storage for the modern enterprise. Protecting your
                most valuable assets.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: "twitter", icon: Twitter },
                  { name: "facebook", icon: Facebook },
                  { name: "instagram", icon: Instagram },
                  { name: "github", icon: Github },
                  { name: "linkedin", icon: Linkedin },
                ].map(({ name, icon: Icon }) => (
                  <Link
                    key={name}
                    href="#"
                    className="text-slate-400 hover:text-white"
                  >
                    <span className="sr-only">{name}</span>
                    <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Product</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Features",
                  "Security",
                  "Pricing",
                  "Integrations",
                  "Enterprise",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Resources</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Documentation",
                  "Guides",
                  "API Reference",
                  "Blog",
                  "Community",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2 text-sm">
                {["About", "Careers", "Contact", "Privacy", "Terms"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-slate-400 hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Vault Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
