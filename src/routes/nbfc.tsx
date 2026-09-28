import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { MapPin, Briefcase, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/Sections";

export const Route = createFileRoute("/nbfc")({
    head: () => ({
        meta: pageMeta("NBFC Services in Delhi NCR", "Exclusive Non-Banking Financial Company services in the Delhi NCR region for faster processing.")
    }),
    component: NBFCPage
});

const ncrServices = [
    { title: "Fast Personal Loans", desc: "Instant approval for immediate personal needs exclusively for NCR residents.", icon: Zap },
    { title: "Business Expansion", desc: "Unsecured working capital for local businesses across Delhi, Gurgaon, and Noida.", icon: Briefcase },
    { title: "Property Backed Finance", desc: "High-value loans against prime real estate in the NCR region.", icon: ShieldCheck },
];

// Nayi 13 NBFCs ki list jo aapne image se di hai
const nbfcsList = [
    { name: "Piramal Housing Finance", url: "https://www.piramalfinance.com/", logo: "/logos/piramal.png" },
    { name: "PNB Housing Finance", url: "https://www.pnbhousing.com/", logo: "/logos/pnb-housing.png" },
    { name: "ICICI Home Finance", url: "https://www.icicihfc.com/", logo: "/logos/icici-hfc.png" },
    { name: "Aditya Birla Capital", url: "https://www.adityabirlacapital.com/", logo: "/logos/aditya-birla.png" },
    { name: "LIC HFL", url: "https://www.lichousing.com/", logo: "/logos/lichfl.png" },
    { name: "Anand Rathi Global Finance", url: "https://www.anandrathi.com/", logo: "/logos/anand-rathi.png" },
    { name: "Aadhar Housing Finance", url: "https://aadharhousing.com/", logo: "/logos/aadhar-housing.png" },
    { name: "Can Fin Homes Ltd", url: "https://www.canfinhomes.com/", logo: "/logos/canfin.png" },
    { name: "Bajaj Housing Finance", url: "https://www.bajajhousingfinance.in/", logo: "/logos/bajaj-housing.png" },
    { name: "Tata Capital", url: "https://www.tatacapital.com/", logo: "/logos/tata-capital.png" },
    { name: "Hinduja Housing Finance", url: "https://www.hindujahousingfinance.com/", logo: "/logos/hinduja.png" },
    { name: "Capri Home Loans", url: "https://www.capriloans.in/", logo: "/logos/capri.png" },
    { name: "Truhome Finance", url: "https://truhomefinance.com/", logo: "/logos/truhome.png" },
];

function NBFCPage() {
    return (
        <>
            <section className="pt-24 pb-16 min-h-[70vh] bg-background">
                <div className="container-wide">

                    {/* NCR Focused Hero Section (Updated with Blue Theme) */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            /* Old 'gold' theme updated to new 'Light Blue' theme */
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-[#3482B9]/10 text-[#3482B9] border border-[#3482B9]/20"
                        >
                            <MapPin className="size-4" />
                            <span>Exclusive for Delhi NCR</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            /* Text color updated to Deep Navy */
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-[#0F254B] leading-tight"
                        >
                            Agile NBFC Partners for Faster Processing
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            When traditional banks take too long, our top-tier NBFC partners provide flexible and fast financial solutions tailored specifically for residents and businesses in Delhi, Gurugram, Noida, and Faridabad.
                        </motion.p>
                    </div>

                    {/* NCR Services Cards (Updated with Blue Theme) */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16 mb-24">
                        {ncrServices.map((svc, i) => (
                            <motion.div
                                key={svc.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="p-8 border border-border/60 rounded-2xl bg-secondary/30 hover:bg-[#F8FBFE] hover:shadow-lg hover:border-[#3482B9]/30 transition-all group"
                            >
                                <div className="size-14 rounded-xl bg-background flex items-center justify-center mb-6 shadow-sm border border-border group-hover:bg-[#3482B9]/10 transition-colors">
                                    {/* Icon color updated from gold to Light Blue */}
                                    <svc.icon className="size-7 text-[#3482B9]" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-heading text-[#0F254B]">{svc.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{svc.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* NEW SECTION: NBFC Partner Logos Grid */}
                    <div className="pt-16 border-t border-border/60">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0F254B]">Our Trusted NBFC Network</h2>
                            <p className="mt-4 text-muted-foreground">Direct partnerships ensuring higher approval rates.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {nbfcsList.map((nbfc, i) => (
                                <motion.div
                                    key={nbfc.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <a
                                        href={nbfc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center p-5 border border-border/60 rounded-2xl bg-card shadow-sm hover:shadow-lg hover:border-[#3482B9]/50 transition-all group h-full cursor-pointer"
                                    >
                                        <div className="h-40 w-full flex items-center justify-center mb-4 px-2">
                                            <img
                                                src={nbfc.logo}
                                                alt={`${nbfc.name} Official Website`}
                                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-xl text-[#0F254B] text-center">${nbfc.name}</span>`;
                                                }}
                                            />
                                        </div>
                                        <h3 className="font-semibold text-center text-foreground text-lg group-hover:text-[#3482B9] transition-colors">
                                            {nbfc.name}
                                        </h3>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <CTA />
        </>
    );
}