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

function NBFCPage() {
    return (
        <>
            <section className="pt-24 pb-16 min-h-[70vh] bg-background">
                <div className="container-wide">

                    {/* NCR Focused Hero Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-gold/10 text-gold border border-gold/20"
                        >
                            <MapPin className="size-4" />
                            <span>Exclusive for Delhi NCR</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-foreground leading-tight"
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

                    {/* NCR Services Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {ncrServices.map((svc, i) => (
                            <motion.div
                                key={svc.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="p-8 border border-border/60 rounded-2xl bg-secondary/30 hover:bg-secondary/80 transition-colors"
                            >
                                <div className="size-14 rounded-xl bg-background flex items-center justify-center mb-6 shadow-sm border border-border">
                                    <svc.icon className="size-7 text-gold" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-heading">{svc.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{svc.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
            <CTA />
        </>
    );
}