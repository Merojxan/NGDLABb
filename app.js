const ourText = document.getElementById('our-store__text')
const changeText = [
    'Welcome to our platform, where we use advanced technologies and artificial intelligence to predict and monitor outbreaks of viral diseases.',
    'Our experts have researched virus data and epidemiological indicators to develop an artificial intelligence model capable of predicting the likelihood of occurrence and spread of viral diseases in specific regions.',
    'Our artificial intelligence model is based on the study of historical data and training on machine learning algorithms, enabling us to create more accurate and reliable predictions.',
    'The results of our model will be presented in a user-friendly and understandable interface, which allows for the visualization of predicted probabilities of viral disease outbreaks. This enables scientists, healthcare workers, and government officials to make informed decisions regarding prevention and control of epidemic situations.',
    'We provide the opportunity to receive regular updates and notifications about the situation in your region and offer necessary recommendations and strategies to combat viral diseases based on the data obtained from our artificial intelligence model.',
    'We take pride in our platform`s ability to provide important precautionary measures and facilitate a proactive approach to fighting viral diseases. Through modern artificial intelligence methods and extensive data analysis, we strive to make the world a safer and more protected place from epidemics.'
]

let n = 3

const textChenger = () =>{
    ourText.textContent = changeText[n]
    n++;
    if(n>=6){
        n = 0
    }
}

setInterval(()=>{
    textChenger()
}, 7000)

