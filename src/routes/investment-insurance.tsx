import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { investmentService } from "@/content/site";
import { faqSchema,pageMeta } from "@/lib/seo";
export const Route=createFileRoute("/investment-insurance")({head:()=>({meta:pageMeta("Investment & Insurance Delhi NCR","Plan protection, health cover, disciplined savings and long-term investments with FININSTA across Delhi NCR and India."),scripts:[{type:"application/ld+json",children:JSON.stringify(faqSchema(investmentService.faqs))}]}),component:()=> <ServicePage service={investmentService}/>});
