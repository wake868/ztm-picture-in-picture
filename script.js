const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select a media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch errors here
    console.log("Whoops, error here:", error);
  }
}

// Request picture in a picture from the video element
async function requestPictureInPicture() {
  await videoElement.requestPictureInPicture();
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;

  // Start picture in picture
  requestPictureInPicture();

  // Reset the button
  button.disabled = false;
});

selectMediaStream();
