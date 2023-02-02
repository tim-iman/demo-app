import { useState, useEffect } from "react";
import "./App.css";
import { getImages } from "./axiosFetch";

// getImages().then((imageUrls) => console.log(imageUrls));

// if you want to use Axios, you need to install it

// [0,1,2,3,4] // [3, 1, 2, 3, 4]

// pure function, testable
const btnStyles = {"backgroundColor":"orange","color":'white','width':"200px"}
function shuffle(ar) {
  for (let i = 0; i < ar.length; i++) {
    const temp = ar[i];
    const randomInd = Math.floor(Math.random() * ar.length);
    ar[i] = ar[randomInd];
    ar[randomInd] = temp;
  }
}

function App() {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);//
  const [lastOpenPair, setLastOpenPair] = useState([]);// here the index 1
  const [nowtAllowToPlay,setNotAllowToPlay] = useState(false)
  const [reset,setReset] = useState(false)

  // const [counter, setCounter] = useState(0);
  // whenever your state changes it causes rerender
  // getImages().then(imageUrls => setImages(imageUrls));

  useEffect(() => {
    getImages().then((imageUrls) => {
      const duplicateImages = imageUrls.concat(imageUrls);
      shuffle(duplicateImages);
      setVisibleImages(duplicateImages.map(() => false));
      setImages(duplicateImages);
    });
 },[reset]);

 
  const clickHandler = (imageUrl, ind) => {
    if(nowtAllowToPlay){
      return
    }
    if (lastOpenPair.length < 1) {
      setLastOpenPair([{ imageUrl, ind }]);
      visibleImages[ind] = true;
      setVisibleImages(visibleImages);
    } else {
      if(lastOpenPair[0].ind=== ind){
        return
      }
      const matched = imageUrl === lastOpenPair[0].imageUrl;
      if (!matched) {
        visibleImages[ind] = true;
        visibleImages[lastOpenPair[0].ind] = true;
        setNotAllowToPlay(true)
        setTimeout(()=>{ 
          const newImages = [...visibleImages]
          newImages[ind] = false;
          newImages[lastOpenPair[0].ind] = false;
          setVisibleImages(newImages)
          setNotAllowToPlay(false)
        },1000)
      } else {
        visibleImages[ind] = true;
        setVisibleImages(visibleImages);
      }
      setLastOpenPair([]);
    }
  };

  return (
    <div className="App">
      <div className="imgContainer">
        {images.map((image, ind) => {
          return (
            <img
              onClick={() => clickHandler(image, ind)}
              key={ind}
              src={image}
              alt="title"
              className={visibleImages[ind] === false ? "hidden" : ""}
            />
          );
        })}

        {/* <pre>{JSON.stringify(visibleImages)}</pre> */}
      </div>
      <button style={btnStyles} onClick= {()=>{setReset(!reset)}}>Reset</button>
    </div>
  );
}

export default App;