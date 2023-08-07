import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Layout from "../../components/Layout";
import CustomButton from "../../components/Button";
import "./home.css";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ModalLoading from "../../components/ModaLoading";

interface Movie {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genre_ids: [];
}

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState<Movie[]>([]);
  const [isHovered, setIsHovered] = useState(Array(data.length).fill(false));
  const [movieList, setMovieList] = useState("now_playing");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState<any[]>([]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5141EA",
        contrastText: "#fff",
      },
    },
  });

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg0MDIyMTUxNzJmZWE0Zjk2NTY2YWUwMTlmNmI1ZCIsInN1YiI6IjVkY2FlMmRjNDcwZWFkMDAxNTliNDJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gyQUaLyGm3nsagVVqkhs368oxNUNoQjpx4mGUoV_yos",
      },
    };

    try {
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setGenres(json.genres))
        .catch((err) => console.error("error:" + err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setLoading(true);

    const selectMovielist = () => {
      if (selectedButton === 1) {
        setMovieList("now_playing");
        setTitle("Now Playing");
      } else if (selectedButton === 2) {
        setMovieList("popular");
        setTitle("Popular");
      } else if (selectedButton === 3) {
        setMovieList("top_rated");
        setTitle("Top rated");
      } else if (selectedButton === 4) {
        setMovieList("upcoming");
        setTitle("Upcoming");
      }
    };
    selectMovielist();

    const url = `https://api.themoviedb.org/3/movie/${movieList}?language=es-ES&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg0MDIyMTUxNzJmZWE0Zjk2NTY2YWUwMTlmNmI1ZCIsInN1YiI6IjVkY2FlMmRjNDcwZWFkMDAxNTliNDJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gyQUaLyGm3nsagVVqkhs368oxNUNoQjpx4mGUoV_yos",
      },
    };
    try {
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          setData(json.results);
          setTotalPages(json.total_pages);
        })
        .catch((err) => console.error("error:" + err))
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [movieList, selectedButton, page]);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    console.log(e);
    setPage(value);
  };

  const handleMouseEnter = (index: number) => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = true;
    setIsHovered(updatedHovered);
  };

  const handleMouseLeave = (index: number) => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = false;
    setIsHovered(updatedHovered);
  };

  // console.log(data);
  console.log(genres);

  return (
    <Layout>
      <>
        <ModalLoading loading={loading} />
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={3}>
            <CustomButton
              label="Now Playing"
              isSelected={selectedButton === 1}
              onClick={() => setSelectedButton(1)}
            />
          </Grid>
          <Grid item xs={3}>
            <CustomButton
              label="Popular"
              isSelected={selectedButton === 2}
              onClick={() => setSelectedButton(2)}
            />
          </Grid>
          <Grid item xs={3}>
            <CustomButton
              label="Top rated"
              isSelected={selectedButton === 3}
              onClick={() => setSelectedButton(3)}
            />
          </Grid>
          <Grid item xs={3}>
            <CustomButton
              label="Upcoming"
              isSelected={selectedButton === 4}
              onClick={() => setSelectedButton(4)}
            />
          </Grid>
        </Grid>
        <div className="textHome">
          <Typography variant="h4" color={"black"}>
            {title}
          </Typography>
          <Typography variant="subtitle1" color={"black"}>
            Texto introductorio
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          mt={2}
          paddingBottom={4}
          className="containerImages"
        >
          {data.map((item, index) => {
            return (
              <Grid item key={index} xs={6} sm={6} md={4} lg={2.4}>
                <div className="subContainerImg">
                  <div
                    className="imageOverlay"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      className="images"
                      alt=""
                    />

                    {isHovered[index] && (
                      <div className="hovered">
                        <label className="movieTitle">{item.title}</label>
                        <label className="movieData">
                          {item.release_date.split("-")[0]} .
                          {item.genre_ids.map((elem, j) => {
                            for (let i = 0; i < genres.length; i++) {
                              if (genres[i].id === elem) {
                                return <label key={j}>{genres[i].name}</label>;
                              }
                            }
                          })}
                        </label>
                        <p className="sinopsis">
                          {item.overview.slice(0, 150)}...
                        </p>
                        <Rating
                          className="rating"
                          name="read-only"
                          value={item.vote_average / 2}
                          readOnly
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <div className="containerPagination">
          <ThemeProvider theme={theme}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </ThemeProvider>
        </div>
      </>
    </Layout>
  );
};

export default Home;
