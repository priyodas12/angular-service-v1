
export class UserComponent {
  constructor(firstname: string,
    lastname: string,
    email: string,
    age: number,
    designation: string,
    country: string,
    city: string,
    gender: string,
    stype: string) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.designation = designation;
    this.country = country;
    this.city = city;
    this.stype = stype;
    this.gender=gender;
  }

  firstname: string;
  lastname: string;
  email: string;
  age: number;
  designation: string;
  country: string;
  city: string;
  gender: string;
  stype: string;
}
