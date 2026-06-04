"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Search() {
  const param = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const onChange = (e) => {
    const params = new URLSearchParams(param);
    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    router.replace(`${pathName}?${params.toString()}`);
  };
  return (
    <>
      <div className=" flex items-center justify-center py-3">
        <input
          onChange={onChange}
          type="search"
          placeholder="Search by Tutor Name or Subject"
          className="border border-indigo-600 p-1.5 w-[80%] rounded-bl-xl rounded-tl-xl"
        />{" "}
        <button className="btn bg-indigo-600 text-white rounded-br-xl rounded-tr-xl">
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
