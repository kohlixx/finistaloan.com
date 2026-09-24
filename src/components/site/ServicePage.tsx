import { Check, FileText, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EmiCalculator } from "./EmiCalculator";
import { Faqs, CTA, SectionHead } from "./Sections";
import { LeadForm } from "./LeadForm";
import { PageHero } from "./PageHero";
import { whatsappUrl, type Service } from "@/content/site";
import homeImage from "@/assets/fininsta-home.jpg";
import businessImage from "@/assets/fininsta-business.jpg";

export function ServicePage({service}:{service:Service}) { const image=service.image==="home"?homeImage:businessImage; return <>
  <PageHero eyebrow={service.eyebrow} title={service.title} description={service.description} image={image}/>
  <section id="details" className="section"><div className="container-wide"><div className="stats-strip">{[["Indicative rate",service.rate],["Tenure",service.tenure],["Funding",service.amount]].map(([a,b])=><div key={a}><span>{a}</span><b>{b}</b></div>)}</div><div className="mt-16 grid gap-10 lg:grid-cols-[1fr_.7fr]"><div><span className="eyebrow">Why consider it</span><h2 className="mt-3 font-heading text-3xl font-bold">A practical route to your next financial goal</h2><div className="mt-7 grid gap-3 sm:grid-cols-2">{service.benefits.map(x=><div className="flex gap-3 rounded-md border bg-card p-4" key={x}><Check className="mt-0.5 size-5 shrink-0 text-primary"/><span>{x}</span></div>)}</div></div><aside><h3 className="font-heading text-xl font-bold">Start your enquiry</h3><p className="mb-5 mt-2 text-sm text-muted-foreground">Share a few details and continue securely on WhatsApp.</p><LeadForm compact defaultService={service.title}/></aside></div></div></section>
  <section className="section bg-secondary"><div className="container-wide"><SectionHead eyebrow="Documents" title="Prepare your application file" copy="Requirements can vary by lender and profile. These are the most commonly requested items."/><div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">{service.documents.map(x=><div key={x} className="flex items-center gap-3 rounded-md bg-background p-4"><FileText className="size-5 text-primary"/><span>{x}</span></div>)}</div></div></section>
  <section className="section"><div className="container-wide"><SectionHead eyebrow="Plan repayment" title={`Estimate your ${service.title} EMI`} copy="Adjust the figures to understand a comfortable repayment range."/><EmiCalculator/></div></section>
  <section className="section bg-secondary"><div className="container-wide"><SectionHead eyebrow="Common questions" title={`${service.title} FAQs`}/><Faqs items={service.faqs}/><div className="mt-8 text-center"><Button asChild variant="outline"><a href={whatsappUrl(`I have a question about ${service.title}.`)} target="_blank" rel="noreferrer"><MessageCircle/>Ask an expert</a></Button></div></div></section>
  <nav className="container-wide py-8 text-sm text-muted-foreground" aria-label="Breadcrumb"><Link to="/">Home</Link> <span aria-hidden> / </span> <span>{service.title}</span></nav><CTA/>
</>}
