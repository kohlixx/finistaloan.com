import { Link } from "@tanstack/react-router";

// Yahan humne 'isFooter' add kar diya hai
export function Logo({ isFooter = false }: { isFooter?: boolean }) {
    return (
        <Link
            to="/"
            className="group inline-flex items-center gap-2"
            aria-label="FININSTA home"
        >
            {/* Nayi image wala logo (public folder se) */}
            <img
                src="/logo.png"
                alt="FININSTA Logo"
                className="size-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span>
                {/* Agar isFooter true hai toh White color, warna Dark Navy */}
                <b className={`block font-heading text-xl leading-none ${isFooter ? "text-white" : "text-[#0F254B]"}`}>
                    FININSTA
                </b>
                {/* Niche wala chota text bhi light/dark ke hisaab se adjust hoga */}
                <small className={`mt-1 block text-[9px] font-semibold uppercase tracking-[.18em] ${isFooter ? "text-[#93C5FD]" : "text-[#3482B9]"}`}>
                    Financial Services
                </small>
            </span>
        </Link>
    );
}