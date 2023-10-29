import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <h1>Budgetly</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/spending">Spending</Link>
      <Link href="/budgets">Budgets</Link>
    </nav>
  );
}
