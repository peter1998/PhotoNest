import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import styles from "./PhotoList.module.css";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await api.getAllPhotos();
        setPhotos(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load photos.");
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (isLoading) return <div>Loading photos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.photoListContainer}>
      {photos.map((photo) => (
        <Link
          to={`/photo/${photo.id}`}
          key={photo.id}
          className={styles.photoLink}
        >
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </Link>
      ))}
    </div>
  );
};

export default PhotoList;
