const containerBox = document.querySelector('.boxes');

for(let i = 1; i <= 100; i++){
  // ADD-BOX
  const box = document.createElement('div');
  box.classList.add('box');
  
  box.append(i); 
  containerBox.append(box);

  // divisibile prima per 3 e poi per 5
  if (!(i % 3)){
    box.classList.add('fizz')
    box.textContent = ('Fizz')
  } else if (!(i % 5)){
    box.classList.add('buzz')
    box.textContent = ('Buzz')
  }

// divisibileper 3 e per 5
  if(!(i % 3) && !(i % 5)){
   box.classList.add('fizz-buzz')
   box.textContent = ('Buzz-Fizz')
 }
}
