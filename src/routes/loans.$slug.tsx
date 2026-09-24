import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { services } from "@/content/site";
import { faqSchema, pageMeta } from "@/lib/seo";
export const Route=createFileRoute("/loans/$slug")({loader:({params})=>{const service=services.find(x=>x.slug===params.slug);if(!service)throw notFound();return service},head:({loaderData})=>loaderData?({meta:pageMeta(`${loaderData.title} Delhi NCR`,`${loaderData.description} Speak with FININSTA for guided options across Delhi NCR and India.`),scripts:[{type:"application/ld+json",children:JSON.stringify(faqSchema(loaderData.faqs))}]}):({meta:pageMeta("Loan service unavailable","The requested FININSTA loan service could not be found.")}),component:LoanPage});
function LoanPage(){return <ServicePage service={Route.useLoaderData()}/>}
