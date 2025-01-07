let btn =document.querySelector("#btn")
let content=document.querySelector("#content")
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
let recognition = new speechRecognition();

recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex;
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript
    console.log(event)
}
btn.addEventListener("click",()=>{
    recognition.start()
})