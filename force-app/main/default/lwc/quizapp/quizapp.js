import StayInTouchSignature from '@salesforce/schema/User.StayInTouchSignature';
import { LightningElement } from 'lwc';

export default class Quizapp extends LightningElement {
    correctAnswerCount = 0;
    selectedAnswers = {};
    showResult = false;
    get disableSubmit(){
        return this.questions.length !== Object.keys(this.selectedAnswers).length;
    }

    get disableReset(){
        return Object.keys(this.selectedAnswers).length === 0;
    }
    
    get resultColor(){
        return `slds-text-heading_medium ${this.correctAnswerCount === this.questions.length ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    questions = [
        {
            id : 1,
            question : "Which is not correct directive in LWC",
            answers : {
                a : "@track",
                b : "if:true",
                c : "for:each"
            },
            correct : "a"
        },
        {
            id : 2,
            question : "Which is not corrct loop",
            answers : {
                a : "for:each",
                b : "iterator:it",
                c : "if:true"
            },
            correct : "c"
        },
        {
            id : 3,
            question : "Which file is not allowed in LWC bundle",
            answers : {
                a : ".svg",
                b : ".css",
                c : ".apex"
            },
            correct : "c"
        }
    ]
    handleChangeEvent(event)
    {
        let {name,value} = event.target //destructing array
        this.selectedAnswers = {...this.selectedAnswers, [name]:value};
    }
    submit(event){
        event.preventDefault();
        this.correctAnswerCount = this.questions.filter(item=>this.selectedAnswers[item.id] === item.correct).length;
        console.log(this.correctAnswerCount);
        this.showResult = true;
    }
    reset(event){
        this.correctAnswerCount = 0;
        this.selectedAnswers = {};
        this.showResult = false;
    }
}