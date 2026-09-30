import { useState } from "react";
import { CircleGauge, IndianRupee, Percent, CalendarRange } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { calculateEmi } from "@/lib/finance";
import { money, whatsappUrl } from "@/content/site";

export function EmiCalculator() {
    const [amount, setAmount] = useState(5000000);
    const [rate, setRate] = useState(8.5);
    const [years, setYears] = useState(20);

    const r = calculateEmi(amount, rate, years);
    const data = [{ value: amount }, { value: r.interest }];

    return (
        <div className="calculator-shell grid lg:grid-cols-[1fr_400px] gap-8 bg-card p-6 md:p-10 rounded-2xl border border-border/50 shadow-soft">
            <div className="space-y-8">
                {/* Yahan max value 100 Crore aur maxLabel update kiya gaya hai */}
                <Range
                    icon={IndianRupee}
                    label="Loan amount"
                    value={amount}
                    display={money(amount)}
                    min={100000}
                    max={1000000000}
                    step={100000}
                    minLabel="₹1 lakh"
                    maxLabel="₹100 crore"
                    onChange={setAmount}
                />
                <Range
                    icon={Percent}
                    label="Interest rate"
                    value={rate}
                    display={`${rate.toFixed(1)}% p.a.`}
                    min={5}
                    max={18}
                    step={.1}
                    minLabel="5%"
                    maxLabel="18%"
                    onChange={setRate}
                />
                <Range
                    icon={CalendarRange}
                    label="Tenure"
                    value={years}
                    display={`${years} years`}
                    min={1}
                    max={30}
                    step={1}
                    minLabel="1 year"
                    maxLabel="30 years"
                    onChange={setYears}
                />
            </div>

            <div className="calculator-result bg-[#F8FBFE] p-8 rounded-xl border border-[#3482B9]/20 flex flex-col items-center">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#0F254B] mb-6">
                    <CircleGauge className="size-4 text-[#3482B9]" /> Your estimate
                </div>

                <div className="h-44 w-full" aria-hidden="true">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={data} dataKey="value" innerRadius={55} outerRadius={75} startAngle={90} endAngle={-270} stroke="none">
                                {/* Theme ke hisaab se colors: Navy Blue aur Light Blue */}
                                <Cell fill="#0F254B" />
                                <Cell fill="#3482B9" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-4">Estimated monthly EMI</p>
                <p className="font-numbers text-center text-4xl font-bold text-[#0F254B] mt-1" aria-live="polite">{money(r.emi)}</p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm w-full border-t border-[#3482B9]/20 pt-6">
                    <div>
                        <span className="text-muted-foreground">Interest</span>
                        <b className="font-numbers mt-1 block text-[#0F254B]">{money(r.interest)}</b>
                    </div>
                    <div>
                        <span className="text-muted-foreground">Total</span>
                        <b className="font-numbers mt-1 block text-[#0F254B]">{money(r.total)}</b>
                    </div>
                </div>

                {/* Button matched to the blue theme */}
                <Button asChild className="w-full mt-8 bg-[#0F254B] hover:bg-[#3482B9] text-white transition-all h-12 rounded-xl font-bold">
                    <a href={whatsappUrl(`I calculated an EMI of ${money(r.emi)} for a loan of ${money(amount)}. Please help me apply.`)} target="_blank" rel="noreferrer">
                        Apply with this EMI
                    </a>
                </Button>
            </div>
        </div>
    );
}

function Range({ icon: Icon, label, value, display, min, max, step, minLabel, maxLabel, onChange }: { icon: typeof IndianRupee; label: string; value: number; display: string; min: number; max: number; step: number; minLabel: string; maxLabel: string; onChange: (v: number) => void }) {
    return (
        <label className="block">
            <span className="mb-4 flex items-center justify-between gap-4 text-sm font-medium">
                <span className="flex items-center gap-2 text-[#0F254B]"><Icon className="size-4 text-[#3482B9]" /> {label}</span>
                <b className="font-numbers text-[#0F254B] text-lg bg-[#3482B9]/10 px-3 py-1 rounded-md">{display}</b>
            </span>
            <Slider aria-label={label} value={[value]} min={min} max={max} step={step} onValueChange={v => onChange(v[0] ?? value)} className="[&_[role=slider]]:border-[#0F254B] [&_[role=slider]]:bg-[#0F254B] [&_[data-orientation=horizontal]>div]:bg-[#3482B9]" />
            <span className="mt-3 flex justify-between text-xs text-muted-foreground font-medium">
                <span>{minLabel}</span>
                <span>{maxLabel}</span>
            </span>
        </label>
    );
}

