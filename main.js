import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        type: "input",
        name: "userID",
        message: "Enter your ID"
    },
    {
        type: "number",
        name: "userPIN",
        message: "Enter your PIN"
    }, {
        type: "list",
        name: "accountType",
        message: "Select your account type",
        choices: ["Current", "Saving"]
    }, {
        type: "list",
        name: "transactionType",
        message: "Enter your transaction",
        choices: ["Fastcash", "Withdraw"],
        when(answer) {
            return answer.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices: [10000, 20000, 30000, 4000],
        when(answer) {
            return answer.transactionType == "Fastcash";
        }
    }, {
        type: "number",
        name: "amount",
        message: "Select your amount ",
        when(answer) {
            return answer.transactionType == "Withdraw";
        }
    }
]);
if (answer.userID && answer.userPIN) {
    let balanced = 50000;
    console.log("Previous balanced:", balanced);
    let enteredamount = answer.amount;
    if (balanced >= enteredamount) {
        let remaining = balanced - enteredamount;
        console.log("Your remaining balanced is :", remaining);
    }
}
// else {
//   console.log("Insufficient Balanced");
// }
// function sum(num1:number,num2:number):number{
//   return num1+num2
// }
// let result=sum(4,8)
// console.log(result)
// // anonmous
// type sum=(num1:number,num2:number)=>number
// let add:sum=function(num1,num2){
//   return num1+num2
// }
// sum(7,9)
// console.log(result);
// arrow function
// let sum= (num1:number,num2:number):number=>num1+num2
// let result=sum(6,8)
// console.log(result);
// optional parameter
// let fullname=(fname:string,lname:string)=>fname+""+lname
// let  a=fullname("sadaf","jaan")
// let b=fullname("sadaf")
// // console.log(a);
// // conditional parameter
// let fname=(a:string,b?:string)=>{
//   if(b===undefined)
//   {return a}
// // else{
// //   a+b
// // }
// // }
// // let name1 = fname("sadaf")
// // console.log(name1);
// let  fullName =(fname:string,lname="bhatti")=>{
//   // console.log(fname,lname);
//   return fname+''+lname
// }
// let fullName=fullName('jaan')
// // console.log(fullName);
// let makemessage=(name:string,...message:string[])=>{
//   console.log(name,message.join(""));
// }
// makemessage("jaan","sadaf","ali","love")
// function add11(arg1:string,arg2:string):string
// function add11(arg1:number,arg2:string):string
// function add11(arg1:boolean,arg2:number):string
// function add11(arg1:any,arg2:any):any{
//   return arg1+arg2
// }
// add11("sadaf","love")
// add11(7,true)
// add11(true,7)
// // tuples
// let friuts:[string,string,number]=["orange","banana",3]
// friuts.push(78)
// console.log(friuts);
