let counter = 0;


let array = ['a', 'i', 'u', 'o', 'e']
let index = Math.floor(Math.random() * array.length)
let answer = array[index]

function letter() {
  index = Math.floor(Math.random() * array.length)
  document.querySelector('h1')
  .innerHTML=wanakana.toHiragana(answer);
  document.querySelector('button').innerHTML="next"
  document.querySelector("#check").setAttribute('onclick', 'checkAnswer()')
  document.querySelector('#letter').style.display='none'
}

function initial() {
  document.querySelector('h1').textContent=wanakana.toHiragana('Moshi Moshi');
}

function checkAnswer() {
  let input = document.querySelector('input').value.toLowerCase()
  if (input === answer) {
    counter++
    document.querySelector('p').innerHTML=`correct ${counter}`
    index = Math.floor(Math.random() * array.length)
    answer = array[index]
    document.querySelector('h1')
    .innerHTML=wanakana.toHiragana(answer);
  }

  else {
    counter = 0;
    document.querySelector('p').innerHTML="wrong"
    document.querySelector('h1').innerHTML=answer
    index = Math.floor(Math.random() * array.length)
    answer = array[index]
    setTimeout(function() {document.querySelector('h1')
    .innerHTML=wanakana.toHiragana(answer);},1000)
  }
    
    
    document.querySelector('input').value=""
}

function reveal() {
  
}
