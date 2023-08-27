import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import FullsizeView from '../FullsizeView/FullsizeView.jsx';
import './GalleryView.css';

function GalleryView() {
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState([]);
  const FullsizeWrapperRef = useRef(null);

  function openFullsize(image) {
    setImageUrl(image.attributes.url);
    FullsizeWrapperRef.current.style.display = 'block';
  }

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('https://strapi-production-0a05.up.railway.app/api/galleries?populate=*');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const imageArray = data.data[0]?.attributes?.Images?.data || [];
        setImages(imageArray);
        console.log(imageArray); // Logging fetched images to the console
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  const imagesPerColumn = 3;

  // Create columns and rows
  const columns = [];
  for (let i = 0; i < imagesPerColumn; i++) {
    const columnImages = [];
    for (let j = i; j < images.length; j += imagesPerColumn) {
      columnImages.push(images[j]);
    }
    columns.push(columnImages);
  }

  return (
    <div className="gallery-flex">
      <div className="gallery-container">
        <Header title="Gallery" />
        <FullsizeView imageUrl={imageUrl} FullsizeWrapperRef={FullsizeWrapperRef} />
        <div className="gallery-content">
          {columns.map((columnImages, columnIndex) => (
            <div className="gallery-column" key={columnIndex}>
              {columnImages.map((image, index) => (
                <div className="gallery-item" key={index}>
                  <img
                    src={image.attributes.url}
                    alt={image.public_id}
                    onClick={() => openFullsize(image)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryView;
