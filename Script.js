const inputCity=document.querySelector('.input-city');
const searchBtn=document.querySelector('.s-button');

searchBtn.addEventListener('click', () => {
  if(inputCity.value.trim()!= ' ' ){
      console.log(inputCity.value)
      inputCity.value=''
      inputCity.blur()
  }
});

inputCity.addEventListener('keydown', (event)=>{
  console.log(event)
});