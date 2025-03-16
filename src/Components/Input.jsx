"use client";
import { useState,useRef } from "react";
const Input9 = (props) => {
  const { setSearchResults, setLoading } = props;
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef(null);


  const fetchResults = async () => {
    if (!searchInput.trim()) return;
    setLoading(true);
    setSearchResults([]);

    try {
      const response = await fetch(
        `https://apis.ccbp.in/wiki-search?search=${searchInput}`
      );
      const data = await response.json();
      setSearchResults(data.search_results || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchResults();
      e.preventDefault();

      // Force blur using input reference
      if (inputRef.current) {
        inputRef.current.blur();
      }

      // Ensure blur on stubborn devices (delayed fallback)
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }, 200);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        id="pass"
        ref={inputRef}
        placeholder="Type Keyword & press enter"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-background w-full h-12 outline-none focus-within:border-yellow-300 rounded-md p-2 text-lg  border-2"
      />
    </div>
  );
};
export default Input9;
