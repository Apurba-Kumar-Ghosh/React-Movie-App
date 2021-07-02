import MovieInfo from "../components/MovieInfo/index";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import {Link} from "react-router-dom"
import axios from "axios";
import MovieList from "../components/movieList/index";

export function MovieInfoContainer() {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [cast, setCast] = useState([])
    const [directorState,setDirector] = useState('')
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bcc9da9e9d42bc258ad578ae21559efd&language=en-US`)
            const anotherResponse = await axios.get(
              `https://api.themoviedb.org/3/movie/${id}/credits?api_key=bcc9da9e9d42bc258ad578ae21559efd&language=en-US`
            );
            setData(response.data)
            
                var castingOne = anotherResponse.data.cast[0].name;
                var castingTwo = anotherResponse.data.cast[1].name;
                var castingThree = anotherResponse.data.cast[2].name;
            
            
            const crew = anotherResponse.data.crew
            const director = crew.find(item => item.department === 'Directing')
            setDirector(director.name)
            setCast([castingOne, castingTwo, castingThree]);
            
        }
        getData()
    },[id])
  return (
    <>
      <MovieInfo>
        <MovieInfo.Group>
          <MovieInfo.Image>
            <img
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt="MoviePoster"
            />
          </MovieInfo.Image>
        </MovieInfo.Group>
        <MovieInfo.Group>
          <MovieInfo.Title>
            {data.original_title}({data.vote_average})
          </MovieInfo.Title>
          <MovieInfo.SmallGroup>
            <MovieInfo.Text>{data.release_date}</MovieInfo.Text>
            <MovieInfo.Text>{data.runtime} mins</MovieInfo.Text>
            <MovieInfo.Text>{directorState}</MovieInfo.Text>
          </MovieInfo.SmallGroup>
          <MovieInfo.SmallGroup>
            <MovieInfo.Text>
              Cast : {`${cast[0]}, ${cast[1]},${cast[2]}`}
            </MovieInfo.Text>
          </MovieInfo.SmallGroup>
          <MovieInfo.Description>
            <MovieInfo.Text>Movie Description : {data.overview}</MovieInfo.Text>
          </MovieInfo.Description>
        </MovieInfo.Group>
      </MovieInfo>
      <Link to="/search">
        <MovieList.Button>Search for Movies Instead</MovieList.Button>
      </Link>
      <Link to="/">
        <MovieList.Button>Home</MovieList.Button>
      </Link>
    </>
  );
}