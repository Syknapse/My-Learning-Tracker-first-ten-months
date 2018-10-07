// The callback method
/* let a = new XMLHttpRequest();

a.addEventListener('readystatechange', function(r) {
  if (r.target.status === 200) {
    console.log(r.target.response);
  }
});

a.open('GET', 'https://api.github.com/users/syknapse', true);
a.send(); */

//The promises method
fetch('https://api.github.com/users/syknapse')
  .then(function(r) {
    console.log(r.status);
    return r.json();
  })
  .then(function(j) {
    console.log(j);
  })