import React, { useState } from "react";
import { Sparkles } from "../Components/Sparkels";
import Input9 from "../Components/Input";

function Tile() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setSearchResults([]); // Clear previous search results
    setTimeout(() => {
      setLoading(false); // End the loading after 2 seconds
      // Example: Uncomment to simulate results
      // setSearchResults([{ title: "Example Result", link: "example.com", description: "Description" }]);
    }, 2000);
  };

  return (
    <>
      <div className="min-h-screen w-screen overflow-hidden bg-black">
        <div className="relative h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#FFD700,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-700">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] text-white-600"></div>
          <Sparkles
            density={600}
            size={1.4}
            direction="top"
            className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>

        <div className="mx-auto -mt-52 w-screen max-w-2xl relative z-10">
          <div className="bg-white backdrop-blur-lg border border-gray-800 p-4 w-28 h-28 mx-auto grid place-content-center rounded-full">
            <img
              src="https://res.cloudinary.com/krishnamohan479/image/upload/v1742135473/3dicons-setting-front-premium_aeqmys.png"
              className={`transition-transform duration-500 ${loading ? "rotate-180" : ""}`} // Rotate on loading
              alt="loading-icon"
            />
          </div>
        </div>

        <article className="text-white pt-2 w-2/3 mx-auto block text-center z-10 relative w-full sm:w-3/4 lg:w-2/3 px-4 sm:px-0 pt-4">
          <div className="text-center text-3xl sm:text-5xl font-medium py-3">
            <h6 className="text-xl mb-4 italic">Search Gear</h6>
            <Input9
              setSearchResults={setSearchResults}
              setLoading={setLoading}
              onEnter={handleSearch} // Pass handleSearch to the input component
            />
          </div>

          {loading && (
            <div className="flex w-full flex-col gap-4">
              <div className="skeleton skeleton-animated h-4 w-28"></div>
              <div className="skeleton skeleton-animated h-4 w-full"></div>
              <div className="skeleton skeleton-animated h-4 w-full"></div>
              <div className="skeleton skeleton-animated h-4 w-28"></div>
              <div className="skeleton skeleton-animated h-4 w-full"></div>
              <div className="skeleton skeleton-animated h-4 w-full"></div>
              <div className="skeleton skeleton-animated h-4 w-28"></div>
              <div className="skeleton skeleton-animated h-4 w-full"></div>
              <div className="skeleton skeleton-animated h-4 w-full"></div>
              <div className="skeleton skeleton-animated h-4 w-28"></div>
              <div className="skeleton skeleton-animated h-4 w-full"></div>
              <div className="skeleton skeleton-animated h-4 w-full"></div>
            </div>
          )}

          {searchResults.length > 0 &&
            searchResults.map((item, index) => (
              <div key={index} className="flex w-full flex-col text-start p-3 mb-4 rounded-lg bg-black/30">
                <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent italic text-1xl w-fit mb-2">{item.title}</p>
                <a className="text-sm text-green-400 hover:text-green-900 transition-colors duration-300 mb-2 break-all" target="blank" href={item.link}>{item.link}</a>
                <p>{item.description}</p>
              </div>
            ))}
        </article>
      </div>
    </>
  );
}

export default Tile;
