import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "Harry Potter and the Philosopher's Stone",
      Year: "2001",
      Image: "https://static.wikia.nocookie.net/emmapedia/images/5/5d/Hp1.jpg",
      Genre: {
        Name: "Fantasy",
        Description: "Fantasy is a genre that features magical and supernatural elements that do not exist in the real world. (Source: bookriot.com)"
      },
      Description: "An 11-year-old orphan living with his unwelcoming aunt, uncle, and cousin, who learns of his own fame as a wizard known to have survived his parents' murder at the hands of the dark wizard Lord Voldemort as an infant when he is accepted to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort. (Source: Wikipedia)",
      Directors: {
        Name: "Chris Columbus",
        Birthyear: "1958",
        Deathyear: "-",
        Bio: "Chris Joseph Columbus is an American filmmaker. Born in Spangler, Pennsylvania, Columbus studied film at Tisch School of the Arts where he developed an interest in filmmaking. (Source: Wikipedia)"
      }
    },
    {
      id: 2,
      Title: "Home Alone",
      Image: "https://i5.walmartimages.com/seo/Home-Alone-DVD-Digital-Code_6c929c03-8eea-4666-a92b-adae4fe50853.cdd41e01d16b169281f6b586616950fc.jpeg",
      Year: "1990",
      Genre: {
        Name: "Comedy",
        Description: "Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter. (Source: Wikipedia)"
      },
      Description: "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas eve. (Source: imdb.com)",
      Directors: {
        Name: "Chris Columbus",
        Birthyear: "1958",
        Deathyear: "-",
        Bio: "Chris Joseph Columbus is an American filmmaker. Born in Spangler, Pennsylvania, Columbus studied film at Tisch School of the Arts where he developed an interest in filmmaking. (Source: Wikipedia)"
      }
    },
    {
      id: 3,
      Title: "Maleficent",
      Image: "https://m.media-amazon.com/images/I/51WKwosSihL._SX300_SY300_QL70_FMwebp_.jpg",
      Year: "2014",
      Genre: {
        Name: "Fantasy",
        Description: "Fantasy is a genre that features magical and supernatural elements that do not exist in the real world. (Source: bookriot.com)"
      },
      Description: "Maleficent is a kind-hearted fairy, who is deceived by the love of her life, Stefan. Soon, she places a curse on his daughter, Aurora, in order to exact revenge. (Source: Wikipedia)",
      Directors: {
        Name: "Robert Stromberg",
        Birthyear: "1965",
        Deathyear: "-",
        Bio: "Robert Stromberg is an American special effects artist, designer and filmmaker. Stromberg's credits include films such as James Cameron's Avatar, Tim Burton's Alice in Wonderland, and Sam Raimi's Oz the Great and Powerful. (Source: Wikipedia)"
      },
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          alert("Nice!");
        }}
      >
        Click me!
      </button>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(image) => setSelectedMovie(movie)}
        />
      ))}
    </div>
  );
};
