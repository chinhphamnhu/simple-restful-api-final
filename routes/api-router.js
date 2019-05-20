module.exports = (app) => {
	const baseURL = '/api/v1'

	// API for student
	const studentController = require(appControllers + '/api/student-controller')
	app.route(baseURL + '/student').get(studentController.listStudent)
	app.route(baseURL + '/student/:id').get(studentController.getStudentId)
}