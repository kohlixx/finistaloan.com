import { Link } from "@tanstack/react-router";

export function Logo() {
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

            {/* Text theme logo ke colors ke hisaab se (Deep Navy Blue aur Light Blue) */}
            <span>
                <b className="block font-heading text-xl leading-none text-[#0F254B]">
                    FININSTA
                </b>
                <small className="mt-1 block text-[9px] font-semibold uppercase tracking-[.18em] text-[#3482B9]">
                    Financial Services
                </small>
            </span>
        </Link>
    );
}