// Problem 1
//Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
//Sam, Tech, Manager, 40000, true
//Mary, Finance, Trainee, 18500, true
//Bill, HR, Executive, 21200, false
let company1 = {
    "employeeList":[
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        }
    ]
}
console.log("Problem 1:");
console.log(company1);

// Problem 2
// Create JSON for the company with the following details (companyName, website, employees)
//Tech Stars, www.techstars.site, array of Employees

let company2 = {
   companyName: "Tech Stars",
   website:"www.techstars.site",
    "employeeList":[
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        }
    ]
}
console.log("Problem 2:");
console.log(company2);

// Problem 3

let company3 = {
    companyName: "Tech Stars",
    website:"www.techstars.site",
     "employeeList":[
         {
             "firstName": "Sam",
             "department": "Tech",
             "designation": "Manager",
             "salary": 40000,
             "raiseEligible": true
         },
         {
             "firstName": "Mary",
             "department": "Finance",
             "designation": "Trainee",
             "salary": 18500,
             "raiseEligible": true
         },
         {
             "firstName": "Bill",
             "department": "HR",
             "designation": "Executive",
             "salary": 21200,
             "raiseEligible": false
         },
         {
            "firstName": "Anna",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        },

     ]
 }

console.log("Problem 3:");
console.log(company3);


// Problem 4

let salaryTotal = 0;
for(let i =0; i <company3.employeeList.length;i++){
    salaryTotal += company3.employeeList[i]['salary'];
}
console.log("Problem 4:")
console.log(salaryTotal)

// Problem 5

for(let i=0; i < company3.employeeList.length; i++){
    if(company3.employeeList[i]['raiseEligible']){
        company3.employeeList[i]['salary'] += company3.employeeList[i]['salary']*.1;
    }
}
console.log("Problem 5:")
console.log(company3);

// Problem 6

let wfhNames = ["Anna", "Sam"];
for (var i = 0; i < company3.employeeList.length; i++) {
  for (var n = 0; n < wfhNames.length; n++) {
    if (company3.employeeList[i].firstName === wfhNames[n]) {
        company3.employeeList[i].wfh = true;
    } else if (company3.employeeList[i].wfh != true) {
      // Added this because I think it was overwriting one of the names while the other got set to true
      company3.employeeList[i].wfh = false;
    }
  }
}

console.log("Problem 6:");
console.log(company3);