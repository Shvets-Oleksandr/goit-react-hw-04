const ImageCard = ({ article }) => {
  return (
    <div>
      <img
        src={article.urls.small}
        alt={article.alt_description}
        width={346}
        height={240}
      />
    </div>
  );
};

export default ImageCard;
