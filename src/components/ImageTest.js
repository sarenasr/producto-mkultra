import React from 'react';

// Simple test component to verify images load
const ImageTest = () => {
  const testImages = [
    "/images/Mkultra-lsd-doc.jpg",
    "/images/Allen_w_dulles.jpg",
    "/images/Sidney_Gottlieb_photo.jpg",
    "/images/Donald_Ewen_Cameron_canmedaj01237-0046-a.jpg",
    "/images/CIA_Original_Headquarters_Building.jpg",
    "/images/Allan_Memorial_Institute.jpg"
  ];

  return (
    <div style={{ padding: '2rem', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff' }}>Image Test Component</h1>
      {testImages.map((url, index) => (
        <div key={index} style={{ marginBottom: '2rem', border: '2px solid #c9a961', padding: '1rem' }}>
          <h3 style={{ color: '#c9a961' }}>Test Image {index + 1}</h3>
          <p style={{ color: '#999' }}>URL: {url}</p>
          <img 
            src={url}
            alt={`Test ${index}`}
            style={{ maxWidth: '400px', display: 'block', border: '1px solid #fff' }}
            onLoad={() => console.log(`✓ Image ${index + 1} loaded successfully`)}
            onError={(e) => {
              console.error(`✗ Image ${index + 1} failed to load:`, e);
              e.target.style.border = '3px solid red';
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTest;
