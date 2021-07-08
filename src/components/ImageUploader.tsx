import * as React from "react";
import { useState, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { storage } from "../firebase";

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [firebaseImages, setFirebaseImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setImages(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  React.useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    setFirebaseImages([]);
    storage
      .ref()
      .child("images")
      .listAll()
      .then((result) => {
        result.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
            setFirebaseImages((firebaseImages) => [...firebaseImages, url]);
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpload = () => {
    images.forEach((image) => {
      console.log("image: ", image);
      setImageLoading(true);
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setFirebaseImages([...firebaseImages, url]);
            });
        }
      );
    });

    setTimeout(() => {
      fetchImages();
      setImageLoading(false);
      setImages([]);
    }, 7000);
  };

  return (
    <div className="imageuploader">
      <Row className="d-flex justify-content-center row-spacing">
        <Col
          lg={12}
          md={12}
          sm={12}
          className="d-flex flex-column justify-content-center align-items-end"
        >
          <div
            {...getRootProps()}
            className="w-100 p-3 border border-primary rounded mb-3 mt-3"
          >
            <input {...getInputProps()} />

            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}

            <strong>Selected Images:</strong>
            {images.map(image => (
              <p>{image.name}</p>
            ))}

            {imageLoading ? <img src="/images/shubaduck.gif"></img> : <p></p>}
          </div>

          <progress value={progress} max="100" className="w-100 p-3" />
          {/* <input type="file" onChange={handleChange} /> */}
          <button className="btn btn-primary" onClick={handleUpload}>
            Upload
          </button>
        </Col>
      </Row>
      <h1>Firebase Images</h1>
      <Row className="d-flex justify-content-start align-items-center row-spacing">
        {firebaseImages.map((image) => (
          <Col
            lg={4}
            md={4}
            sm={4}
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <div className="hovereffect gallery-item" key={image}>
              <img src={image} alt="" />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ImageUploader;
