import User from '../User.json';

const Users = User.length;

//numbers

test('Number of users is 4', () => {
  expect(Users).toBe(4);
});

test('Number of users is 4', () => {
  expect(Users).toEqual(4);
});

test('Number of users greater than 3', () => {
  expect(Users).toBeGreaterThan(3);
});

test('Number of users greater than or equal to 4', () => {
  expect(Users).toBeGreaterThanOrEqual(4);
});

test('Number of users less than 5', () => {
  expect(Users).toBeLessThan(5);
});

test('Number of users less than or equal to 5', () => {
  expect(Users).toBeLessThan(5);
});

//string

test('There is "star" in Rockstar', () => {
  expect('Rockstar').toMatch(/star/);
});

test('There is no "war" in Rockstar', () => {
  expect('Rockstar').not.toMatch(/war/);
});

//array

const userList = ['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade'];

test('The user list has user Minato', () => {
  expect(userList).toContain('Minato');
});

const gender = ['Male', 'Female'];

test('The gender contain Male and Female', () => {
  expect(['Male', 'Female', 'Transgender']).toEqual(expect.arrayContaining(gender));
});

//Objects Test

test('The first user have property of first_name', () => {
  expect(User[0]).toHaveProperty('first_name');
});

test('The fourth user have property of team = 1', () => {
  expect(User[3]).toHaveProperty('team', 1);
});
