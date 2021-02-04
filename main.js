// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").hidden = true

const activatedHeart = document.createElement("class", "activated-heart")


const likeArea = document.querySelectorAll(".like")
likeArea.forEach(like => heartEvent(like))

function heartEvent(like) {
  let heart = like.querySelector(".like-glyph")
  // console.log(heart.innerText)
  heart.addEventListener('click', event => {
    mimicServerCall("urlHere")
    .then(changeHeart(event))
  })
}

function changeHeart(heart) {
  if (heart.target.innerText === FULL_HEART) {
    heart.target.innerText = EMPTY_HEART
    heart.target.removeChild(activatedHeart)
  } else {
    heart.target.innerText = FULL_HEART
    heart.target.append(activatedHeart)
  }

}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
