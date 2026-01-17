export class Converter{
    static _transformCoef = [3.28,0.3048,0.2641,3.7854,2.205,0.4535];
    draw(arr){
        this.conversionEls[0].textContent=`
        ${this.value} метр = ${arr[0]} фут | ${this.value} фут = ${arr[1]} метр
        `;
        this.conversionEls[1].textContent=`
        ${this.value} литр = ${arr[2]} галон | ${this.value} галон = ${arr[3]} литр
        `;
        this.conversionEls[2].textContent=`
        ${this.value} кг = ${arr[4]} фунт | ${this.value} фунт = ${arr[5]} кг
        `;
    }
    calc(value){
        let arr = Converter._transformCoef.map(coef=>(coef*this.value).toFixed(3));
        return arr;
    }
    constructor(){
        this.conversionEls = [...document.querySelectorAll('.converter__element-conversion')];
        this.inputEl = document.querySelector('.converter__input');
        this.buttonEl = document.querySelector('.converter__convert-btn');
        this.buttonEl.addEventListener('click',()=>{
            this.value = this.inputEl.value;
            this.draw(this.calc(this.value));
        });
        this.inputEl.addEventListener('keydown',(event)=>{
            if(event.key === 'Enter'){
                this.value = this.inputEl.value;
                this.draw(this.calc(this.value));
            }
        })
    }
}