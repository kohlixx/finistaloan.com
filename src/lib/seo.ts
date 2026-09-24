export const siteName="FININSTA Financial Services";
export const siteDescription="Trusted loan, insurance and investment guidance across Delhi NCR and PAN India.";
export function pageMeta(title:string,description:string,type="website") { return [
  {title:`${title} | FININSTA`},
  {name:"description",content:description},
  {property:"og:title",content:`${title} | FININSTA`},
  {property:"og:description",content:description},
  {property:"og:type",content:type},
  {name:"twitter:card",content:"summary_large_image"},
  {name:"twitter:title",content:`${title} | FININSTA`},
  {name:"twitter:description",content:description},
]; }
export const organizationSchema={"@context":"https://schema.org","@type":["FinancialService","LocalBusiness"],name:siteName,description:siteDescription,telephone:"+91-7827881951",areaServed:["Delhi","Noida","Gurugram","Delhi NCR","India"],founder:{"@type":"Person",name:"Gaurav Kumar Chandna"}};
export const faqSchema=(items:{q:string;a:string}[])=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:items.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))});
