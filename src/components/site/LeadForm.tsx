import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { whatsappUrl, allServices } from "@/content/site";

export function LeadForm({ compact = false, defaultService = "" }: { compact?: boolean; defaultService?: string }) {
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (submitting) return;

        const d = new FormData(e.currentTarget);
        const name = String(d.get("name") || "").trim();
        const phone = String(d.get("phone") || "").replace(/\D/g, "");
        const city = String(d.get("city") || "").trim();
        const service = String(d.get("service") || defaultService);
        const email = String(d.get("email") || "").trim(); // Email data fetch kiya

        if (name.length < 2 || phone.length !== 10 || city.length < 2) {
            setError("Please enter a valid name, 10-digit phone number and city.");
            return;
        }

        setError("");
        setSubmitting(true);

        // Smart WhatsApp Message Setup
        let message = `Hello FININSTA, I am ${name} from ${city}. I am interested in ${service}. My phone number is ${phone}.`;
        if (email) {
            message += ` My email ID is ${email}.`; // Agar email daala hai toh text me add ho jayega
        }

        window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
        window.setTimeout(() => setSubmitting(false), 1200);
    }

    return (
        <form onSubmit={submit} className={compact ? "grid gap-4" : "grid gap-6 rounded-lg border bg-card p-6 shadow-soft"} noValidate>

            {/* Row 1: Name and Phone */}
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="field-label">
                    Full name
                    <Input name="name" autoComplete="name" placeholder="Your name" maxLength={80} required />
                </label>
                <label className="field-label">
                    Phone number
                    <Input name="phone" type="tel" autoComplete="tel" placeholder="10-digit number" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} required />
                </label>
            </div>

            {/* Row 2: City and Service */}
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="field-label">
                    City
                    <Input name="city" autoComplete="address-level2" placeholder="Your city" maxLength={80} required />
                </label>
                <label className="field-label">
                    Service
                    <select name="service" defaultValue={defaultService} className="h-[52px] rounded-[14px] border border-input bg-background px-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3482B9]/30 focus-visible:border-[#3482B9]" required>
                        <option value="" disabled>Select service</option>
                        {allServices.map(s => <option key={s.slug}>{s.title}</option>)}
                    </select>
                </label>
            </div>

            {/* Row 3: Email ID (Optional) */}
            <div className="grid gap-4">
                <label className="field-label">
                    Email ID <span className="font-normal text-muted-foreground">(Optional)</span>
                    <Input name="email" type="email" autoComplete="email" placeholder="yourname@gmail.com" />
                </label>
            </div>

            {/* Error Message */}
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}

            {/* Submit Button (Updated to Blue Theme) */}
            <Button type="submit" className="bg-[#0F254B] hover:bg-[#3482B9] text-white transition-colors sm:w-fit h-12 px-6 rounded-xl" disabled={submitting}>
                {submitting ? "Opening WhatsApp…" : "Continue on WhatsApp"}
            </Button>

            <p className="text-xs text-muted-foreground">
                By continuing, you consent to be contacted about your enquiry. Approval and rates remain subject to lender policy.
            </p>
        </form>
    );
}