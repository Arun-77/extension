console.log("background loaded");

// const getQuotes = async () => {
//    try {
//       const res = await fetch('https://icanhazdadjoke.com/slack');
//       const jokeData = await res.json()

//       const jokeTest = jokeData.attachments[0].text;
//   const jokeElement = document.getElementById('jokeElement')

//   jokeElement.innerHTML = jokeTest

//    } catch (error) {
//       console.log("Error occured while fetching")
//    }
// }

// document.addEventListener('load', () => {
//   getQuotes()
// })

// 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'

// let color = "#3aa757";

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log("Default background color set to %cgreen", `color: ${color}`);
// });

// 'https://api.chucknorris.io/jokes/random'

// fetch('https://icanhazdadjoke.com/slack').then(data => data.json()).then(jokeData => {
//   const jokeTest = jokeData.attachments[0].text;
//   const jokeElement = document.getElementById('jokeElement')

//   jokeElement.innerHTML = jokeTest
// })