import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesGrid, WhyUs, PartnerMarquee, Faqs, homeFaqs, BlogGrid, Testimonials, CTA, SectionHead } from "@/components/site/Sections";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { EligibilityCalculator } from "@/components/site/EligibilityCalculator";
import { ContactBlock } from "@/components/site/ContactBlock";
import { pageMeta, organizationSchema, faqSchema } from "@/lib/seo";
import { whatsappUrl } from "@/content/site";
import heroImage from "@/assets/fininsta-family-hero.jpg";

export const Route = createFileRoute("/")({
  head:()=>({meta:pageMeta("Financial Services in Delhi NCR","Compare home, personal, business, property and car loans with FININSTA. Get expert guidance across Delhi NCR and PAN India."),scripts:[{type:"application/ld+json",children:JSON.stringify(organizationSchema)},{type:"application/ld+json",children:JSON.stringify(faqSchema(homeFaqs))}]}),component:HomePage
});
function HomePage(){return <>
  <section className="hero-home"><img src={heroImage} alt="Indian family celebrating home ownership with FININSTA" className="hero-home-image"/><div className="hero-home-overlay"/><div className="container-wide relative z-10 flex min-h-[calc(100svh-5rem)] items-end py-14 text-ink-foreground lg:items-center"><div className="max-w-3xl"><span className="eyebrow text-gold">Trusted financial guidance</span><h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">Get Instant Loan Approval Across Delhi NCR</h1><p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">Home, personal, business, property and car finance—made simpler with expert support from first enquiry to disbursement.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button asChild size="lg" className="gold-hover"><a href={whatsappUrl("I want to apply for a loan with FININSTA.")} target="_blank" rel="noreferrer"><MessageCircle/>Apply Now on WhatsApp</a></Button><Button asChild size="lg" variant="secondary"><Link to="/calculator">Check EMI <ArrowRight/></Link></Button><Button asChild size="lg" variant="outline" className="border-ink-line bg-ink/30 text-ink-foreground hover:bg-ink-soft hover:text-ink-foreground"><a href="tel:+917827881951"><Phone/>Call now</a></Button></div><div className="mt-7 grid gap-2 text-sm text-ink-muted sm:grid-cols-2">{["Competitive lender options","100% digital assistance","Fast profile assessment","Free consultation"].map(x=><span className="flex items-center gap-2" key={x}><CheckCircle2 className="size-4 text-gold"/>{x}</span>)}</div></div></div></section>
  <section className="trust-bar"><div className="container-wide grid grid-cols-2 lg:grid-cols-4">{[["5,000+","Customers assisted"],["30+","Banking partners"],["98%","Positive outcomes*"],["24×7","WhatsApp access"]].map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}</div></section>
  <section className="section"><div className="container-wide"><SectionHead eyebrow="Financial solutions" title="One partner for every major milestone" copy="Explore practical borrowing, protection and investment guidance shaped around your profile."/><ServicesGrid/></div></section>
  <section className="section bg-secondary"><div className="container-wide"><SectionHead eyebrow="Why FININSTA" title="Clarity before commitment"/><WhyUs/></div></section>
  <section className="section"><div className="container-wide"><SectionHead eyebrow="EMI calculator" title="Plan the monthly payment first" copy="Use a reducing-balance estimate to explore a repayment range that feels manageable."/><EmiCalculator/></div></section>
  <section className="section bg-secondary"><div className="container-wide"><SectionHead eyebrow="Eligibility estimate" title="See where you could begin" copy="A quick indicative estimate based on income and current obligations."/><EligibilityCalculator/></div></section>
  <section className="section"><div className="container-wide"><SectionHead eyebrow="Simple process" title="From enquiry to disbursement in six clear steps"/><div className="process-grid">{["Share your goal","Profile review","Compare options","Prepare documents","Lender assessment","Approval & disbursement"].map((x,i)=><div key={x}><b>{String(i+1).padStart(2,"0")}</b><span>{x}</span></div>)}</div></div></section>
  <section className="py-10 bg-secondary"><SectionHead eyebrow="Lender network" title="Options across leading institutions" copy="Partner names indicate the lending ecosystem we may work with; availability depends on your profile and current policies."/><PartnerMarquee/></section>
  <section className="section"><div className="container-wide"><SectionHead eyebrow="Customer experiences" title="Guidance people remember"/><Testimonials/></div></section>
  <section className="section bg-secondary"><div className="container-wide"><SectionHead eyebrow="Financial guides" title="Make decisions with better context"/><BlogGrid limit={6}/><div className="mt-8 text-center"><Button asChild variant="outline"><Link to="/blogs">View all guides <ArrowRight/></Link></Button></div></div></section>
  <section className="section"><div className="container-wide"><SectionHead eyebrow="Questions answered" title="What borrowers ask us most"/><Faqs/></div></section>
  <section className="section bg-secondary"><div className="container-wide"><ContactBlock/></div></section><CTA/>
</>}
