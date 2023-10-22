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
    characterCount.textContent = `${280 - lengthOfString}`;
    characterCount.classList.add("text-red-400");
    console.log("Your message is too long");
  } else {
    characterCount.classList.remove("text-red-400");
    button.disabled = false;
  }
});

button.addEventListener("click", async () => {
  try {
    const postObject = await fetchTweet(textInput.value);
    textInput.value = "";
    characterCount.textContent = `0`;
    button.disabled = true;

    if (postObject) {
      const divElement = document.createElement("div");
      divElement.classList.add(
        "response",
        "bg-white",
        "text-black",
        "border",
        "border-solid",
        "border-[#ddd]",
        "p-3",
        "m-3"
      );
      divElement.innerHTML = `<p>Tweet Submitted Successfully, Tweetid = ${postObject.id}</p>`;
      const main = document.querySelector("main");
      main.appendChild(divElement);
      setTimeout(() => {
        main.removeChild(divElement);
      }, 3000);
    } else {
      console.log("Successful response with no postObject");
    }
  } catch (error) {
    console.error("Error occurred while posting the tweet:", error);
  }
});
