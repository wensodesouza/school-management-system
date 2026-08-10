import Person from "./person.js";

class Teacher extends Person {

    constructor(name, subject) {

        super(name);

        this.subject = subject;

    }

}
export default Teacher;