import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHead, CTA } from "@/components/site/Sections";
import { motion } from "framer-motion";
import { whatsappUrl } from "@/content/site";

export const Route = createFileRoute("/banks")({
    head: () => ({
        meta: pageMeta("Our Partner Banks", "Explore our trusted banking partners for home, personal, and business loans across India.")
    }),
    component: BanksPage
});

// Saare external URLs hata diye gaye hain taaki clients website chhod kar na jayein
const banksList = [
    { name: "HDFC Bank", logo: "/logos/hdfc.png" },
    { name: "State Bank of India", logo: "/logos/sbi.png" },
    { name: "ICICI Bank", logo: "/logos/icici.png" },
    { name: "Canara Bank", logo: "/logos/canara.png" },
    { name: "Bank of Baroda", logo: "/logos/bob.png" },
    { name: "Central Bank of India", logo: "/logos/central.png" },
    { name: "Bank of Maharashtra", logo: "/logos/maharashtra.png" },
    { name: "Bank of India", logo: "/logos/boi.png" },
    { name: "Axis Bank", logo: "/logos/axis.png" },
];

function BanksPage() {
    return (
        <>
            <section className="pt-24 pb-16 min-h-[70vh] bg-background">
                <div className="container-wide">
                    <SectionHead
                        eyebrow="PAN India Network"
                        title="Loans From All Major Banks"
                        copy="Providing seamless PAN India loan services. We process applications across all recognized banks in India to ensure you get the most competitive interest rates and fastest approvals, no matter where you are."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                        {banksList.map((bank, i) => (
                            <motion.div
                                key={bank.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {/* External link ki jagah WhatsApp URL lagaya gaya hai pre-filled message ke sath */}
                                <a
                                    href={whatsappUrl(`Hello FININSTA, I want to apply for a loan through ${bank.name}. Please guide me.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-5 border border-border/60 rounded-2xl bg-card shadow-sm hover:shadow-lg hover:border-[#3482B9]/50 transition-all group h-full cursor-pointer"
                                >
                                    <div className="h-40 w-full flex items-center justify-center mb-4 px-2">
                                        <img
                                            src={bank.logo}
                                            alt={`${bank.name} Partner`}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-2xl text-[#0F254B] text-center">${bank.name}</span>`;
                                            }}
                                        />
                                    </div>
                                    <h3 className="font-semibold text-center text-foreground text-xl group-hover:text-[#3482B9] transition-colors">{bank.name}</h3>

                                    {/* Client ko clear message dene ke liye hover par ye text dikhega */}
                                    <span className="text-xs font-bold uppercase text-[#3482B9] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Apply via FININSTA &rarr;
                                    </span>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </>
    );
}