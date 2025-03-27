import Link from "next/link";

export default function Home() {
  return (
      <div>
        <ul className="list-disc ms-4 p-4">
          <li className="text-link">
            <Link href="docs/intro">معرفی</Link>
          </li>

          <li className="text-link">
            <Link href="docs/install">نصب</Link>
          </li>
        </ul>

        <ul className="list-disc ms-4 p-4 font-[family-name:var(--font-geist-sans)]">
          <li className="text-link">
            <Link href="components/button">Button</Link>
          </li>

          <li className="text-link">
            <Link href="components/typography">Typography</Link>
          </li>
        </ul>
      </div>
  );
}
