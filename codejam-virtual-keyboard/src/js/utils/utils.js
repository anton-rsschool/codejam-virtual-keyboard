export default (tagName, classes = []) => {
  const element = document.createElement(tagName);
  classes.forEach((className) => {
    element.classList.add(className);
  });
  return element;
};
