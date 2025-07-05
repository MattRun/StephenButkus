import { useState } from 'react';
import styles from './carouselsection.module.css';
import Card from './Card';
import Modal from './Modal';

const cards = [
  { title: 'Charging', imgSrc: '/charging.jpg' },
  { title: 'Liftgate', imgSrc: '/liftgate.jpg' },
  { title: 'Front Trunk', imgSrc: '/front_trunk.jpg' },
  { title: 'Mounts', imgSrc: '/mounts.jpg' },
  { title: 'More', imgSrc: '/more.jpg' },
];

const CarouselComponent = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const handleOpenModal = (index: number) => setActiveModal(index);
  const handleCloseModal = () => setActiveModal(null);

  return (
    <div className="relative overflow-hidden bg-blue-200 p-6">
      <h2 className="text-4xl font-bold mb-6">Explore Highlights</h2>

      <div className={`flex space-x-6 ${styles.carousel}`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imgSrc={card.imgSrc}
            onPlusClick={() => handleOpenModal(index)}
          />
        ))}
      </div>

      {/* Arrow Buttons for scrolling */}
      <div className="absolute left-0 bottom-6">
        <button className="px-3 py-2 bg-gray-300 rounded-full" onClick={() => { /* Add scroll left logic */ }}>←</button>
      </div>

      <div className="absolute right-0 bottom-6">
        <button className="px-3 py-2 bg-gray-300 rounded-full" onClick={() => { /* Add scroll right logic */ }}>→</button>
      </div>

      {activeModal !== null && (
        <Modal onClose={handleCloseModal} content={cards[activeModal]} />
      )}
    </div>
  );
};

export default CarouselComponent;
