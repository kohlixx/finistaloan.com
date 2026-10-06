import { createFileRoute } from "@tanstack/react-router";
import { BlogGrid, CTA, SectionHead } from "@/components/site/Sections";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blogs/")({
    head: () => ({
        meta: pageMeta(
            "Financial Guides & Insights",
            "Read practical FININSTA guides about loans, credit health, insurance and financial planning in India."
        )
    }),
    component: Blogs
});

function Blogs() {
    return (
        <>
            {/* Same CTA style gradient aur left-aligned layout */}
            <section className="bg-gradient-to-r from-[#0A1325] via-[#0F254B] to-[#3482B9] py-12 lg:py-16">
                <div className="container-wide">
                    <span className="eyebrow block text-[#93C5FD] font-bold tracking-[0.15em] mb-2 text-xs uppercase">
                        Knowledge centre
                    </span>
                    <h1 className="text-balance font-heading text-3xl font-bold sm:text-4xl text-white">
                        Financial guides
                    </h1>
                    <p className="mt-3 max-w-2xl text-base text-blue-100/90">
                        Plain-language answers for smarter borrowing, protection and planning decisions.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container-wide">
                    <SectionHead eyebrow="20 practical resources" title="Build confidence before you apply" />
                    <BlogGrid limit={20} />
                </div>
            </section>
            
            <CTA />
        </>
    );
}