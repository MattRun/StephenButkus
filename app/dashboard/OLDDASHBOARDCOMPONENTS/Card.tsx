interface CardProps {
    title: string;
    imgSrc: string;
    onPlusClick: () => void;
  }
  
  const Card: React.FC<CardProps> = ({ title, imgSrc, onPlusClick }) => {
    return (
      <div className="relative w-64 h-96 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all duration-300">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">{title}</div>
        <button
          className="absolute top-4 right-4 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-600 transition-colors duration-200"
          onClick={onPlusClick}
        >
          +
        </button>
      </div>
    );
  };
  
  export default Card;
  