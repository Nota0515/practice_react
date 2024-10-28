// Model.jsx
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = ({ mouse }) => {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, '/path/to/your/model.glb'); // Update the path to your model

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.lookAt(mouse.x, mouse.y, 0); // Set the model to look at the mouse
    }
  }, [mouse]);

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.5} // Adjust the scale as needed
    />
  );
};

export default Model;
