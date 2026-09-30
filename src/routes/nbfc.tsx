import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { MapPin, Briefcase, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { CTA } from "@/components/site/Sections";
import { whatsappUrl } from "@/content/site";

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

// URLs removed and replaced with empty strings for structural integrity. The click handler will use WhatsApp instead.
const nbfcsList = [
    { name: "Piramal Housing Finance", logo: "/logos/piramal.png" },
    { name: "PNB Housing Finance", logo: "/logos/pnb-housing.png" },
    { name: "ICICI Home Finance", logo: "/logos/icici-hfc.png" },
    { name: "Aditya Birla Capital", logo: "/logos/aditya-birla.png" },
    { name: "LIC HFL", logo: "/logos/lichfl.png" },
    { name: "Anand Rathi Global Finance", logo: "/logos/anand-rathi.png" },
    { name: "Aadhar Housing Finance", logo: "/logos/aadhar-housing.png" },
    { name: "Can Fin Homes Ltd", logo: "/logos/canfin.png" },
    { name: "Bajaj Housing Finance", logo: "/logos/bajaj-housing.png" },
    { name: "Tata Capital", logo: "/logos/tata-capital.png" },
    { name: "Hinduja Housing Finance", logo: "/logos/hinduja.png" },
    { name: "Capri Home Loans", logo: "/logos/capri.png" },
    { name: "Truhome Finance", logo: "/logos/truhome.png" },
];

function NBFCPage() {
    return (
        <>
            <section className="pt-24 pb-16 min-h-[70vh] bg-background">
                <div className="container-wide">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-[#3482B9]/10 text-[#3482B9] border border-[#3482B9]/20"
                        >
                            <MapPin className="size-4" />
                            <span>Exclusive for Delhi NCR</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
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
                                    <svc.icon className="size-7 text-[#3482B9]" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-heading text-[#0F254B]">{svc.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{svc.desc}</p>
                            </motion.div>
                        ))}
                    </div>

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
                                    {/* Changed <a> to direct to WhatsApp with a pre-filled message instead of external URL */}
                                    <a
                                        href={whatsappUrl(`Hello FININSTA, I want to apply for a loan through ${nbfc.name}. Please guide me.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center p-5 border border-border/60 rounded-2xl bg-card shadow-sm hover:shadow-lg hover:border-[#3482B9]/50 transition-all group h-full cursor-pointer"
                                    >
                                        <div className="h-40 w-full flex items-center justify-center mb-4 px-2">
                                            <img
                                                src={nbfc.logo}
                                                alt={`${nbfc.name} Partner`}
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
                                        <span className="text-xs font-bold uppercase text-[#3482B9] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Apply via FININSTA &rarr;
                                        </span>
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