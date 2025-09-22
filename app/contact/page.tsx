import dynamic from "next/dynamic";
const ContactProject = dynamic(() => import("./ContactProject"), { ssr: false });

export default function Page() {
  return <ContactProject />;
}
