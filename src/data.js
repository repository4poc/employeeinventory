let todos = [
  { empid: 1, Name: "learn React", done: false, targetDate: new Date() },
  { empid: 2, Name: "learn Java", done: false, targetDate: new Date() },
  { empid: 3, Name: "learn C#", done: false, targetDate: new Date() },
  { empid: 4, Name: "learn PHP", done: false, targetDate: new Date() },
];

export function getTodos() {
  return todos;
}
