// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById("modal")
modal.classList.add('hidden')
  clickListener();


function hideError() {
 Modal.classList.add('hidden')
};

function clickListener() {
  document.addEventListener('click', (event) => {
    if(event.target.classList[0] === "like-glyph") {
      mimicServerCall()
      .then((resp) => {
       const activated = event.target.classList.add("activated-heart");
       activated ? event.target.remove("activated-heart") :
       event.target.add("activated-heart")

      })
      .catch((Error) => {
     Modal.classList.remove('hidden')
      setTimeout(() => {
        hideError()
      }, 3000)   
      })

    }
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
