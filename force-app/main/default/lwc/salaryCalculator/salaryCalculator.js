import { LightningElement } from 'lwc';

export default class SalaryCalculator extends LightningElement {
    hourly = '' // Hourly salary
    hoursPerWeek = '' // Hours worked per week
    annualSalary = ''  //Stores the calculated salary
    result = ''

    //Handles the values stored when a user enters their information into the input box.
    inputHandler(event){
        const {name, value} = event.target
        if(name === "hourly"){
            this.hourly = value         
        }
        if(name === "hoursPerWeek"){
            this.hoursPerWeek = value
    }
    }

    //Listens for the onclick handler to store and calculate the values from the input boxes.
    submitHandler(event){
        event.preventDefault()
        console.log("hourly", this.hourly);
        console.log("hoursPerWeek", this.hoursPerWeek);
        this.calculate();
    }

    //Calculates the annual salary with the hours worked per week and the hourly salary.
    calculate(){
        let annualSalary = this.hourly * this.hoursPerWeek * 52;

        // Format the price above to USD using the locale, style, and currency.
        let USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        if(this.annualSalary != null){
            //this.result = annualSalary
            this.result = `${USDollar.format(annualSalary)}`

        }
    }

    recalculate(){
        this.hourly = ''
        this.hoursPerWeek = ''
        this.annualSalary = ''
        this.result = ''
    }
}