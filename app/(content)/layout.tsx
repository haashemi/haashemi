import BackButton from "@/components/BackButton";
import "remark-github-blockquote-alert/alert.css";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackButton />

      {children}
    </>
  );
}
