let student = {
  firstName: 'Steven',
  lastName: 'Verschoor',
  age: 45,
  printAgeInMonths: function(){
    return student.age * 12
  },
  printAgeInDays: function(){
    return student.printAgeInMonths() * 30;
  }
}
console.log(`Hello, I am ${student.firstName} ${student.lastName}
  I am ${student.age} years, or ${student.printAgeInMonths()} months old or ${student.printAgeInDays()} days`)
