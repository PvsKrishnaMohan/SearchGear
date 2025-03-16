import { useState } from "react";

const WikiSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    if (!searchInput.trim()) return;

    setLoading(true);
    setResults([]);

    try {
      const response = await fetch(`https://apis.ccbp.in/wiki-search?search=${searchInput}`);
      const data = await response.json();
      setResults(data.search_results || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchResults();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      <div className="w-full max-w-2xl">
        <img
          src="https://res.cloudinary.com/krishnamohan479/image/upload/v1634308241/PicsArt_10-15-02.08.45_xmjdht.jpg"
          alt="Logo"
          className="w-32 mx-auto mb-6"
        />

        <p className="text-xl font-semibold text-center bg-gradient-to-r from-red-500 via-yellow-300 to-red-500 bg-clip-text text-transparent mb-4">
          Welcome to my Search Engine
        </p>

        <input
          type="search"
          placeholder="Type a keyword and press Enter to search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 rounded-md text-black outline-none"
        />

        {loading && (
          <div className="flex justify-center my-6">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="mt-8 space-y-6">
          {results.map((result) => (
            <div key={result.link} className="p-4 border border-gray-600 rounded-lg">
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent hover:underline"
              >
                {result.title}
              </a>
              <br />

              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent hover:underline"
              >
                {result.link}
              </a>

              <p className="mt-2 text-sm bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WikiSearch;
