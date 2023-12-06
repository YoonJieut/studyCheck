/**
 * 
 * @param {string} tag 
 * @param {Element} container 
 * @param {string} attr 
 * @param {string} attrText 
 */

export default function createTag(tag, container, attr, attrText ) {
  const tagAdd = document.createElement(tag);
  container.appendChild(tagAdd).setAttribute(attr, attrText);
  return tagAdd;
}