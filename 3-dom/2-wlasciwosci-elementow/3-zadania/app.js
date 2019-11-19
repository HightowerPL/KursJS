document.addEventListener('DOMContentLoaded', function() {
    function HTMLInfo(selector) { 
        this.selector = selector;
        this.elements = document.querySelector(this.selector).children;
        console.log(this.selector);
        console.log(this.elements);
    }
    
    HTMLInfo.prototype.showElements = function () {
        // for (i=0; i< this.elements.length-1; i++) {
        //     console.log(this.elements[i]);
        // }
        Array.from(this.elements).forEach( el => console.log(el))
    }
    
    HTMLInfo.prototype.showTags = function () {
        // for (i=0; i< this.elements.length-1; i++) {
        //     console.log(this.elements[i].tagName);
        // }
        Array.from(this.elements).forEach( el => console.log(el.tagName))
    }
    
    HTMLInfo.prototype.showCount = function () {
        console.log(this.elements.length);
    }
    
    HTMLInfo.prototype.showClass = function () {
        // for (i=0; i< this.elements.length-1; i++) {
        //     console.log(this.elements[i].classList);
        // }
        Array.from(this.elements).forEach( el => console.log(el.classList))
    }
    
    HTMLInfo.prototype.showHtml = function () {
        Array.from(this.elements).forEach( el => console.log(el.innerHTML))
    }
    
    HTMLInfo.prototype.showData = function () {
        Array.from(this.elements).forEach( el => console.log(el.dataset))
    }
    
    const inst = new HTMLInfo('.test');
    
    inst.showElements();
    inst.showTags();
    inst.showCount();
    inst.showClass();
    inst.showHtml();
    inst.showData();
});
