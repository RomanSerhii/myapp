import React, { useState, useEffect } from "react";

const urlPhotos = "https://jsonplaceholder.typicode.com/photos/";

export function PhotosList() {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const fetchPhotos = async () => {
    setIsLoading(true);
    const response = await fetch(urlPhotos);
    const data = await response.json();
    setPhotoList(data);
    setIsLoading(false);
  };
  const handleShowPhotos = () => {
    setShowPhotos(true);
  };
  const hideShowPhotos = () => {
    setShowPhotos(false);
  };
  useEffect(() => {
    if (showPhotos) {
      fetchPhotos();
    }
    return () => {
      setPhotoList([]);
    };
  }, [showPhotos]);
  return (
    <div>
      <button className="btn" onClick={handleShowPhotos}>
        Показати усі фото
      </button>
      <button className="btn" onClick={hideShowPhotos}>
        Сховати усі фото
      </button>
      {!showPhotos && <p>Натисніть кнопку, щоб показати список фото.</p>}
      {showPhotos && !isLoading && (
        <div>
          {photoList.map((photo) => (
            <div key={photo.id}>
              <h2>Photo: {photo.id}</h2>
              <h3>Title: {photo.title}</h3>
              {/* <h4>Url: {photo.url}</h4>
              <h5>thumbnailUrl: {photo.thumbnailUrl}</h5> */}
              <img src={photo.thumbnailUrl} alt="photo" />
            </div>
          ))}
        </div>
      )}
      {isLoading && <p>LOADING DATA ...</p>}
    </div>
  );
}

export default PhotosList;
