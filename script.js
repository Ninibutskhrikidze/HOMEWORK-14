document.addEventListener('DOMContentLoaded', function () {
  const h1 = document.querySelector('h1');
  const p = document.querySelector('p');
  h1.textContent = 'ვენეცია';
  p.textContent = 'ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.';

  // p სტილები
  p.style.fontSize = '20px';
  p.style.color = '#ffff00';
  p.style.width = `700px`;

  //  წრეს ფერის შეცვლა
  const circle = document.querySelector('.circle');
  circle.addEventListener('mouseover', function () {
    circle.style.backgroundColor = 'red'; //mouseover
  });
  circle.addEventListener('mouseout', function () {
    circle.style.backgroundColor = 'yellow'; //mouseout
  });

  // ღილაკის ცვლილება / წაშლა / დაბრუნება
  const button = document.querySelector('.circle-btn');
  button.addEventListener('click', function () {
    if (circle.style.display === 'none') {
      circle.style.display = 'block';
      button.textContent = 'DELETE CIRCLE'; // ბრძანება წაშლა
    } else {
      circle.style.display = 'none';
      button.textContent = 'RETURN CIRCLE'; // ბრძანება დაბრუნება
    }
  });
});
