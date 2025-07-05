interface ModalProps {
    content: { title: string; imgSrc: string };
    onClose: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-3xl w-full relative">
          <h2 className="text-3xl mb-4">{content.title}</h2>
          <img src={content.imgSrc} alt={content.title} className="w-full mb-4 rounded-lg" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum urna quis magna...</p>
          <button className="absolute top-4 right-4 text-black" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  