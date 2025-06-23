// import axios from 'axios';

// const mainParent = document.querySelector('#mainParent');

axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f0630cd7e73f0aefe4425826d32ecc8e')
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
});

