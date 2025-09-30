// components/Header.tsx
import Sidebar from "./sidebar";
import Breadcrumb from "./breadcrumb";

export default function Header() {
  return (
    <header className="w-full shadow-md">
      {/* Sidebar superior */}
      <Sidebar />
      {/* Breadcrumb */}
      <Breadcrumb />
    </header>
  );
}
