import ReactModal from 'react-modal';
import { BiSolidLike } from 'react-icons/bi';

import css from './ImageModal.module.css';

ReactModal.setAppElement('#root');

const ImageModal = ({
  isOpen,
  onRequestClose,
  imageUrl,
  alt,
  likes,
  autor,
  autorImg,
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={css.modal}
    overlayClassName={css.overlay}
  >
    <div>
      <img
        src={imageUrl}
        alt={alt}
        className={css.image}
        width={1280}
        height={670}
      />
      <div className={css.ImageModalInfo}>
        <p>
          <BiSolidLike /> {likes}
        </p>
        <div className={css.autorInfo}>
          <p>Autor: {autor}</p>
          <img
            src={autorImg}
            alt="Autor profile foto"
            width={50}
            height={50}
          ></img>
        </div>
      </div>
    </div>
  </ReactModal>
);

export default ImageModal;
