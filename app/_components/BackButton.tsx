import Link from "next/link";

export default function BackButton() {
  return (
    <Link className="mb-5 text-xl hover:underline" href="/">
      ← Back
    </Link>
  );
}
