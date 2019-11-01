//ATIVIDADE 2 JS BASICO
//A
var id = 0;
function addBox() {
  var margim = Math.floor((Math.random() * 1000) + 1);
  var margimLeft = Math.floor((Math.random() * 1000) + 1);
  var obj = document.createElement('div');
  obj.style.width='100px';
  obj.style.height='100px';
  obj.style.position='absolute';
  obj.style.marginTop=margim+'px';
  obj.style.marginLeft=(margimLeft+100)+'px';
  obj.id=id;
  obj.style.backgroundColor='blue';
  obj.setAttribute('onmouseover', "trocaCor(this)");
  var local = document.querySelector('#app');
  local.appendChild(obj);
  id+=1;
}

//B
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }
 
 function trocaCor(x){
   x.style.backgroundColor=getRandomColor();

 }
