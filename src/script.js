// write your JavaScript here
document.addEventListener('click', function(e){
  let el = (e.target.tagName === 'BUTTON') ? e.target.value : 'Não localizado'
  console.log(el)
})


