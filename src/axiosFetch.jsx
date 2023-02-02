import axios from "axios"

const IMAGES_API = "https://api.unsplash.com/photos";
const API_KEY = "AQPBPszW5c_B6pt_a1mZGQd29IphrXAdziZP1Ylkt0s";
const NUMBERS_OF_IMAGES = 12
const twelveImagesUrl = `${IMAGES_API}/?client_id=${API_KEY}&per_page=${NUMBERS_OF_IMAGES}`


// GET - to READ data
export const getImages = async () =>
  axios.get(twelveImagesUrl).then(({data}) => {

    return data.map(img => img.urls.small)
    });

// Fetch example
export const fetchExample = async () =>
  fetch(twelveImagesUrl).then((response) =>
    response.json().then((data) => console.log("fetch", { data }))
  )(
    // using async await
    async () => {
      const response = await fetch(twelveImagesUrl);
      const data = await response.json();
      console.log("async fetch", { data });
    }
  )();
