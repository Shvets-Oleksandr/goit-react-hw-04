import ImageCard from '../imageCard/ImageCard';

import css from './ImageGallery.module.css';

const ImageGallery = ({ articles }) => {
  return (
    <section className={css.gellaryContainer}>
      <ul className={css.list}>
        {Array.isArray(articles) &&
          articles.map(article => {
            return (
              <li key={article.id} className={css.listItem}>
                <ImageCard article={article} />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ImageGallery;
