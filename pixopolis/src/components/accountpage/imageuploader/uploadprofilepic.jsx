import React, { useState } from 'react';

function Uploadprofilepic() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const openFilePicker = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  return (
    <>
      <div className='picout' onClick={openFilePicker}>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected Image" />
        ) : (
          <h1>Upload image</h1>
        )}
      </div>
      <input type="file" accept="image/*" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange}/>
    </>
  );
}

export default Uploadprofilepic;
