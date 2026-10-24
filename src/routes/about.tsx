import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { motion } from "framer-motion";
import { Award, Briefcase, Building, Home, Linkedin, Target, Users } from "lucide-react";
import { CTA } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
    head: () => ({
        meta: pageMeta(
            "About FININSTA & Gaurav Kumar Chandna",
            "Learn about FININSTA Financial Services, founded by Gaurav Kumar Chandna. 15+ years of experience, ₹1000+ Cr disbursed, and 10000+ happy clients."
        )
    }),
    component: AboutPage
});

// Animation variants for reusability
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

function AboutPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-gradient-to-r from-[#0A1325] via-[#0F254B] to-[#3482B9] py-10 lg:py-12 overflow-hidden">
                <div className="container-wide">
                    <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="eyebrow block text-[#93C5FD] font-bold tracking-[0.15em] mb-1.5 text-xs uppercase"
                    >
                        About The Company
                    </motion.span>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="font-heading text-2xl font-bold sm:text-3xl lg:text-4xl text-white"
                    >
                        Making Finance Simple, Fast, and Transparent.
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                        className="mt-2.5 max-w-2xl text-sm md:text-base text-blue-100/90"
                    >
                        FININSTA is Delhi NCR’s most trusted financial consultancy, dedicated to bridging the gap between borrowers and top-tier banks with instant facilitation.
                    </motion.p>
                </div>
            </section>

            {/* 2. Founder Section */}
            <section className="py-12 md:py-14 bg-background overflow-hidden">
                <div className="container-wide">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

                        {/* Image - Slides in from left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="w-full lg:w-2/5 relative"
                        >
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative bg-gradient-to-tr from-[#0F254B] to-[#3482B9] p-1 group">
                                <img
                                    src="/founder.png"
                                    alt="Gaurav Kumar Chandna - Founder FININSTA"
                                    className="w-full h-full object-cover object-top rounded-[14px] bg-white transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = `
                                            <div class="w-full h-full bg-[#F8FBFE] rounded-[14px] flex flex-col items-center justify-center p-6 text-center">
                                                <div class="size-20 rounded-full bg-[#3482B9]/10 flex items-center justify-center mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3482B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                </div>
                                                <h3 class="text-xl font-bold text-[#0F254B]">Gaurav Kumar Chandna</h3>
                                                <p class="text-xs text-[#3482B9] mt-2 font-bold uppercase">(Add founder.png in public folder)</p>
                                            </div>
                                        `;
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Founder Content - Staggered fade up */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full lg:w-3/5"
                        >
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-heading text-[#0F254B] mb-1.5">
                                Gaurav Kumar Chandna
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-lg text-[#3482B9] font-semibold mb-4">
                                Founder & Director
                            </motion.p>

                            <motion.div variants={fadeUp} className="prose text-muted-foreground mb-6 text-sm md:text-base leading-relaxed space-y-3">
                                <p>
                                    With over <strong>15+ years of extensive experience</strong> in the banking and finance sector, Gaurav Kumar Chandna established FININSTA with one primary vision: <strong>"Instant facilitation for finances."</strong>
                                </p>
                                <p>
                                    He identified that clients often struggle with the slow and complex processes of traditional banking. To solve this, he built a consultancy that prioritizes speed, transparency, and absolute client satisfaction.
                                </p>
                                <p>
                                    While FININSTA handles all financial portfolios, Gaurav holds a master-level core expertise in <strong>Home Loans</strong>, ensuring that families get the keys to their dream homes with the lowest interest rates and zero hassle.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-3 mb-6">
                                <motion.div whileHover={{ scale: 1.02 }} className="bg-[#F8FBFE] p-3.5 rounded-xl border border-[#3482B9]/20 flex items-center gap-3">
                                    <div className="p-2.5 bg-[#3482B9]/10 rounded-lg text-[#3482B9]"><Briefcase size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-[#0F254B] text-lg">15+ Years</h4>
                                        <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Industry Experience</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.02 }} className="bg-[#F8FBFE] p-3.5 rounded-xl border border-[#3482B9]/20 flex items-center gap-3">
                                    <div className="p-2.5 bg-[#3482B9]/10 rounded-lg text-[#3482B9]"><Home size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-[#0F254B] text-lg">Home Loans</h4>
                                        <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider">Core Expertise</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.a
                                variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com/in/fininsta-financial-services-34723a445?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-md hover:shadow-lg text-sm"
                            >
                                <Linkedin size={18} /> Connect on LinkedIn
                            </motion.a>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Milestones Section */}
            <section className="py-12 bg-[#0F254B] text-white overflow-hidden">
                <div className="container-wide">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">A Legacy of Trust & Growth</h2>
                        <p className="text-gray-400 text-sm max-w-xl mx-auto">Our numbers speak for the dedication and hard work we put into every single file that comes to our desk.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm transition-all"
                        >
                            <Users className="size-10 text-[#3482B9] mx-auto mb-3" />
                            <h3 className="text-4xl font-numbers font-bold text-white mb-1">10,000+</h3>
                            <p className="text-sm text-gray-300">Happy Clients Assisted</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }} 
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm transition-all"
                        >
                            <Building className="size-10 text-[#3482B9] mx-auto mb-3" />
                            <h3 className="text-4xl font-numbers font-bold text-white mb-1">₹1,000+ Cr</h3>
                            <p className="text-sm text-gray-300">Total Loans Disbursed</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Vision Section */}
            <section className="py-12 md:py-14 bg-background">
                <div className="container-wide max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                    >
                        <Target className="size-12 text-[#3482B9] mx-auto mb-4" />
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold font-heading text-[#0F254B] mb-3"
                    >
                        Our Core Vision
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-base text-muted-foreground leading-relaxed italic"
                    >
                        "To provide absolute instant facilitation for finances. We believe that borrowing money shouldn't be a hurdle, it should be a stepping stone to your success."
                    </motion.p>
                </div>
            </section>

            {/* 5. CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <CTA />
            </motion.div>
        </>
    );
}