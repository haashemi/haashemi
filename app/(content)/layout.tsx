import BackButton from "@hx/components/BackButton";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackButton />

      {children}
    </>
  );
}
