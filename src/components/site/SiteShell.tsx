import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp, Calculator, ChevronDown, House, Menu, MessageCircle, Moon, Phone, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { allServices, whatsappUrl } from "@/content/site";

// Nav array me Banks aur NBFC add kar diya gaya hai
const nav = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Banks", to: "/banks" },
    { label: "NBFC", to: "/nbfc" },
    { label: "Calculator", to: "/calculator" },
    { label: "Blogs", to: "/blogs" },
    { label: "Contact", to: "/contact" }
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const [top, setTop] = useState(false);

    useRouterState({ select: s => s.location.pathname });

    useEffect(() => {
        const fn = () => setTop(scrollY > 500);
        addEventListener("scroll", fn);
        return () => removeEventListener("scroll", fn);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <div className="min-h-screen bg-background pb-16 text-foreground md:pb-0">
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:m-3 focus:bg-background focus:p-3">Skip to content</a>
            <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
                <div className="container-wide flex h-16 items-center justify-between sm:h-20">
                    <Logo />
                    <nav className="hidden items-center gap-6 lg:flex">

                        {/* Home aur About Links */}
                        {nav.slice(0, 2).map(n => <Link key={n.to} to={n.to} className="nav-link hover:text-[#3482B9] transition-colors" activeProps={{ className: "text-[#0F254B] font-bold" }}>{n.label}</Link>)}

                        {/* Loans Dropdown */}
                        <div className="group relative">
                            <Button variant="ghost" className="nav-link gap-1 px-1 hover:text-[#3482B9] hover:bg-transparent">Loans <ChevronDown className="size-3.5" /></Button>
                            <div className="invisible absolute left-1/2 top-full grid w-[620px] -translate-x-1/2 grid-cols-2 gap-1 rounded-lg border bg-popover p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                                {allServices.map(s => s.slug === "investment-insurance" ?
                                    <Link key={s.slug} to="/investment-insurance" className="rounded-md p-3 hover:bg-[#F8FBFE] hover:border-[#3482B9]/20 border border-transparent transition-all"><span className="font-semibold text-[#0F254B]">{s.title}</span><span className="block text-xs text-muted-foreground">{s.short}</span></Link> :
                                    <Link key={s.slug} to="/loans/$slug" params={{ slug: s.slug }} className="rounded-md p-3 hover:bg-[#F8FBFE] hover:border-[#3482B9]/20 border border-transparent transition-all"><span className="font-semibold text-[#0F254B]">{s.title}</span><span className="block text-xs text-muted-foreground">{s.short}</span></Link>
                                )}
                            </div>
                        </div>

                        {/* Banks, NBFC, aur baaki ke links */}
                        {nav.slice(2).map(n => <Link key={n.to} to={n.to} className="nav-link hover:text-[#3482B9] transition-colors" activeProps={{ className: "text-[#0F254B] font-bold" }}>{n.label}</Link>)}
                    </nav>

                    <div className="hidden items-center gap-2 lg:flex">
                        <Button variant="ghost" size="icon" onClick={() => setDark(v => !v)} aria-label="Toggle colour theme">{dark ? <Sun /> : <Moon />}</Button>
                        <Button asChild className="bg-[#0F254B] hover:bg-[#3482B9] text-white transition-colors hover:shadow-lg hover:scale-105">
                            <a href={whatsappUrl("I want to apply for a loan with FININSTA.")} target="_blank" rel="noreferrer">Apply now</a>
                        </Button>
                    </div>

                    <Button variant="ghost" size="icon" className="min-h-11 min-w-11 lg:hidden text-[#0F254B]" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"}>
                        {open ? <X /> : <Menu />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <nav className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t bg-background p-3 lg:hidden">
                        {nav.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 font-medium hover:bg-[#F8FBFE] text-[#0F254B]">{n.label}</Link>)}
                        <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase text-[#3482B9]">Loan services</p>
                        <div className="grid grid-cols-2 gap-1">
                            {allServices.slice(0, 8).map(s => s.slug === "investment-insurance" ?
                                <Link key={s.slug} to="/investment-insurance" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-[#F8FBFE] text-[#0F254B]">{s.title}</Link> :
                                <Link key={s.slug} to="/loans/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm hover:bg-[#F8FBFE] text-[#0F254B]">{s.title}</Link>
                            )}
                        </div>
                        <Button asChild className="mt-3 w-full bg-[#0F254B] hover:bg-[#3482B9] text-white">
                            <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 size-4" />Apply Now on WhatsApp</a>
                        </Button>
                    </nav>
                )}
            </header>

            <main id="main">{children}</main>

            <Footer />

            <div className="fixed bottom-20 right-3 z-40 flex flex-col items-end gap-2 md:bottom-5 md:right-5">
                <Button asChild className="h-12 gap-2 rounded-full px-4 shadow-xl bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-105 transition-all" aria-label="Chat on WhatsApp">
                    <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle className="size-5" /><span className="hidden sm:inline">Chat on WhatsApp</span></a>
                </Button>
                {top && <Button size="icon" className="size-11 rounded-full shadow-lg bg-white border border-[#3482B9]/20 text-[#0F254B] hover:bg-[#F8FBFE]" onClick={() => scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp /></Button>}
            </div>

            <nav className="fixed inset-x-2 bottom-2 z-30 flex h-16 items-center justify-around rounded-lg border bg-background/95 px-1 shadow-2xl backdrop-blur-xl md:hidden">
                <Link to="/" aria-label="Home" className="mobile-nav-item hover:text-[#3482B9]"><House /><span>Home</span></Link>
                <Link to="/calculator" aria-label="Calculator" className="mobile-nav-item hover:text-[#3482B9]"><Calculator /><span>EMI</span></Link>
                <a href="tel:+917827881951" aria-label="Call Gaurav Kumar Chandna" className="mobile-nav-item hover:text-[#3482B9]"><Phone /><span>Call</span></a>
                <a href={whatsappUrl()} aria-label="WhatsApp" className="mobile-nav-item text-[#25D366]"><MessageCircle /><span>WhatsApp</span></a>
            </nav>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-[#0A1325] pb-24 pt-16 text-white md:pb-8 border-t-4 border-[#3482B9]">
            <div className="container-wide grid gap-10 md:grid-cols-4">

                {/* Brand & Identity */}
                <div>
                    <Logo />
                    <p className="mt-5 max-w-xs text-sm text-gray-400 leading-relaxed">FININSTA is Delhi NCR’s premier financial consultancy. We specialize in fast, hassle-free loan approvals and financial guidance across New Delhi, Gurugram, Noida, and PAN India.</p>
                </div>

                {/* Explore Links */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-6">Explore</h3>
                    <div className="mt-4 grid gap-3 text-sm text-gray-400">
                        <Link to="/about" className="hover:text-[#3482B9] transition-colors">About us</Link>
                        <Link to="/calculator" className="hover:text-[#3482B9] transition-colors">EMI calculator</Link>
                        <Link to="/blogs" className="hover:text-[#3482B9] transition-colors">Financial guides</Link>
                        <Link to="/contact" className="hover:text-[#3482B9] transition-colors">Contact</Link>
                    </div>
                </div>

                {/* NCR SEO Links */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-6">NCR Services</h3>
                    <div className="mt-4 grid gap-3 text-sm text-gray-400">
                        <Link to="/loans/$slug" params={{ slug: "home-loan" }} className="hover:text-[#3482B9] transition-colors">Home Loan in Delhi</Link>
                        <Link to="/loans/$slug" params={{ slug: "personal-loan" }} className="hover:text-[#3482B9] transition-colors">Personal Loan in Gurugram</Link>
                        <Link to="/loans/$slug" params={{ slug: "business-loan" }} className="hover:text-[#3482B9] transition-colors">Business Loan in Noida</Link>
                        <Link to="/loans/$slug" params={{ slug: "loan-against-property" }} className="hover:text-[#3482B9] transition-colors">Property Finance in Faridabad</Link>
                        <Link to="/banks" className="hover:text-[#3482B9] transition-colors">Top Banks in NCR</Link>
                    </div>
                </div>

                {/* Contact & Trust Signals */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-6">Speak to us</h3>
                    <div className="space-y-4 text-sm text-gray-400 mt-4">
                        <p>Delhi NCR Headquarters<br />Serving PAN India</p>
                        <a href="tel:+917827881951" className="block font-numbers text-lg font-semibold text-white hover:text-[#3482B9] transition-colors">+91 78278 81951</a>
                        {/* Yahan Email Id add ki gayi hai */}
                        <a href="mailto:info@fininstafinancialservices.com" className="block font-medium text-white hover:text-[#3482B9] transition-colors">info@fininstafinancialservices.com</a>
                        <p className="pt-2 text-xs text-[#3482B9]">Available 24x7 on WhatsApp</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Trademark */}
            <div className="container-wide mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row md:justify-between items-center">
                <div className="text-center md:text-left space-y-1.5">
                    <span>© {new Date().getFullYear()} FININSTA Financial Services. All rights reserved.</span>
                    <p>
                        Designed & Developed by{' '}
                        <a
                            href="https://www.instagram.com/kohlix.1/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3482B9] hover:text-white font-bold tracking-wider transition-colors uppercase"
                        >
                            Banti Kohli
                        </a>
                    </p>
                </div>
                <div className="flex gap-5">
                    <Link to="/" className="hover:text-white transition-colors">Privacy policy</Link>
                    <Link to="/" className="hover:text-white transition-colors">Terms</Link>
                    <Link to="/" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
            </div>
        </footer>
    );
}