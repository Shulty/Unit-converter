 export class Switcher{
    switchTheme(){
        this.bodyEl.classList.toggle('body-nightshift')
        this.switcherOptionEl.classList.toggle('switcher__option-nightshift')
        this.sunEl.classList.toggle('switcher__sun-nightshift');
        this.moonEl.classList.toggle('switcher__moon-nightshift');

        this.converterEl.classList.toggle('converter__body-nightshift');
        this.elementEls.forEach(element => {
            element.classList.toggle('converter__element-nightshift');
        });
        this.titleEls.forEach(element => {
            element.classList.toggle('converter__element-title-nightshift');
        });
        this.conversionEls.forEach(element => {
            element.classList.toggle('converter__element-conversion-nightshift');
        });
    }

    constructor(){
        this.switcherEl = document.querySelector('.switcher');
        this.switcherOptionEl = document.querySelector('.switcher__option');
        this.sunEl = document.querySelector('.switcher__sun');
        this.moonEl = document.querySelector('.switcher__moon');

        this.bodyEl = document.querySelector('body');
        this.converterEl = document.querySelector('.converter');
        this.elementEls = [...document.querySelectorAll('.converter__element')];
        this.titleEls = [...document.querySelectorAll('.converter__element-title')];
        this.conversionEls = [...document.querySelectorAll('.converter__element-conversion')];

        this.switcherEl.addEventListener('click',()=>{
            this.switchTheme();})
    }
}