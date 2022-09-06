console.log("content loaded");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */

fetch('https://icanhazdadjoke.com/slack').then(data => data.json()).then(jokeData => {
  const jokeTest = jokeData.attachments[0].text;
  const jokeElement = document.getElementById('jokeElement')

  jokeElement.innerHTML = jokeTest
})

import("./components/Demo");
