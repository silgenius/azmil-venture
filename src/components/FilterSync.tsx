import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function FilterSync({ setFilter }: { setFilter: (val: string) => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    setFilter(searchParams.get("category") || "all");
  }, [searchParams, setFilter]);

  return null;
}

export default FilterSync;
