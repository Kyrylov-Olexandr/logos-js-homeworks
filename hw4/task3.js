class Student {
    constructor (name, age, groupName) {
        this.name = name;
        this.age = age;
        this.groupName = groupName;
    }
};
var students = [new Student("Alex", 16, "KNM"), new Student("Bob", 17, "KNM"), new Student("Bill", 18, "KN"),
                new Student("Patrick", 16, "KNM"), new Student("Felix", 20, "KN"), new Student("Sarah", 20, "PS"),
                new Student("Melman", 16, "PSM"), new Student("John", 16, "PSM"), new Student("Lena", 16, "KN"),
                new Student("Rebeka", 20, "PS"), new Student("Ivan", 20, "PS")];

//TASK 3 a)
var getGroups = (students) => {
    var groups = [];
    students.forEach(element => {
        groups.push(element.groupName);
    });
    var sortGroups = groups.filter((it, index) => index === groups.indexOf(it));
    return sortGroups;
}
console.log(getGroups(students));

//TASK 3 б)
var ageSum = (students) => {
    var ages = [];
    students.forEach(student => ages.push(student.age));
    return ages.reduce((a,b) => a + b);
}
console.log(ageSum(students));

//TASK3 в)
var underAge = (groupName) => {
    var underAgeStudents = [];
    students.forEach(student => {
        if (student.groupName === groupName && student.age < 18) {
            underAgeStudents.push(student.name);
        }
    });
    console.log(underAgeStudents.length > 0 
                        ? "У групі " + groupName + " є неповнолітні студенти: " + underAgeStudents.join(", ")
                        : "У групі " + groupName + " немає неповнолітніх студентів");
}

underAge("PS");
underAge("KNM");
underAge("PSM");
underAge("KN");



