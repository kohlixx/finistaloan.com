import { Link } from "@tanstack/react-router";

export function Logo({ isFooter = false }: { isFooter?: boolean }) {
    return (
        <Link
            to="/"
            className="group inline-flex items-center gap-2"
            aria-label="FININSTA home"
        >
            <img
                src="/logo.png"
                alt="FININSTA Logo"
                className="size-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Yahan se leading-none hata diya hai taaki text cut na ho aur flex laga diya hai */}
            <span className="flex flex-col justify-center">
                <b className={`block font-heading text-2xl ${isFooter ? "text-white" : "text-[#0F254B]"}`}>
                    FININSTA
                </b>
                <small className={`block text-[9px] font-semibold uppercase tracking-[.18em] mt-0.5 ${isFooter ? "text-[#93C5FD]" : "text-[#3482B9]"}`}>
                    Financial Services
                </small>
            </span>
        </Link>
    );
}