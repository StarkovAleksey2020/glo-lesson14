'use strict';

const body = document.querySelector('body');

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = 'Test text string';
    this.screenWidth = window.screen.width;
    this.screenHight = window.screen.height;
    this.divTop = 200;
    this.divLeft = 200;
    //this.divTop = this.screenHight / 2;
    //this.divLeft = this.screenWidth / 2;
    //this.transform = 'translate(-50%, -50%)';
  }
  // build new screen element
  buildElement() {
    let newElement = document.createElement('div');
    newElement.remove();

    newElement.style.width = '100px';
    newElement.style.height = '100px';
    newElement.style.background = '#2f2f2f';
    newElement.style.position = 'absolute';
    newElement.style.top = this.divTop + 'px';
    newElement.style.left = this.divLeft + 'px';

    body.append(newElement);
  }
  // move element
  moveItem(e) {
    let newElement = document.querySelector('div');
    if (newElement !== null) {
      newElement.remove();
    }
    if (e === 'ArrowUp') {
      if (this.divTop > 10) {
        this.divTop -= 10;
      }
    } else if (e === 'ArrowRight') {
      if (this.divLeft < (this.screenWidth - 110)) {
        this.divLeft += 10;
      }
    } else if (e === 'ArrowDown') {
      if (this.divTop < (this.screenHight - 110)) {
        this.divTop += 10;
      }
    } else if (e === 'ArrowLeft') {
      if (this.divLeft > 10) {
        this.divLeft -= 10;
      }
    }
    
    let movedElement = document.createElement('div');
    movedElement.style.width = '100px';
    movedElement.style.height = '100px';
    movedElement.style.background = '#2f2f2f';
    movedElement.style.position = 'absolute';
    movedElement.style.top = this.divTop + 'px';
    movedElement.style.left = this.divLeft + 'px';

    body.append(movedElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const domElement = new DomElement();
  domElement.buildElement();

  document.addEventListener('keydown', function (event) {
    domElement.moveItem(event.code);
  });
});