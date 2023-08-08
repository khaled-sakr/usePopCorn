import { useEffect, useState } from "react";
export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setErorr] = useState("");

  const KEY = "4ffc2baf";

  useEffect(
    function () {
      //   callBack?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setErorr("");
          const res = await fetch(
            `https://www.omdbapi.com/?i=${KEY}&apikey=4ffc2baf&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }
          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("Movie not found");
          }

          setMovies(data.Search);
          setErorr("");
        } catch (err) {
          console.error(err);
          if (err.name !== "AbortError") {
            setErorr(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        setErorr("haa what is your haram order");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
