// export const dummyTweet = [
//   {
//     id: 5080408347,
//     userId: 42,
//     profilePicture: "public/images/User avatar3.png",
//     username: "Saurav Agarwal",
//     postedAt: "10h",
//     content: "Don't wish for it, work for it.",
//     commentCount: "11",
//     groupCount: "278",
//     heartCount: "1,869",
//     frameCount: "99.5K",
//     vectorCount: "",
//   },
//   {
//     id: 5080408346,
//     userId: 43,
//     profilePicture: "public/images/User avatar4.png",
//     username: "Alice Johnson",
//     postedAt: "1d",
//     content: "Enjoying a beautiful day in the park. 🌞",
//     commentCount: "32",
//     groupCount: "512",
//     heartCount: "4,765",
//     frameCount: "77.3K",
//     vectorCount: "",
//   },
//   {
//     id: 5080408348,
//     userId: 44,
//     profilePicture: "public/images/User avatar5.png",
//     username: "Bob Smith",
//     postedAt: "2d",
//     content: "Coding is so much fun! 💻 #Programming",
//     commentCount: "15",
//     groupCount: "189",
//     heartCount: "1,242",
//     frameCount: "12.6K",
//     vectorCount: "",
//   },
// ];

// export function createTweet(tweetInfo) {
//   // Create the main container
//   const mainContainer = document.createElement("div");
//   mainContainer.classList.add(
//     "flex",
//     "w-90",
//     "py-2",
//     "px-4",
//     "items-start",
//     "gap-4",
//     "border-b",
//     "border-solid",
//     "border-neutral-700"
//   );

//   // Create profile picture
//   const profilePicture = document.createElement("img");
//   profilePicture.src = tweetInfo.profilePicture;
//   profilePicture.alt = "Profile Picture";

//   // Create the content container
//   const contentContainer = document.createElement("div");

//   // Create username and timestamp container
//   const usernameTimestampContainer = document.createElement("div");
//   usernameTimestampContainer.classList.add("flex", "gap-2", "items-center");

//   // Create username element
//   const username = document.createElement("h2");
//   username.classList.add("text-base", "font-medium", "text-neutral-50");
//   username.textContent = tweetInfo.username;

//   // Create timestamp element
//   const timestamp = document.createElement("p");
//   timestamp.classList.add("text-neutral-500");
//   timestamp.textContent = tweetInfo.timestamp;

//   usernameTimestampContainer.appendChild(username);
//   usernameTimestampContainer.appendChild(timestamp);

//   // Create tweet text element
//   const tweetText = document.createElement("p");
//   tweetText.classList.add(
//     "text-neutral-50",
//     "text-base",
//     "font-normal",
//     "leading-normal"
//   );
//   tweetText.textContent = tweetInfo.content;

//   // Create actions container
//   const actionsContainer = document.createElement("div");
//   actionsContainer.classList.add(
//     "flex",
//     "py-3",
//     "justify-between",
//     "items-center",
//     "self-stretch",
//     "mt-8"
//   );

//   // Create individual action elements
//   const createActionElement = (imgSrc, count) => {
//     const actionElement = document.createElement("div");
//     const actionIcon = document.createElement("img");
//     actionIcon.src = imgSrc;
//     const actionCount = document.createElement("p");
//     actionCount.classList.add("text-neutral-500");
//     actionCount.textContent = count;
//     actionElement.appendChild(actionIcon);
//     actionElement.appendChild(actionCount);
//     return actionElement;
//   };

//   // Create action elements
//   const commentAction = createActionElement(
//     "public/images/comment.svg",
//     tweetInfo.commentCount
//   );
//   const groupAction = createActionElement(
//     "public/images/Group 26840.png",
//     tweetInfo.groupCount
//   );
//   const heartAction = createActionElement(
//     "public/images/heart.svg",
//     tweetInfo.heartCount
//   );
//   const frameAction = createActionElement(
//     "public/images/Frame 27042.png",
//     tweetInfo.frameCount
//   );
//   const vectorAction = createActionElement(
//     "public/images/Vector.svg",
//     tweetInfo.vectorCount
//   );

//   // Append action elements to the actions container
//   actionsContainer.appendChild(commentAction);
//   actionsContainer.appendChild(groupAction);
//   actionsContainer.appendChild(heartAction);
//   actionsContainer.appendChild(frameAction);
//   actionsContainer.appendChild(vectorAction);

//   // Assemble elements
//   contentContainer.appendChild(usernameTimestampContainer);
//   contentContainer.appendChild(tweetText);
//   contentContainer.appendChild(actionsContainer);

//   mainContainer.appendChild(profilePicture);
//   mainContainer.appendChild(contentContainer);

//   return mainContainer;
// }

// dummyTweets.forEach((tweetInfo) => {
//   const tweetComponent = createTweet(tweetInfo);
//   document.querySelector("main").appendChild(tweetComponent);
// });
