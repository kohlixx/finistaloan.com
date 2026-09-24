import { useMemo, useState } from "react";
import { BriefcaseBusiness, CircleGauge, IndianRupee, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { estimateEligibility } from "@/lib/finance";
import { money, whatsappUrl } from "@/content/site";

export function EligibilityCalculator() {
  const [salary,setSalary]=useState(90000), [currentEmi,setCurrentEmi]=useState(10000), [age,setAge]=useState(34), [employment,setEmployment]=useState("Salaried");
  const result=useMemo(()=>estimateEligibility(salary,currentEmi),[salary,currentEmi]);
  const suggested=salary>=100000?"Home Loan or Loan Against Property":salary>=50000?"Home Loan or Car Loan":"Personal Loan";
  const ratio=Math.min(100,Math.max(0,Math.round(result/10000000*100)));
  return <div className="calculator-shell">
    <div className="grid gap-6 sm:grid-cols-2">
      <label className="field-label"><span className="flex items-center gap-2"><IndianRupee className="size-4 text-primary"/>Monthly income</span><Input type="number" min={15000} value={salary} onChange={e=>setSalary(Number(e.target.value)||0)}/></label>
      <label className="field-label"><span className="flex items-center gap-2"><IndianRupee className="size-4 text-primary"/>Current monthly EMIs</span><Input type="number" min={0} value={currentEmi} onChange={e=>setCurrentEmi(Number(e.target.value)||0)}/></label>
      <label className="field-label"><span className="flex items-center gap-2"><UserRound className="size-4 text-primary"/>Age</span><Input type="number" min={21} max={65} value={age} onChange={e=>setAge(Number(e.target.value)||21)}/></label>
      <label className="field-label"><span className="flex items-center gap-2"><BriefcaseBusiness className="size-4 text-primary"/>Employment</span><select value={employment} onChange={e=>setEmployment(e.target.value)} className="h-[52px] w-full rounded-[14px] border border-input bg-background px-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option>Salaried</option><option>Self-employed</option></select></label>
    </div>
    <div className="calculator-result"><div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><CircleGauge className="size-4"/>Indicative borrowing range</div><p className="mt-3 text-sm text-muted-foreground">Estimated eligible amount</p><p className="font-numbers mt-2 text-4xl font-bold text-primary" aria-live="polite">{money(result)}</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-background" role="progressbar" aria-label="Eligibility estimate" aria-valuemin={0} aria-valuemax={100} aria-valuenow={ratio}><div className="h-full rounded-full bg-primary transition-[width]" style={{width:`${ratio}%`}}/></div><div className="my-6 h-px bg-border"/><p className="text-sm text-muted-foreground">Suggested starting point</p><p className="mt-1 font-semibold">{suggested}</p><p className="mt-4 text-xs leading-5 text-muted-foreground">This is an indicative estimate, not an approval or lending offer. Age ({age}) and {employment.toLowerCase()} documentation may affect the final assessment.</p><Button asChild className="calculator-cta gold-hover"><a target="_blank" rel="noreferrer" href={whatsappUrl(`My estimated eligibility is ${money(result)}. I am ${age}, ${employment.toLowerCase()}, with monthly income ${money(salary)}. Please guide me.`)}>Check eligibility</a></Button></div>
  </div>
}
