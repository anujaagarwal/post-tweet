import { fetchTweet } from "./fetchTweet.js";
const button = document.querySelector("button");
const textInput = document.querySelector("input");
const characterCount = document.querySelector("#character-count");

textInput.addEventListener("input", function () {
  const inputValue = textInput.value;
  let lengthOfString = inputValue.length;
  characterCount.textContent = lengthOfString;
  if (lengthOfString === 0) {
    console.log("Please enter a valid string");
  } else if (lengthOfString > 280) {
    characterCount.textContent = `${280 - text.length}`;
    characterCount.classList.add("text-red-400");
    console.log("Your message is too long");
  } else {
    characterCount.classList.remove("text-red-400");
    button.disabled = false;
  }
});

button.addEventListener("click", async () => {
  try {
    await fetchTweet(textInput.value);
    textInput.value = "";
    characterCount.textContent = `0`;
    button.disabled = true;
  } catch (error) {
    console.error("Error occurred while posting the tweet:", error);
  }

  //   if (postObject) {
  //     (postObject.username = "anujagrazzel"),
  //       (postObject.commentCount = "0"),
  //       (postObject.groupCount = "0"),
  //       (postObject.heartCount = "0"),
  //       (postObject.profilePicture = "public/images/User avatar5.png"),
  //       (postObject.frameCount = "0"),
  //       (postObject.vectorCount = "0");
  //     const component = createTweet(postObject);
  //     dummyTweet.unshift(postObject);
  //     document.getElementById("tweets").appendChild(component);
  //   }
});
