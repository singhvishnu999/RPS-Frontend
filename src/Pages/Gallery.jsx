import React from "react";
import "./Gallery.css";
import owner1 from'../assets/Staffpic/Owner1.jpg'
import owner2 from '../assets/Staffpic/Owner2.jpg'
import owner3 from '../assets/Staffpic/Owner3.jpg'
import img1 from '../assets/Staffpic/img1.jpg'
import img2 from '../assets/Staffpic/img2.jpg'


const Gallery = () => {

  // Sample image data (replace with your images)
  const images = [
    { id: 1, src: owner1, alt: "School Event 1" },
    { id: 2, src: owner2, alt: "Classroom Activity" },
    { id: 3, src: owner3, alt: "Sports Day" },
    { id: 4, src: img1, alt: "Annual Day Celebration" },
    { id: 5, src: img2, alt: "Annual Day Celebration" },
    { id: 6, src: owner1, alt: "Cultural Event" },
    { id: 7, src: owner2, alt: "Library" },
    { id: 8, src: owner3, alt: "Annual Day Celebration" },
    { id: 9, src: img1, alt: "Annual Day Celebration" },
    { id: 10, src: img2, alt: "Annual Day Celebration" },
  ];

  return (
    <div className="gallery-page">
      <h1>Photo Gallery</h1>
      <p>Explore moments from our school events and activities.</p>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
