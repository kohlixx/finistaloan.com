import { createFileRoute } from "@tanstack/react-router";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { EligibilityCalculator } from "@/components/site/EligibilityCalculator";
import { CTA } from "@/components/site/Sections";
import { pageMeta } from "@/lib/seo";
import { motion } from "framer-motion";

export const Route = createFileRoute("/calculator")({
    head: () => ({
        meta: pageMeta(
            "Loan EMI & Eligibility Calculator",
            "Calculate an estimated loan EMI and explore indicative eligibility with FININSTA’s free financial tools."
        )
    }),
    component: Calculator
});

function Calculator() {
    return (
        <>
            <section className="bg-gradient-to-r from-[#0A1325] via-[#0F254B] to-[#3482B9] py-10 lg:py-12">
                <div className="container-wide">
                    <span className="eyebrow block text-[#93C5FD] font-bold tracking-[0.15em] mb-1 text-xs uppercase">
                        Free financial tools
                    </span>
                    <h1 className="text-balance font-heading text-3xl font-bold sm:text-4xl text-white">
                        Loan calculators
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm text-blue-100/90 sm:text-base">
                        Explore repayment and eligibility estimates before speaking with an expert.
                    </p>
                </div>
            </section>

            {/* EMI Section */}
            <section className="section py-10">
                <div className="container-wide">
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-2xl mx-auto mb-6"
                    >
                        <span className="text-[#3482B9] font-extrabold tracking-[0.2em] text-xs uppercase block mb-1">
                            EMI estimate
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#0F254B]">
                            Find a comfortable monthly payment
                        </h2>
                    </motion.div>
                    <EmiCalculator />
                </div>
            </section>
            
            {/* Eligibility Section - Made extra compact with py-8 */}
            <section className="section bg-secondary py-8 overflow-hidden">
                <div className="container-wide">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-center max-w-2xl mx-auto mb-6"
                    >
                        <motion.span 
                            initial={{ opacity: 0, y: -5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-[#0F254B] font-extrabold tracking-[0.25em] text-xs uppercase block mb-1"
                        >
                            Eligibility
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-bold font-heading text-[#0F254B]"
                        >
                            Estimate your borrowing range
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <EligibilityCalculator />
                    </motion.div>
                </div>
            </section>
            
            <CTA />
        </>
    );
}