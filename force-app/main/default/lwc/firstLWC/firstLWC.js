import { LightningElement, track } from 'lwc';

export default class FirstLWC extends LightningElement {
    fullName = 'nikhil';
    age;
    email;
    emailEntered;
    @track details = {
        name : "nannu",
        dob :'16/03/2017'
    };
    classList = ["LKG","UKG","Prep","First","Second"];
    keyUpHandler(event){
        this.fullName = event.target.value
        this.details.name = event.target.value
    }
    trackHandler(event){
        this.details.name = event.target.value
        //this.details = {...this.details,name : event.target.value}
    }
    get classes(){
        return this.classList[0];
    }
    get evalExpression(){
        return 7*3;
    }

    validateEmail(event){
        this.email = event.target.value
        this.emailEntered = this.email.length <=0
    }
    get checkEmailRGExp(){
        if(this.email){
            return this.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        }
        return false
    }

    persons = [
        {
            name : "nikhil",
            age : 30,
            id : 1
        },
        {
            name : "nannu",
            age : 6,
            id : 2
        },
        {
            name : "chotu",
            age : 1,
            id : 3
        }
    ]

    accessElements(){
        let ele = this.template.querySelector('p');
        console.log(ele.innerText);
        ele.style.border = '1px solid red';
        ele.style.padding ='10px';

        let eles = Array.from(this.template.querySelectorAll('.mens'));
        eles.forEach(item=>{console.log(item.innerText)
        item.setAttribute("title",item.innerText)});

        var blankDiv = this.template.querySelector('.blankDiv');
        blankDiv.innerHTML = '<h1>Mama maine Tere kan me Kutta bola hai</h1>'
    }

    mans = ["nannu", "chotu","nikhil"];

    percent = 10;
    updateProgress(event){
        this.percent = event.target.value;
    }
    get percentage(){
        return `width:${this.percent}%`;
    }
}