import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor(){
        super()
        console.log('child constructor called')
    }
    connectedCallback(){
        console.log('child connectedcallback called');
        window.addEventListener('click',this.windowEvent);
        throw new Error('error in child compoent');
    }
    renderedCallback(){
        console.log('child renderedCallback called');
    }
    disconnectedCallback(){
        alert('child disconnect callback called');
        window.removeEventListener('click',this.windowEvent);
    }
    windowEvent(){
        console.log('window clcik fired');
    }
}