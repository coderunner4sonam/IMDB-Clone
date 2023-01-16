import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone'

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = () => {
    console.log("hello")
    const imageData = URL.createObjectURL(image);
    localStorage.setItem('image', imageData);
    console.log(imageData); //undefined 
    console.log('Image saved in local storage');

  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;