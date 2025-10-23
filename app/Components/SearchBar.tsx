"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, CheckCircle } from "lucide-react";
import "./SearchBar.css";

type Product = {
  id: number;
  name: string;
  image?: string;
  description?: string;
};



interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!input.trim()) {
      setSuggestions([]);
      setResults([]);
      return;
    }

    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const json: Product[] = await response.json();

      const filtered = json
        .filter((user) =>
          user.name.toLowerCase().includes(input.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(filtered);
      setResults(filtered);
    };

    const debounce = setTimeout(fetchData, 300);
    return () => clearTimeout(debounce);
  }, [input, setResults]);

  const handleSelect = (item: Product) => {
    setInput(item.name);
    setSelectedItem(item);
    setFocused(false);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Input */}
      <motion.div
        className={`flex items-center bg-white rounded-full shadow-md px-4 py-3 border transition-all duration-300 ${
          focused ? "border-gray-800 ring-1 ring-gray-400" : "border-gray-200"
        }`}
        animate={{ scale: focused ? 1.03 : 1 }}
      >
        <Search className="text-gray-500 w-5 h-5" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for products, collections..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          className="w-full text-sm bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400 px-2"
        />
        {input && (
          <button
            onClick={() => {
              setInput("");
              setSuggestions([]);
              setSelectedItem(null);
              inputRef.current?.focus();
            }}
          > 
            <X className="text-gray-400 w-5 h-5" />
          </button>
        )}
      </motion.div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {focused && suggestions.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full bg-white border border-gray-100 rounded-xl shadow-lg mt-2 overflow-hidden z-50"
          >
            {suggestions.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelect(item)}
                className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-all"
              >
                <img
                  src={
                    item.image ||
                    "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--LV-Classic-Product.png"
                  }
                  alt={item.name}
                  className="w-10 h-10 rounded-md object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {item.description || "Elegant & timeless craftsmanship"}
                  </p>
                </div>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* ✅ Selected Item */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mt-3 text-green-700 bg-green-50 px-4 py-2 rounded-full shadow-sm"
        >
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm font-medium">
            You have chosen:{" "}
            <span className="font-semibold">{selectedItem.name}</span>
          </span>
        </motion.div>
      )}
    </div>
  );
};
