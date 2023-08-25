export class User {
  id: number;
  name: string;
  age: number;
  email: string;
  address: {
    street: string,
    city: string,
    state: string
  }
  constructor(
    id: number = 0,
    name: string = '',
    age: number = 0,
    email: string = '',
    street: string = '',
    city: string = '',
    state: string = '') {
      this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = {
      street: street,
      city: city,
      state: state
    }
  }
}
