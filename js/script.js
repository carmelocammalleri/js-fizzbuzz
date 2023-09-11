const containerBox = document.querySelector('.boxes');

for(let i = 0; i < 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  box.append(i + 1);

  
  containerBox.append(box);
}
