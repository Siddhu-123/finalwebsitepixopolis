import React, { useState } from 'react';

function Uploadback() {
  const [selectedImage1, setSelectedImage1] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage1(imageUrl);
    }
  };

  const openFilePicker = () => {
    const fileInput = document.getElementById('fileInput1');
    fileInput.click();
  };

  return (
    <>
      <div className="backout" onClick={openFilePicker}>
        {selectedImage1 ? (
          <img src={selectedImage1} alt="Selected Image" />
        ) : (
          <h1>Please upload a background image</h1>
        )}
      </div>
      <input type="file" accept="image/*" id="fileInput1" style={{ display: 'none' }} onChange={handleImageChange}/>
    </>
  );
}

export default Uploadback;
