console.log('hi');
const root = document.getElementById('root');

function createTag(tag, container, attr, attrText ) {
  const tagAdd = document.createElement(tag);
  container.appendChild(tagAdd).setAttribute(attr, attrText);
}
const container = document.createElement('div');
root.appendChild(container).setAttribute('class','container');

createTag('div',root,'class','container');

const containers = document.getElementsByClassName('container');
console.dir(containers);

containers[0].id = "top";
containers[1].id = "bottom";






