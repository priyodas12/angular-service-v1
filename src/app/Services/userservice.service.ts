import { UserComponent } from "../models/user/user.component";

export class UserService {

    users: UserComponent[] = [
        new UserComponent("priyo", "das", "priyodas18@gmail.com", 32, "Software Developer", "IN", "kolkata", "Male", "Monthly"),
        new UserComponent("priyo", "das", "priyodas18@gmail.com", 32, "Software Developer", "IN", "kolkata", "Male", "Quaterly")
    ];

    getAllUsers() {
        return this.users;
    }

    createNewUser(firstname: string,
        lastname: string,
        email: string,
        age: number,
        designation: string,
        country: string,
        city: string,
        gender: string,
        stype: string
    ) {
        console.log("Creating new user!");
        let newUser = new UserComponent(firstname, lastname, email, age, designation, country, city, gender, stype);
        this.users.unshift(newUser);
        return this.users;
    }
}