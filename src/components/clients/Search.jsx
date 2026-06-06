"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { LuTextSearch } from "react-icons/lu";
import { RiFilterLine, RiFilterOffLine } from "react-icons/ri";

function Search() {
  const param = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const [filterTex, setFilterTex] = useState(null);

  // Search setup ------------------------------
  const onChange = (e) => {
    const params = new URLSearchParams(param);
    if (e.target.value) {
      params.set("search", e.target.value);
      setFilterTex("Searched with Subject/Tutor Name");
    } else {
      params.delete("search");
      setFilterTex(null);
    }
    router.replace(`${pathName}?${params.toString()}`);
  };

  const filter = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(param);
    params.delete("search");

    params.set("from", e.target.from.value);
    params.set("to", e.target.to.value);
    setFilterTex("Filtered by Session Date");

    router.replace(`${pathName}?${params.toString()}`);
  };
  const clear = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(param);

    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("search").value = "";

    params.delete("search");
    params.delete("from");
    params.delete("to");

    router.replace(`${pathName}?${params.toString()}`);
    setFilterTex(null);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col gap-0 md:gap-3 mt-10">
        <div className=" flex items-center justify-center w-[90%] md:w-[40%] mx-auto py-3">
          <input
            onChange={onChange}
            type="search"
            id="search"
            placeholder={` 🔍  |  Type Tutor Name or Subject`}
            className="border border-indigo-600 px-4 py-2 w-full rounded-full bg-base-200"
          />{" "}
        </div>

        <form
          className=" flex flex-col sm:flex-row items-center justify-center py-3 w-[90%] md:w-[60%] mx-auto gap-0.5 sm:gap-2 md:gap-0.5"
          onSubmit={filter}
        >
          <label className=" sm:input label flex flex-row-reverse sm:flex-col w-full justify-between">
            <input
              type="date"
              className="input text-indigo-400 w-full"
              name="from"
              id="from"
              required={true}
            />
            <span className="w-10">From</span>
          </label>

          <label className="label sm:input flex flex-row-reverse sm:flex-col w-full">
            <input
              type="date"
              className="input text-indigo-400 w-full"
              name="to"
              id="to"
              required={true}
            />
            <span className="w-10">To</span>
          </label>

          <button
            type="submit"
            className="btn bg-indigo-600 text-white w-full sm:w-auto mt-2 sm:mt-0"
          >
            <RiFilterLine /> Filter
          </button>
        </form>
      </div>

      <div className="flex justify-between items-center mt-9 mb-6 w-[90%] sm:w-full mx-auto">
        <p className=" font-semibold text-xl">
          {!filterTex ? "All Tutors" : filterTex}
        </p>
        <button
          type="button" // Changed from 'clear' to 'button' to prevent accidental form submissions
          onClick={clear}
          className="btn btn-soft w-auto mt-2 px-9 sm:mt-0"
        >
          <RiFilterOffLine /> Clear Filter
        </button>
      </div>
    </>
  );
}

export default Search;
