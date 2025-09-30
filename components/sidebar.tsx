// components/Sidebar.tsx
"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { apiRoutes } from "@/routes";
import { Home } from "lucide-react";

const routeIcons: Record<string, React.JSX.Element> = {
    "/": <Home size={14} />,
};

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-[40px] w-full bg-gray-800 text-white items-center px-2 space-x-1 overflow-x-auto">
      {apiRoutes.map((route) => {
        const isActive = pathname === route.path;

        return (
          <button
            key={route.path}
            onClick={() => {
                if (!isActive) router.push(route.path); 
                }}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-sm transition-colors text-white ${
              isActive
                ? "bg-orange-600 text-white font-semibold cursor-default"
                : "bg-gray-700 cursor-pointer hover:bg-orange-400 text-gray-300"
            }`}
          >
            {routeIcons[route.path]}
            {route.name}
          </button>
        );
      })}
    </div>
  );
}
