const inputCity=document.querySelector('.input-city');
const searchBtn=document.querySelector('.s-button');

searchBtn.addEventListener('click', () => {
  if(inputCity.value.trim()!= ' ' ){
    updateWeatherInfo()
      console.log(inputCity.value)
      inputCity.value=''
      inputCity.blur()
  }
});

inputCity.addEventListener('keydown', (event)=>{
  if(event.key == 'Enter' && inputCity.value.trim()!=''
){
  updateWeatherInfo()
  console.log(inputCity.value)
  inputCity.value=''
  inputCity.blur()

}

});

function updateWeatherInfo() {
  
}