const myImage = document.querySelector("img"); /* Store a reference to your <img>
                                                 element in myImage */

myImage.onclick = () => {  /* make its onclick event handler property equal to a function
                             with no name (an "anonymous" function) */
  
                             const mySrc = myImage.getAttribute("src"); /* retrieve the value of the image's src attribute */
  if (mySrc === "images/pexels-photo-2434049.jpeg") { /* check if the src value is equal to the 
                                                        path of the original image */

    myImage.setAttribute("src", "images/firefox2.png"); /* If it is, changes the src
                                                        value to the path of the second image */
  } else {
    myImage.setAttribute("src", "images/pexels-photo-2434049.jpeg"); /* If it isn't (meaning it must already have changed),
                                                                     the src value swaps back to the original image path, */
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  myButton.onclick = () => {
    setUserName();
  };