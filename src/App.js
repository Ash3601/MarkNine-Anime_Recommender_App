import React from "react";
import "./styles.css";
import { useState } from "react";

const animeDB = {
  Shonen: [
    { name: "My Hero Academia", rating: "4/5" },
    { name: "Dragon Ball Z", rating: "3.5/5" },
  ],

  Shoujo: [
    {
      name: "Fruits Basket",
      rating: "5/5",
    },
    {
      name: "Nana",
      rating: "4.5/5",
    },
  ],
  Seinen: [
    {
      name: "Black Lagoon",
      rating: "3.5/5",
    },
    {
      name: "Ghost in the Shell",
      rating: "5/5",
    },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Shonen");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Anime </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite animes. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(animeDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {animeDB[selectedGenre].map((anime) => (
            <li
              key={anime.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {anime.name} </div>
              <div style={{ fontSize: "smaller" }}> {anime.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
