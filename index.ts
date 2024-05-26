import inquirer from "inquirer";

class Student {
    name : string;
    constructor(name: string) {
        this.name = name;
    }
}

class Person {
    students : Student [] = []
    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person()

const programStart = async (persons: Person) => {
    do {
    console.log("Welcome");
    const ans = await inquirer.prompt([
        {
        name: "select", 
        type: "list",
        message: "Who would you like to interact with?",
        choices: ["Teacher", "Student", "Exit"]
        }
    ])
    if(ans.select === "Teacher") {
        console.log("You have approached the Teachers Room ");
    }
    else if(ans.select === "Student") {
        const ans = await inquirer.prompt([
            {
                name : "student",
                type : "input",
                message : "Enter the student name, you like to interact with:"
            }
        ])
        const student = persons.students.find(val => val.name == ans.name)
        if (!student) {
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hello i am ${name.name}. Nice to meet you.`);
            console.log("New Student has been added");
            console.log("Current Student list :");
            console.log(persons.students);
        }
        else {
            console.log(`Hello i am ${student.name}. Nice to meet you.`);
            console.log("Existing Student List:");
            console.log(persons.students);
        }
    }
    else if(ans.select === "Exit") {
        console.log("Good Bye");
        process.exit();
    }
} while (true)
}

programStart(persons);