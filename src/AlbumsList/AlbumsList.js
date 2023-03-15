import React, { useState, useEffect } from "react";

const urlAlbums = "https://jsonplaceholder.typicode.com/albums/";

export function AlbumsList() {
  const [albumList, setAlbumList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlbums, setShowAlbums] = useState(false);

  const fetchAlbums = async () => {
    setIsLoading(true);
    const response = await fetch(urlAlbums);
    const data = await response.json();
    setAlbumList(data);
    setIsLoading(false);
  };

  const handleShowAlbums = () => {
    setShowAlbums(true);
  };
  const hideShowAlbums = () => {
    setShowAlbums(false);
  };

  useEffect(() => {
    if (showAlbums) {
      fetchAlbums();
    }
    return () => {
      setAlbumList([]);
    };
  }, [showAlbums]);
  return (
    <div>
      <button className="btn" onClick={handleShowAlbums}>
        Показати усі альбоми
      </button>
      <button className="btn" onClick={hideShowAlbums}>
        Сховати усі альбоми
      </button>
      {!showAlbums && <p>Натисніть кнопку, щоб показати список альбомів.</p>}
      {showAlbums && !isLoading && (
        <div>
          {albumList.map((album) => (
            <div key={album.id}>
              <h2>Album: {album.id}</h2>
              <h3>Title: {album.title}</h3>
            </div>
          ))}
        </div>
      )}
      {isLoading && <p>LOADING DATA ...</p>}
    </div>
  );
}
export default AlbumsList;
