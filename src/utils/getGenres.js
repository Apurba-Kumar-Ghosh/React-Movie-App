import axios from "axios";

export default async function getGenres() {
  const data = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=bcc9da9e9d42bc258ad578ae21559efd&language=en-US`
    )
    const response = await data.data.genres;

  return response;
}
