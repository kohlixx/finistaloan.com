import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";

export function PageHero({ eyebrow, title, description, image, cta = "Apply Now on WhatsApp" }: { eyebrow: string; title: string; description: string; image?: string; cta?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFE] text-[#0F254B] border-b border-[#3482B9]/20">
      <div className="container-wide grid min-h-[320px] items-center gap-12 py-10 lg:grid-cols-[1fr_.88fr] lg:py-16">

        <div className="relative z-10">
          <span className="eyebrow text-[#3482B9] font-bold tracking-wider mb-3 block text-sm uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-2 max-w-3xl text-balance font-heading text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="bg-[#0F254B] hover:bg-[#3482B9] text-white transition-colors">
              <a href={whatsappUrl(`I would like help with ${title}.`)} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 size-4" />{cta}
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#3482B9]/20 text-[#0F254B] hover:bg-[#3482B9]/10 transition-colors">
              <a href="#details">Explore details <ArrowRight className="ml-2 size-4" /></a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 font-medium">
            {["Free consultation", "Digital assistance", "PAN India support"].map(x => (
              <span key={x} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#3482B9]" />{x}
              </span>
            ))}
          </div>
        </div>

        {image && (
          <div className="relative">
            <img src={image} alt="FININSTA financial consultation" width="1400" height="900" loading="eager" fetchPriority="high" className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl" />
            <div className="absolute -bottom-4 left-4 right-4 rounded-lg border border-[#3482B9]/20 bg-white/95 p-4 backdrop-blur shadow-lg">
              <b className="text-[#0F254B]">Finance made simple.</b>
              <span className="mt-1 block text-sm text-slate-600">One expert. Clear steps. Trusted lender coordination.</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}