export const fetchTweet = async (tweet) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const body = {
    post: {
      content: tweet,
    },
  };

  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  };

  try {
    const response = await fetch(
      "https://one00x-data-analysis.onrender.com/posts",
      options
    );
    console.log(body);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      console.log(data);
      const { id, userId, content, postedAt } = data;
      return { id, userId, content, postedAt };
    }
  } catch (error) {
    console.error("error occured", error);
  }
};
