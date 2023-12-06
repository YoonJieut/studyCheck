console.log('hi');
import createTag from "./createTag.js";

const root = document.getElementById('root');

// .container 생성 
const container = document.createElement('div');
root.appendChild(container).setAttribute('class','container');

//.container 함수로 생성
createTag('div',root,'class','container');

const containers = document.getElementsByClassName('container');
// console.dir(containers);

containers[0].id = "top";
containers[1].id = "bottom";

createTag("div", containers[0], "class", "leftCont");
const topUl = createTag("ul", containers[0], "","");
console.dir(topUl)






