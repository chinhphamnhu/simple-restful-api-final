function Student(id, firstname, lastname, age) {
	this.id = id
	this.firstname = firstname
	this.lastname = lastname
	this.age = age
}

// id
Student.prototype.getId = () => {
	return this.id
}

Student.prototype.setId = (id) => {
	this.id = id
}

// first name
Student.prototype.getFirstName = () => {
	return this.firstname
}

Student.prototype.setFirstName = (firstname) => {
	this.firstname = firstname
}


// last name
Student.prototype.getLastName = () => {
	return this.lastname
}

Student.prototype.setLastName = (lastname) => {
	this.lastname = lastname
}


// age
Student.prototype.getAge = () => {
	return this.age
}

Student.prototype.setAge = (age) => {
	this.age = age
}

module.exports = Student