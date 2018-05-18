function enrollInSummerSchool(students) {
  // your code here
  // confused over this https://eslint.org/docs/rules/arrow-body-style
  // figured it out
  return students.map(student => ({
    name: student.name,
    status: 'In Summer School',
    course: student.course
  }));
}