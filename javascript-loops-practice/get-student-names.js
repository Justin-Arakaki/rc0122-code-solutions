/* exported getStudentNames */
function getStudentNames(students) {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    names[i] = students[i].name;
  }
  return names;
}
