'use strict';
// screen elements
const elementName = document.querySelector('.selector-name');
const buttonSubmit = document.querySelector('.selector-submit');
const elementHeight = document.querySelector('.selector-height');
const elementWidth = document.querySelector('.selector-width');
const elementBg = document.querySelector('.selector-bg');
const elementFontSize = document.querySelector('.selector-font-size');
const elementText = document.querySelector('.selector-text');
const newElementPlace = document.querySelector('.selector-place');

// create class DomElement
class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = 'Test text string';
  }
  // create new screen element
  createDomElement() {
    newElementPlace.innerHTML = '';

    this.selector = elementName.value;
    if (!this.checkString(this.selector) || this.selector.trim().length === 0) {
      alert('Введите наименование елемента начинающееся с точки или #');
    } else {
      this.height = (this.isNumber(elementHeight.value)) ? elementHeight.value + 'px' : '200px';
      this.width = (this.isNumber(elementWidth.value)) ? elementWidth.value + 'px' : '200px';
      this.bg = (!this.isNumber(elementBg.value)) ? '#' + elementBg.value : '200px';
      this.fontSize = (this.isNumber(elementFontSize.value)) ? elementFontSize.value + 'px' : '32px';
      this.text = (!this.isNumber(elementText.value)) ? elementText.value : this.text;
      this.buildElement();
    }
  }
  // check new element name
  checkString (stringArg) { 
    if (stringArg !== null) {
      if (stringArg.indexOf('.') >= 0 || stringArg.indexOf('#') >= 0) {
        return true;
      }
    }
    return false;
  }
  // check argument for number
  isNumber (n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 0;
  }
  // build new screen element
  buildElement() {
    const newElementClassId = this.selector.trim().substring(1);
    let newElement = '';

    if (this.selector.indexOf('.') >= 0) {
      newElement = document.createElement('div');
      newElement.classList.add(newElementClassId);
    } else if (this.selector.indexOf('#') >= 0) {
      newElement = document.createElement('p');
      newElement.setAttribute('id', newElementClassId);
    }
    newElement.style.width = this.width;
    newElement.style.height = this.height;
    newElement.style.background = this.bg;
    newElement.style.fontSize = this.fontSize;
    newElement.textContent = this.text;

    newElementPlace.append(newElement);
  }
}
const domElement = new DomElement();

buttonSubmit.addEventListener('click', domElement.createDomElement.bind(domElement));