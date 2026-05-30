import Search from "@/components/shared/Search";
import TileCard from "@/components/shared/TileCard";
import React from "react";

async function AllTilesPage({ searchParams }) {
  const params = await searchParams;
  const res = await fetch(
    "https://namprokash.github.io/assingment-08-data/data.json",
  );
  const { tiles } = await res.json();
  let searchTile;
  let getlen = [];

  if (params.search) {
    const filtered = tiles.filter((tile) =>
      tile.title.toLowerCase().includes(params.search.toLowerCase().trim()),
    );
    searchTile = filtered;

    getlen = filtered;
  }

  return (
    <div className="container mx-auto">
      <Search />
      {/* -------------------- */}

      {params.search ? (
        <div>
          {getlen.length > 0 ? (
            <>
              <p className="mt-10 font-medium px-5">
                <span className="text-[#0E6F75] font-semibold">
                  {getlen.length} Tiles
                </span>{" "}
                Available{" "}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                {searchTile.map((d, i) => (
                  <TileCard d={d} key={i} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center container mx-auto h-[70vh]">
              <p className="text-center font-extrabold text-5xl w-full text-gray-500">
                No Tile Found
              </p>
            </div>
          )}
        </div>
      ) : (
        <>
          <p className="mt-10 font-medium px-5">
            <span className="text-[#0E6F75] font-semibold">All Tiles</span>{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            {tiles.map((d, i) => (
              <TileCard d={d} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AllTilesPage;
