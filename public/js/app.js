console.log('Client app.js javascript file is loaded!');

// fetch('https://puzzle.mead.io/puzzle')
// .then((response) => {
//   response.json()
//   .then((data) => {
//     console.log(data);
//   });
// });

// sanple fetch
fetch('https://puzzle.mead.io/puzzle')
.then((response) => {
  // by adding return to response.json() you can avoid nested then methods as in above example
  return response.json(); 
})
.then((data) => {
  console.log(data);
});

// weather fetch
const fetchWeather = (url) => fetch(url)
.then(response => {
  return response.json();
})
.then(data => {
  if(data.error) {
    console.log(data.error);
  } else {
    console.log(data.location);
    console.log(data.msg);
  }
})

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;
  console.log(location);

  const url = `/weather?address=${location}`
  fetchWeather(url);
});