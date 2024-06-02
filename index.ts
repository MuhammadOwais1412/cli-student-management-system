#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Define the Student class
class Student {
  static counter = 10000;
  id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.id = Student.counter++;
    this.name = name;
    this.courses = [];
    this.balance = 8000;
  };

  // Method to enrolled a student in a course
  enroll_course(course: string) {
    this.courses.push(course);
  };

  // Method to view a student balance
  view_balance() {
    console.log(`Balnce of '${chalk.bold.rgb(167, 94, 253)(this.name)}': 'Rs.${chalk.bold.rgb(255, 131, 51)(this.balance)}'`);
  };

  // Method to pay student fees
  pay_fees(amount: number) {
    if(amount > this.balance) {
      console.log("-".repeat(70));
      console.log(chalk.red("Amount you entered exceeds your current balance. Please review your balance and try again with a smaller amount."));
      console.log("-".repeat(70));}
    else{
    this.balance -= amount;
    console.log("-".repeat(70));
    console.log(`'Rs.${chalk.bold.rgb(255, 131, 51)(amount)}' paid successfully for '${chalk.bold.rgb(167, 94, 253)(this.name)}'`);
    console.log(`Remaining Balance: 'Rs.${chalk.bold.rgb(255, 131, 51)(this.balance)}'`);
    console.log("-".repeat(70));};
  };

  // Method to Display student status
  show_status() {
    console.log("-".repeat(70));
    console.log(`Name: ${chalk.bold.rgb(167, 94, 253)(this.name)}`);
    console.log(`ID: ${chalk.bold.rgb(118, 254, 78)(this.id)}`);
    console.log(`Courses: ${chalk.bold.rgb(255, 131, 51)(this.courses)}`);
    console.log(`balance: ${chalk.bold.rgb(255, 131, 51)(this.balance)}`);
    console.log("-".repeat(70));
  };
};

// Defining a student_manager class to manage students

class Student_manager {
  students: Student[];

  constructor () {
    this.students = [];
  };

  // Method to add a new student
  add_student(name: string) {
    let student = new Student(name);
    this.students.push(student);
    console.log("-".repeat(70));
    console.log(`'${chalk.bold.rgb(167, 94, 253)(name)}' added Successfully, Student ID: ${chalk.bold.rgb(118, 254, 78)(student.id)}`);
    console.log("-".repeat(70));
  };

  // Method to find a student by student id
  find_student(student_id: number) {
    return this.students.find(std => std.id === student_id);
  }
  
  // Method to enroll a  particular student in a course
  enroll_student(student_id: number, course: string) {
    let student = this.find_student(student_id)
    if (student) {
      student.enroll_course(course);
      console.log("-".repeat(70));
      console.log(`'${chalk.bold.rgb(167, 94, 253)(student.name)}' enrolled in '${chalk.bold.rgb(255, 131, 51)(course)}' Successfully!`);
      console.log("-".repeat(70));
    }
    else {
      console.log("-".repeat(70));
      console.log(chalk.red("Student not found, Please enter a valid Student ID."));
      console.log("-".repeat(70));
    }
    
  };

  // Method to view a particular student balance
  view_student_balance(student_id: number) {
    let student = this.find_student(student_id)
    if (student) {
      console.log("-".repeat(70));
      student.view_balance();
      console.log("-".repeat(70));
    }
    else {
      console.log("-".repeat(70));
      console.log(chalk.red("Student not found, Please enter a valid Student ID."));
      console.log("-".repeat(70));
    }

  };

  // Method to pay a particular student fees
  pay_student_fees(student_id: number, amount: number) {
    let student = this.find_student(student_id)
    if (student) {
      student.pay_fees(amount);
    }
    else {
      console.log("-".repeat(70));
      console.log(chalk.red("Student not found, Please enter a valid Student ID."));
      console.log("-".repeat(70));
    }
  };

  // Method to display a particular student status
  show_student_status(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.show_status()
    }
    else {
      console.log("-".repeat(70));
      console.log(chalk.red("Student not found, Please enter a valid Student ID."));
      console.log("-".repeat(70));
    }
  };

  
};

// Method to run the Project
async function main() {
  console.log(chalk.bold.rgb(167, 94, 253)("\n\tWelcome to 'Code With Owais' - Student Mangement System"));
  console.log("-".repeat(70));

  let student_manager = new Student_manager();

  // while loop to keep program running
  while(true) {
    let choices = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: chalk.rgb(239, 217, 58)("Select an option"),
        choices: [
          "Add Student",
          "Enroll Student",
          "View Student Balance",
          "Pay Fees",
          "Show Student Status",
          "Exit"
        ]
      }
    ]);
    // Using switch case to handle user choice
    switch(choices.choice) {
      case "Add Student":
        let name_input = await inquirer.prompt([
          {
            name: "name",
            type: "input",
            message: "Enter a Student Name:"
  
          }
        ]);
        student_manager.add_student(name_input.name);
        break;
      case "Enroll Student":
        let course_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: "Enter a Student ID:"
          },
          {
            name: "course",
            type: "input",
            message: "Enter a Course Name:"
          }
        ]);
        student_manager.enroll_student(course_input.student_id, course_input.course);
        break;
        case "View Student Balance":
          let balance_input = await inquirer.prompt([
            {
              name: "student_id",
              type: "number",
              message: "Enter a Student ID:"
            }
          ]);
          student_manager.view_student_balance(balance_input.student_id);
          break;
          case "Pay Fees":
            let fees_input = await inquirer.prompt([
              {
                name: "student_id",
                type: "number",
                message: "Enter a Student ID:"
              
              },
              {
                name: "amount",
                type: "number",
                message: "Enter the Amount to Pay:"
              }
            ]);
            student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
            break;
            case "Show Student Status":
              let status_input = await inquirer.prompt([
                {
                  name: "student_id",
                  type: "number",
                  message: "Enter a Student ID:"
                }
              ]);
              student_manager.show_student_status(status_input.student_id);
              break;
              case "Exit":
                console.log(chalk.bold.red("Exiting..."));
                process.exit();
              }
  }; 
};

// Calling a main function
main();