// import React, { useState } from "react";

import { useState } from "react";

interface Feature {
    properties: {
      label: string;
    };
  }

const AddressInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      // Exemple avec l'API Adresse.data.gouv.fr
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
          query
        )}&limit=3`
      );
      const data = await response.json();

      if (data && data.features) {
        setSuggestions(data.features.map((feature: Feature) => feature.properties.label));
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des suggestions :", error);
      setSuggestions([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
    localStorage.setItem('selectedAddress', suggestion);
    window.location.reload();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        className="w-full p-2 border border-gray-400 rounded bg-black focus:outline-none focus:ring-2 focus:ring-[#3f995d]"
        placeholder="Saisissez une adresse"
        value={inputValue}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul className="border border-gray-300 rounded mt-1 bg-black shadow">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressInput;
