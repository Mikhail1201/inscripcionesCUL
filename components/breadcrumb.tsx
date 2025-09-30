// components/Breadcrumb.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { apiRoutes } from "@/routes";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const getExtendedName = (href: string, segment: string) => {
    const route = apiRoutes.find((r) => r.path === href);
    return route?.extended || segment.replace(/-/g, " ");
  };

  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-600 px-2 py-1 h-[38px] bg-white border-b border-gray-300">
      <Link href="/" className="hover:underline">
        Inicio
      </Link>
      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        return (
          <div key={href} className="flex items-center">
            <span className="mx-1">{">"}</span>
            <Link href={href} className="hover:underline capitalize">
              {getExtendedName(href, segment)}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
