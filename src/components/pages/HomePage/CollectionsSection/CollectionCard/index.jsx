import { Button, MediaContainer } from 'components/common';

import styles from './index.module.scss';

// eslint-disable-next-line react/prop-types
const CollectionCard = ({ id, image, title, text, url }) => {

  console.log("===========================================================================================================================")
  console.log("id::  ", id);
  console.log("image::  ", image);
  console.log("title::  ", title);
  console.log("text::  ", text);
  console.log("url::  ", url);


  const isAlt = title === 'hoodies';

  return (
    <div className={styles.card}>
      <div
        className={
          isAlt
            ? `${styles.content_wrapper} ${styles.content_wrapper_alt}`
            : styles.content_wrapper
        }
      >
        <p className={styles.content_title}>{title}</p>
        <p className={styles.content_subtitle}>{text}</p>
        <Button className={styles.button} to={url}>
          Shop {title}
        </Button>
      </div>
      {/* <img className={styles.image} src={image} alt="" /> */}
      <MediaContainer
        containerClassName={styles.image_container}
        fillClassName={isAlt ? styles.image_fill_alt : styles.image_fill}
        mediaClassName={styles.image}
        image={image}
        alt="asdf"
      />
    </div>
  );
};

export default CollectionCard;
