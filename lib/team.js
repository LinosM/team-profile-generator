class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = 'Manager';
    }
}

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email);
        this.git = git;
        this.role = 'Engineer';
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}