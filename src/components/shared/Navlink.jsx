"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navlink({ href, route }) {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={href}
        className={`text-[16px] font-bold hover:text-indigo-600 ${href == pathName ? "text-indigo-500 underline" : ""}`}
      >
        {route}
      </Link>
    </>
  );
}

export default Navlink;
