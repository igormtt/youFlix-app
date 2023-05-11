import { useEffect, useState } from "react";
import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList/VideoList";
import Loader from "../Loader/Loader";

// Filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}

// eslint-disable-next-line react/prop-types
export default function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("");
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 750);
  }, []);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
     { 
        loading ? <Loader /> :
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem vídeos sobre "${searchText}"`}
        />
      }
    </section>
  );
}
