import React from "react";
import { Link } from "react-router-dom";

import styles from "./PhotoList.module.css";

const PhotoList = () => {
  return (
    <div className={styles.photoListContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((photo) => (
        <Link to={`/photo/${photo}`} key={photo} className={styles.photoLink}>
          Photo {photo}
        </Link>
      ))}
    </div>
  );
};

export default PhotoList;
