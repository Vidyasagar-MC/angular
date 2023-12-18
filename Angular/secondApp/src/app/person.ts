export class Person {

    constructor (pAadhar:string='',pName:string='',pAge:number=18){
        this.aadhar=pAadhar;
        this.name=pName;
        this.age=pAge;
    }

    public aadhar:string ='';//similar to c# string
    public name:string='';
    public age:number=0;//~C# int,int 16, int 32, int 64, long, short, decimal
    private secrets:string[]=[];//~c# Arrays{}
    public isAlive:boolean=true;  //~C# Boolean
    protected hobbies:any={};//~ C# obejcts 
    protected awardsReceived:any[]=[]; //~c# Array

    public static People:Person[]=[];//static keyword is not used in JS so through TS we use static 

    public GetPeople():Person[]{
        if(Person.People.length==0)
        Person.People.push(new Person("JAB238239BHDJ39","Meena",25));
        Person.People.push(new Person("JDh283838JNDD83","Veena",23));
        Person.People.push(new Person("DFGSHy3933BDJe4","Reena",32));

        return Person.People;
    }
    public  static AddPerson(person:Person):boolean{
        //Add him to Person.people array
        if(person==undefined)
        {
            return false;
        }
        Person.People.push(person);
        return true;
    }
}


