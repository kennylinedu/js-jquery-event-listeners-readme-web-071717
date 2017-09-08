function getIt() {
  $('p').on('click', ()=>{
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', ()=>{
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('#typing').on('keydown', (event)=>{
    if(event.which === 71){
      alert("You pressed g!")
    }
  })
}

function submitIt(){
  $('form').on('submit', (e)=> {
    e.preventDefault()
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
