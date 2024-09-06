import { LightningElement } from 'lwc';

export default class LwcLiyecycle extends LightningElement {
    showChild = false;
    constructor(){
        super();
        console.log('parent constructor called');
    }
    connectedCallback(){
        console.log('parent connectedcallback called');
        
    }
    renderedCallback(){
        console.log('parent renderedcallback called');
    }
    name
    updateName(event){
        this.name = event.target.value
    }
    handleClick(){
        this.showChild = !this.showChild;
    }
    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack)
    }
}