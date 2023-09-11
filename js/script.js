const containerBox = document.querySelector('.boxes');

for(let i = 0; i < 100; i++){
  // ADD-BOX
  const box = document.createElement('div');
  box.classList.add('box');
  
  box.append(i); 
  containerBox.append(box);
}
