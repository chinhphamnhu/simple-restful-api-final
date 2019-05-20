const student = require(appModels + '/student')

// mock data
const listStudents = [
	new student(1, 'Chinh', 'Pham', 22),
	new student(2, 'Nguyen Van', 'A', 18)
]

module.exports = (() => {
	const router = {}

	router.listStudent = (req, res) => {
		res.status(200).json(listStudents)
	}

	router.getStudentId = (req, res) => {
		let object = listStudents.find((student) => {
			return student.id === parseInt(req.params.id)
		})

		if (object) {
			res.status(200).json(object)
		} else {
			res.status(404).json({
				message: 'This student does not exist.'
			})
		}
	}

	return router
})()