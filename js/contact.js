function sendMessage()
{
	var firstName = document.getElementById('first').value;
	var lastName = document.getElementById('last').value;
	var phoneNo = document.getElementById('phone').value;
	var emailID = document.getElementById('email').value;
	var messageData = document.getElementById('message').value;

	if(firstName == null || firstName == undefined || firstName == "" || lastName == null || lastName == undefined || lastName == ""
		|| phoneNo == null || phoneNo == undefined || phoneNo == "" || emailID == null || emailID == undefined || emailID == ""		
		|| messageData == null || messageData == undefined || messageData == "")
	{
		alert('All fields are mandatory to fill');
	}
	else
	{
		alert('Message Send Successfully');
	}
}