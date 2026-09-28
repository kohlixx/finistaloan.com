import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, FileCheck2, Handshake, LockKeyhole, Percent, ShieldCheck, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { allServices, blogPosts, partners, whatsappUrl } from "@/content/site";

export function SectionHead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
    return (
        <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="eyebrow bg-gradient-to-r from-[#3482B9] to-[#0F254B] bg-clip-text text-transparent font-bold tracking-wider">{eyebrow}</span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold md:text-5xl text-[#0F254B]">{title}</h2>
            {copy && <p className="mt-4 text-muted-foreground">{copy}</p>}
        </div>
    )
}

const serviceCategories = [
    { label: "Property loans", slugs: ["home-loan", "plot-loan", "plot-construction-loan", "balance-transfer", "top-up-loan", "loan-against-property"] },
    { label: "Personal loans", slugs: ["personal-loan", "car-loan", "used-car-loan"] },
    { label: "Business loans", slugs: ["business-loan", "od-dod-loan"] },
    { label: "Other financial services", slugs: ["investment-insurance"] }
] as const;

export function ServicesGrid({ limit }: { limit?: number }) {
    const [active, setActive] = useState(0);
    const visible = limit ? allServices.slice(0, limit) : allServices.filter(s => serviceCategories[active].slugs.some(slug => slug === s.slug));
    return (
        <div>
            <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Financial service categories">
                {serviceCategories.map((category, index) => (
                    <Button
                        key={category.label}
                        role="tab"
                        aria-selected={active === index}
                        variant={active === index ? "default" : "outline"}
                        size="sm"
                        className={`shrink-0 transition-all ${active === index ? 'bg-[#0F254B] text-white hover:bg-[#3482B9]' : 'border-[#3482B9]/30 text-[#0F254B] hover:bg-[#3482B9]/10'}`}
                        onClick={() => setActive(index)}
                    >
                        {category.label}
                    </Button>
                ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
                {visible.map(s => {
                    const Icon = s.icon;
                    const body = (
                        <>
                            <span className="grid size-11 place-items-center rounded-md bg-[#3482B9]/10 text-[#3482B9] transition-transform group-hover:-translate-y-1">
                                <Icon />
                            </span>
                            <h3 className="mt-5 font-heading text-[22px] font-bold text-[#0F254B]">{s.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.short}</p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3482B9] group-hover:text-[#0F254B] transition-colors">
                                Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </>
                    );
                    return s.slug === "investment-insurance" ? (
                        <Link key={s.slug} to="/investment-insurance" className="service-card group border border-transparent hover:border-[#3482B9]/20 transition-all">{body}</Link>
                    ) : (
                        <Link key={s.slug} to="/loans/$slug" params={{ slug: s.slug }} className="service-card group border border-transparent hover:border-[#3482B9]/20 transition-all">{body}</Link>
                    )
                })}
            </div>
        </div>
    )
}

const reasons = [
    [Percent, "Better-fit rates", "We compare suitable options across lending partners."],
    [Clock3, "Quick processing", "A prepared file helps avoid preventable delays."],
    [Handshake, "Dedicated expert", "One point of contact from enquiry to disbursement."],
    [FileCheck2, "Clear guidance", "Know the documents and process before you begin."],
    [LockKeyhole, "Secure handling", "Your financial documents are handled with care."],
    [ShieldCheck, "Transparent support", "Clear explanations without hidden promises."]
] as const;

export function WhyUs() {
    return (
        <div className="grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-3">
            {reasons.map(([Icon, t, c]) => (
                <div key={t} className="bg-background p-7 group hover:bg-[#F8FBFE] transition-colors">
                    <Icon className="text-[#3482B9] transition-transform group-hover:scale-110" />
                    <h3 className="mt-5 font-heading text-lg font-bold text-[#0F254B]">{t}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{c}</p>
                </div>
            ))}
        </div>
    )
}

export function PartnerMarquee() {
    return (
        <div className="overflow-hidden border-y bg-background py-6">
            <div className="marquee flex w-max gap-10">
                {[...partners, ...partners].map((p, i) => (
                    <span key={`${p}-${i}`} className="font-heading text-lg font-bold text-[#0F254B]/60 hover:text-[#0F254B] transition-colors cursor-default">
                        {p}
                    </span>
                ))}
            </div>
        </div>
    )
}

export const homeFaqs = [
    { q: "How does FININSTA help me choose a loan?", a: "We understand your requirement, review your profile, explain suitable lender options and support documentation and coordination." },
    { q: "Does checking eligibility affect my credit score?", a: "Using the calculator does not. A lender may perform a bureau enquiry when you formally apply." },
    { q: "Do you serve customers outside Delhi NCR?", a: "Yes. FININSTA is based in Delhi NCR and supports eligible customers across India." },
    { q: "Is loan approval guaranteed?", a: "No. Final approval, amount, rate and terms are determined solely by the lender after verification." },
    { q: "What is the benefit of a co-applicant?", a: "A suitable earning co-applicant may strengthen eligibility and can share repayment responsibility, subject to lender rules." },
    { q: "Can self-employed applicants apply?", a: "Yes. Lenders typically assess business vintage, turnover, income tax returns, banking and credit history." },
    { q: "How much down payment is needed?", a: "It varies by product, lender and asset. Property and vehicle loans usually require the borrower to fund a portion of the value." },
    { q: "Can I prepay my loan?", a: "Many products allow partial or full prepayment, though terms vary. Review the lender’s current charges and conditions." }
];

export function Faqs({ items = homeFaqs }: { items?: { q: string; a: string }[] }) {
    return (
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            {items.map((x, i) => (
                <AccordionItem key={x.q} value={`q-${i}`} className="border-b border-border/50">
                    <AccordionTrigger className="text-base text-[#0F254B] hover:text-[#3482B9] transition-colors">{x.q}</AccordionTrigger>
                    <AccordionContent className="leading-6 text-muted-foreground">{x.a}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export function BlogGrid({ limit = 6 }: { limit?: number }) {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {blogPosts.slice(0, limit).map((title, i) => {
                const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

                return (
                    <Link key={title} to="/blogs/$slug" params={{ slug }} className="group border-t-2 border-[#3482B9] bg-card p-6 shadow-soft hover:shadow-md hover:border-[#0F254B] transition-all">
                        <span className="text-xs font-bold uppercase text-[#3482B9]">{i % 3 === 0 ? "Loans" : i % 3 === 1 ? "Credit health" : "Financial planning"}</span>
                        <h3 className="mt-3 font-heading text-xl font-bold text-[#0F254B] group-hover:text-[#3482B9] transition-colors">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">A practical FININSTA guide with clear steps, common questions and expert considerations.</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0F254B]">
                            Read guide <ArrowRight className="size-4 text-[#3482B9] transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                )
            })}
        </div>
    )
}

export function Testimonials() {
    const [api, setApi] = useState<CarouselApi>();
    return (
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} aria-label="Customer testimonials">
            <CarouselContent>
                {[["Neha Sharma", "Home Loan · Noida"], ["Rahul Verma", "Business Loan · Delhi"], ["Amit & Priya", "Car Loan · Gurugram"]].map(([n, d]) => (
                    <CarouselItem key={n} className="md:basis-1/2 lg:basis-1/3">
                        <figure className="h-full rounded-lg border bg-card p-6 hover:border-[#3482B9]/30 transition-colors">
                            <div className="flex gap-1 text-yellow-400" aria-label="5 out of 5 stars">
                                {[1, 2, 3, 4, 5].map(x => <Star key={x} className="size-4 fill-current" aria-hidden="true" />)}
                            </div>
                            <blockquote className="mt-4 leading-7 text-muted-foreground">“The process was explained clearly, and I always knew what document or step came next.”</blockquote>
                            <figcaption className="mt-5 text-sm">
                                <b className="text-[#0F254B]">{n}</b>
                                <span className="block text-muted-foreground/80">{d}</span>
                            </figcaption>
                        </figure>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-3">
                <Button variant="outline" size="icon" className="border-[#0F254B]/20 text-[#0F254B] hover:bg-[#0F254B] hover:text-white" onClick={() => api?.scrollPrev()} aria-label="Previous testimonial"><ArrowLeft /></Button>
                <Button variant="outline" size="icon" className="border-[#0F254B]/20 text-[#0F254B] hover:bg-[#0F254B] hover:text-white" onClick={() => api?.scrollNext()} aria-label="Next testimonial"><ArrowRight /></Button>
            </div>
        </Carousel>
    )
}

export function CTA() {
    return (
        <section className="bg-gradient-to-r from-[#0F254B] to-[#3482B9] py-16 text-white border-b-4 border-[#0F254B]">
            <div className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div>
                    <p className="text-sm font-bold uppercase text-[#85C1E9] tracking-widest">
                        A clearer path starts here
                    </p>
                    <h2 className="mt-2 font-heading text-3xl md:text-4xl font-bold">
                        Let’s find a finance option that fits.
                    </h2>
                </div>
                <Button asChild className="bg-white text-[#0F254B] hover:bg-[#F8FBFE] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all hover:scale-105 duration-300 font-bold px-8 py-6 rounded-xl">
                    <Link to="/contact">Contact us <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </section>
    )
}