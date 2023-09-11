const containerBox = document.querySelector('.boxes');

for(let i = 1; i <= 100; i++){
  // ADD-BOX
  const box = document.createElement('div');
  box.classList.add('box');
  
  box.append(i); 
  containerBox.append(box);

  if (!(i % 3)){
    box.classList.add('fizz')
  } else if (!(i % 5)){
    box.classList.add('buzz')
  }
 if(!(i % 3) && !(i % 5)){
  box.classList.add('fizz-buzz')
}
}
