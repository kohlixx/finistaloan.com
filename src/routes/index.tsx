import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesGrid, WhyUs, PartnerMarquee, Faqs, homeFaqs, BlogGrid, Testimonials, CTA, SectionHead } from "@/components/site/Sections";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { EligibilityCalculator } from "@/components/site/EligibilityCalculator";
import { ContactBlock } from "@/components/site/ContactBlock";
import { pageMeta, organizationSchema, faqSchema } from "@/lib/seo";
import { whatsappUrl } from "@/content/site";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({ meta: pageMeta("Financial Services in Delhi NCR", "Compare home, personal, business, property and car loans with FININSTA. Get expert guidance across Delhi NCR and PAN India."), scripts: [{ type: "application/ld+json", children: JSON.stringify(organizationSchema) }, { type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs)) }] }), component: HomePage
});

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

function HomePage() {
  return <>
    <section className="hero-home relative overflow-hidden bg-black">

      {/* Direct Video from Public Folder (Best Method) */}
      <motion.video
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        autoPlay
        loop
        muted
        playsInline
        className="hero-home-image w-full h-full object-cover absolute top-0 left-0"
      >
        <source src="/cinematic-video.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark Overlay for better text readability */}
      <div className="hero-home-overlay absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />

      <div className="container-wide relative z-10 flex min-h-[calc(100svh-5rem)] items-end py-14 text-ink-foreground lg:items-center">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="eyebrow text-gold inline-block">
            Trusted financial guidance
          </motion.span>

          <motion.h1 variants={fadeInUp} className="mt-5 text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl text-white drop-shadow-md">
            Get Instant Loan Approval Across Delhi NCR
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-5 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
            Home, personal, business, property and car finance—made simpler with expert support from first enquiry to disbursement.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="gold-hover transition-transform hover:scale-105 duration-300 ease-in-out">
              <a href={whatsappUrl("I want to apply for a loan with FININSTA.")} target="_blank" rel="noreferrer">
                <MessageCircle />Apply Now on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105 duration-300 ease-in-out">
              <Link to="/calculator">Check EMI <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-ink-line bg-ink/30 text-white hover:bg-white hover:text-black transition-all hover:scale-105 duration-300 ease-in-out">
              <a href="tel:+917827881951"><Phone />Call now</a>
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-7 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
            {["Competitive lender options", "100% digital assistance", "Fast profile assessment", "Free consultation"].map((x, i) => (
              <motion.span
                className="flex items-center gap-2"
                key={x}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
              >
                <CheckCircle2 className="size-4 text-gold" />{x}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Baaki sections same rahenge... */}
    <section className="trust-bar"><div className="container-wide grid grid-cols-2 lg:grid-cols-4">{[["5,000+", "Customers assisted"], ["30+", "Banking partners"], ["98%", "Positive outcomes*"], ["24×7", "WhatsApp access"]].map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div></section>
    <section className="section"><div className="container-wide"><SectionHead eyebrow="Financial solutions" title="One partner for every major milestone" copy="Explore practical borrowing, protection and investment guidance shaped around your profile." /><ServicesGrid /></div></section>
    <section className="section bg-secondary"><div className="container-wide"><SectionHead eyebrow="Why FININSTA" title="Clarity before commitment" /><WhyUs /></div></section>
    <section className="section"><div className="container-wide"><SectionHead eyebrow="EMI calculator" title="Plan the monthly payment first" copy="Use a reducing-balance estimate to explore a repayment range that feels manageable." /><EmiCalculator /></div></section>
    <section className="section bg-secondary"><div className="container-wide"><SectionHead eyebrow="Eligibility estimate" title="See where you could begin" copy="A quick indicative estimate based on income and current obligations." /><EligibilityCalculator /></div></section>
    <section className="section"><div className="container-wide"><SectionHead eyebrow="Simple process" title="From enquiry to disbursement in six clear steps" /><div className="process-grid">{["Share your goal", "Profile review", "Compare options", "Prepare documents", "Lender assessment", "Approval & disbursement"].map((x, i) => <div key={x}><b>{String(i + 1).padStart(2, "0")}</b><span>{x}</span></div>)}</div></div></section>
    <section className="py-10 bg-secondary"><SectionHead eyebrow="Lender network" title="Options across leading institutions" copy="Partner names indicate the lending ecosystem we may work with; availability depends on your profile and current policies." /><PartnerMarquee /></section>
    <section className="section"><div className="container-wide"><SectionHead eyebrow="Customer experiences" title="Guidance people remember" /><Testimonials /></div></section>
    <section className="section bg-secondary"><div className="container-wide"><SectionHead eyebrow="Financial guides" title="Make decisions with better context" /><BlogGrid limit={6} /><div className="mt-8 text-center"><Button asChild variant="outline"><Link to="/blogs">View all guides <ArrowRight /></Link></Button></div></div></section>
    <section className="section"><div className="container-wide"><SectionHead eyebrow="Questions answered" title="What borrowers ask us most" /><Faqs /></div></section>
    <section className="section bg-secondary"><div className="container-wide"><ContactBlock /></div></section><CTA />
  </>
}