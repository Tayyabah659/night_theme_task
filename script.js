function changeColor() {
  var body = document.body;
  var button = document.getElementById('button');

  if (body.style.backgroundColor === 'white' || body.style.backgroundColor === '') {
    body.style.backgroundColor = 'black';
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    button.textContent = 'day  theme'
  } else {
    body.style.backgroundColor = 'white';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.textContent = 'night theme';
    

  }
}