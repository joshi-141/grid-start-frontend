"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

export default function GlobalLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When URL changes → show loader for short time
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400); // smooth transition

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <ClipLoader size={60} color="#16a34a" />
    </div>
  );
}
