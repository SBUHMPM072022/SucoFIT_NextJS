"use client"; 

import { usePathname } from "next/navigation";
import Navbar from './Navbar';
import Topbar from './Topbar';

export default function Layoutbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/" || pathname === "/register";

  return (
    <div className={isAuthPage ? "": "flex"}>
      {!isAuthPage && (
        <>
          {/* Navbar on the side (left) */}
          <div className="sticky top-0">
            <Navbar />
          </div>
            <div className="absolute top-0 z-50 w-full">
                {/* <Topbar /> */}
            </div>
        </>
      )}

      {/* Page content */}
      <main className="p-4">
        {children}
      </main>
    </div>
  );
}
