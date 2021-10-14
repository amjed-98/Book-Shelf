//1 Log Content
export const log = (content) => console.log(content);

//2 proper Case
export const properCase = (string) =>
  `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

//3 query Selector with Optional Scope
export const select = (selector, scope) =>
  (scope || document).querySelector(selector);

export const selectAll = (selector, scope) =>
  (scope || document).querySelectorAll(selector);

//4 create an element with an optional css class
export const create = (tag, className) => {
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  return el;
};

//5 create a textNode
export const createTxt = (text) => document.createTextNode(text);

//6 create a line
export const line = (line, no) => log(line.repeat(no));
