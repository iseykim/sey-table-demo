export const columnSample = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
    ],
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Mood',
        accessor: 'mood',
      },
    ],
  },
]

export const dataSample = [
  { firstName: 'basin', lastName: 'cattle', age: 16, mood: 37 },
  { firstName: 'inflation', lastName: 'youth', age: 1, mood: 56 },
  { firstName: 'complaint', lastName: 'trade', age: 7, mood: 10 },
  { firstName: 'pancake', lastName: 'dog', age: 10, mood: 73 },
  { firstName: 'lock', lastName: 'son', age: 12, mood: 5 },
  { firstName: 'dealer', lastName: 'variety', age: 29, mood: 63 },
  { firstName: 'worm', lastName: 'design', age: 27, mood: 16 },
  { firstName: 'apparatus', lastName: 'quicksand', age: 25, mood: 16 },
  { firstName: 'attitude', lastName: 'cent', age: 11, mood: 49 },
  { firstName: 'reading', lastName: 'cap', age: 12, mood: 74 },
  { firstName: 'wealth', lastName: 'plot', age: 13, mood: 79 },
  { firstName: 'dinosaurs', lastName: 'spot', age: 4, mood: 98 },
  { firstName: 'management', lastName: 'collar', age: 26, mood: 15 },
  { firstName: 'things', lastName: 'aunt', age: 19, mood: 81 },
  { firstName: 'thanks', lastName: 'stew', age: 12, mood: 53 },
  { firstName: 'steam', lastName: 'freedom', age: 0, mood: 53 },
  { firstName: 'restaurant', lastName: 'girlfriend', age: 19, mood: 45 },
  { firstName: 'performance', lastName: 'chance', age: 25, mood: 12 },
  { firstName: 'parent', lastName: 'month', age: 17, mood: 87 },
  { firstName: 'accident', lastName: 'month', age: 13, mood: 97 },
  { firstName: 'inflation', lastName: 'youth', age: 1, mood: 56 },
  { firstName: 'complaint', lastName: 'trade', age: 7, mood: 10 },
  { firstName: 'pancake', lastName: 'dog', age: 10, mood: 73 },
  { firstName: 'lock', lastName: 'son', age: 12, mood: 5 },
  { firstName: 'dealer', lastName: 'variety', age: 29, mood: 63 },
  { firstName: 'worm', lastName: 'design', age: 27, mood: 16 },
  { firstName: 'apparatus', lastName: 'quicksand', age: 25, mood: 16 },
  { firstName: 'attitude', lastName: 'cent', age: 11, mood: 49 },
  { firstName: 'reading', lastName: 'cap', age: 12, mood: 74 },
  { firstName: 'wealth', lastName: 'plot', age: 13, mood: 79 },
  { firstName: 'dinosaurs', lastName: 'spot', age: 4, mood: 98 },
  { firstName: 'management', lastName: 'collar', age: 26, mood: 15 },
  { firstName: 'things', lastName: 'aunt', age: 19, mood: 81 },
  { firstName: 'thanks', lastName: 'stew', age: 12, mood: 53 },
  { firstName: 'steam', lastName: 'freedom', age: 0, mood: 53 },
  { firstName: 'restaurant', lastName: 'girlfriend', age: 19, mood: 45 },
  { firstName: 'performance', lastName: 'chance', age: 25, mood: 12 },
  { firstName: 'parent', lastName: 'month', age: 17, mood: 87 },
]

export const storySample = makeRows(100)
export const storySample1 = []
export const storySample2 = [
  { first: 'basin', lastName: 'cattle', age: 16, mood: 37 },
  { first: 'inflation', lastName: 'youth', age: 1, mood: 56 },
]

function makeRows(rows: number) {
  let a = new Array(rows)
  for (let i = 0; i < rows; i++) {
    a[i] = { firstName: 'John', lastName: 'Bain', age: 44, mood: 50 }
  }
  return a
}
