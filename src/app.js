// Usando JavaScript, cree una función que genere y devuelva una excusa aleatoria con la siguiente estructura:

function excuseGenerator(){

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let numWho = Math.floor(Math.random() * who.length);
  let numAction = Math.floor(Math.random() * action.length);
  let numWhat = Math.floor(Math.random() * what.length);
  let numWhen = Math.floor(Math.random() * when.length);
  return who[numWho] + " " + action[numAction] + " " + what[numWhat] + " " + when[numWhen];
}

function onLoad(){
  var excusa = document.querySelector('#excuse');
  excusa.innerHTML = excuseGenerator();/*con el innerHTML remplazamos el texto del html por el contenido de la funcion excuseGenertor*/
}
window.onload = onLoad;