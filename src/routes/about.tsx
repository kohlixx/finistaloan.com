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

function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#0F254B] text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container-wide relative z-10 text-center max-w-4xl mx-auto">
                    <span className="eyebrow text-[#3482B9] font-bold tracking-widest uppercase mb-4 block">
                        About The Company
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6">
                        Making Finance Simple, Fast, and Transparent.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        FININSTA is Delhi NCR’s most trusted financial consultancy, dedicated to bridging the gap between borrowers and top-tier banks with instant facilitation.
                    </p>
                </div>
            </section>

            {/* Founder Section (The Main Highlight) */}
            <section className="py-24 bg-background">
                <div className="container-wide">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Founder Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-2/5 relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-tr from-[#0F254B] to-[#3482B9] p-1">
                                <img
                                    src="/founder.jpg"
                                    alt="Gaurav Kumar Chandna - Founder FININSTA"
                                    className="w-full h-full object-cover rounded-[22px] bg-white"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = `
                                            <div class="w-full h-full bg-[#F8FBFE] rounded-[22px] flex flex-col items-center justify-center p-8 text-center">
                                                <div class="size-24 rounded-full bg-[#3482B9]/10 flex items-center justify-center mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3482B9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                </div>
                                                <h3 class="text-2xl font-bold text-[#0F254B]">Gaurav Kumar Chandna</h3>
                                                <p class="text-xs text-[#3482B9] mt-4 font-bold uppercase">(Add founder.jpg in public folder)</p>
                                            </div>
                                        `;
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Founder Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-3/5"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#0F254B] mb-2">
                                Gaurav Kumar Chandna
                            </h2>
                            <p className="text-xl text-[#3482B9] font-semibold mb-6">
                                Founder & Director
                            </p>

                            <div className="prose prose-lg text-muted-foreground mb-8">
                                <p>
                                    With over <strong>15+ years of extensive experience</strong> in the banking and finance sector, Gaurav Kumar Chandna established FININSTA with one primary vision: <strong>"Instant facilitation for finances."</strong>
                                </p>
                                <p>
                                    He identified that clients often struggle with the slow and complex processes of traditional banking. To solve this, he built a consultancy that prioritizes speed, transparency, and absolute client satisfaction.
                                </p>
                                <p>
                                    While FININSTA handles all financial portfolios, Gaurav holds a master-level core expertise in <strong>Home Loans</strong>, ensuring that families get the keys to their dream homes with the lowest interest rates and zero hassle.
                                </p>
                            </div>

                            {/* Key Achievements Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="bg-[#F8FBFE] p-4 rounded-xl border border-[#3482B9]/20 flex items-center gap-4">
                                    <div className="p-3 bg-[#3482B9]/10 rounded-lg text-[#3482B9]"><Briefcase size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-[#0F254B] text-xl">15+ Years</h4>
                                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Industry Experience</p>
                                    </div>
                                </div>
                                <div className="bg-[#F8FBFE] p-4 rounded-xl border border-[#3482B9]/20 flex items-center gap-4">
                                    <div className="p-3 bg-[#3482B9]/10 rounded-lg text-[#3482B9]"><Home size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-[#0F254B] text-xl">Home Loans</h4>
                                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Core Expertise</p>
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn Button - PASTE YOUR LINK HERE */}
                            <a
                                href="LINKEDIN_URL_HERE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#005885] text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl"
                            >
                                <Linkedin size={20} /> Connect on LinkedIn
                            </a>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Huge Milestones Section */}
            <section className="py-20 bg-[#0F254B] text-white">
                <div className="container-wide">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">A Legacy of Trust & Growth</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Our numbers speak for the dedication and hard work we put into every single file that comes to our desk.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center backdrop-blur-sm"
                        >
                            <Users className="size-12 text-[#3482B9] mx-auto mb-4" />
                            <h3 className="text-5xl font-numbers font-bold text-white mb-2">10,000+</h3>
                            <p className="text-lg text-gray-300">Happy Clients Assisted</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center backdrop-blur-sm"
                        >
                            <Building className="size-12 text-[#3482B9] mx-auto mb-4" />
                            <h3 className="text-5xl font-numbers font-bold text-white mb-2">₹1,000+ Cr</h3>
                            <p className="text-lg text-gray-300">Total Loans Disbursed</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-background">
                <div className="container-wide max-w-3xl text-center">
                    <Target className="size-16 text-[#3482B9] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0F254B] mb-6">Our Core Vision</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed italic">
                        "To provide absolute instant facilitation for finances. We believe that borrowing money shouldn't be a hurdle, it should be a stepping stone to your success."
                    </p>
                </div>
            </section>

            <CTA />
        </>
    );
}