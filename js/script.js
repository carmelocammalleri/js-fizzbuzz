const containerBox = document.querySelector('.boxes');

for(let i = 1; i <= 100; i++){
  // ADD-BOX
  const box = document.createElement('div');
  box.classList.add('box');
  
  containerBox.append(box);
  // divisibileper 3 e per 5
  if (i % 3 === 0 && i % 5 === 0){
    box.classList.add('fizz-buzz')
    box.append('Buzz-Fizz')
  // divisibile prima per 3 e poi per 5
  } else if (i % 3 === 0){
    box.classList.add('fizz')
    box.append('Fizz')
  } else if (i % 5 === 0){
    box.classList.add('buzz')
    box.append('Buzz')
  } else {
    box.append(i); 
  }
  }
