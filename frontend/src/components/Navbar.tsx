import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-2">
      <Link href={"page1"}>Page1</Link>
      <Link href={"page2"}>Page2</Link>
    </nav>
  );
}
