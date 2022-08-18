function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "protocarpool@gmail.com",
	Password : "Cyu%a%5qy7=;2A_V",
	To : 'ashikcse3@gmail.com',
	From : "protocarpool@gmail.com",
	Subject : "Test Email",
	Body : "Test Message",
	}).then(
		message => alert("mail sent successfully")
	);
}