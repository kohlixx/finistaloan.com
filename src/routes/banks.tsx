import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHead, CTA } from "@/components/site/Sections";
import { motion } from "framer-motion";

export const Route = createFileRoute("/banks")({
    head: () => ({
        meta: pageMeta("Our Partner Banks", "Explore our trusted banking partners for home, personal, and business loans across India.")
    }),
    component: BanksPage
});

// Yahan har bank ka official link (url) add kar diya gaya hai
const banksList = [
    { name: "HDFC Bank", url: "https://www.hdfcbank.com/", logo: "/logos/hdfc.png" },
    { name: "State Bank of India", url: "https://sbi.co.in/", logo: "/logos/sbi.png" },
    { name: "ICICI Bank", url: "https://www.icicibank.com/", logo: "/logos/icici.png" },
    { name: "Canara Bank", url: "https://canarabank.com/", logo: "/logos/canara.png" },
    { name: "Bank of Baroda", url: "https://www.bankofbaroda.in/", logo: "/logos/bob.png" },
    { name: "Central Bank of India", url: "https://www.centralbankofindia.co.in/", logo: "/logos/central.png" },
    { name: "Bank of Maharashtra", url: "https://bankofmaharashtra.in/", logo: "/logos/maharashtra.png" },
    { name: "Bank of India", url: "https://bankofindia.co.in/", logo: "/logos/boi.png" },
    { name: "Axis Bank", url: "https://www.axisbank.com/", logo: "/logos/axis.png" },
];

function BanksPage() {
    return (
        <>
            <section className="pt-24 pb-16 min-h-[70vh] bg-background">
                <div className="container-wide">
                    {/* Yahan par PAN India services aur All Banks ki taglines add ki gayi hain */}
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
                                {/* <a> tag ka use kiya gaya hai direct website open karne ke liye */}
                                <a
                                    href={bank.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    /* Hover border ko naye blue theme me update kiya hai */
                                    className="flex flex-col items-center justify-center p-5 border border-border/60 rounded-2xl bg-card shadow-sm hover:shadow-lg hover:border-[#3482B9]/50 transition-all group h-full cursor-pointer"
                                >
                                    <div className="h-40 w-full flex items-center justify-center mb-4 px-2">
                                        <img
                                            src={bank.logo}
                                            alt={`${bank.name} Official Website`}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-2xl text-[#0F254B] text-center">${bank.name}</span>`;
                                            }}
                                        />
                                    </div>
                                    {/* Text hover color ko naye blue theme me update kiya hai */}
                                    <h3 className="font-semibold text-center text-foreground text-xl group-hover:text-[#3482B9] transition-colors">{bank.name}</h3>
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