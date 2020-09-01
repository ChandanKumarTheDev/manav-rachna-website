function submitData()
{
	var sName = document.getElementById('name').value;
var sPhone = document.getElementById('phone').value;
var sEmail = document.getElementById('email').value;
var sDOB = document.getElementById('dob').value;

var fMobile = document.getElementById('fmnumber').value;
var fName = document.getElementById('fname').value;

var aSchoolName = document.getElementById('sclname').value;
var aSchoolAddress = document.getElementById('scladd').value;
//var aSchoolReco = document.getElementById('sclrecog').value;
var aTMarks = document.getElementById('tmarks').value;
//var aSeekingAdmission = document.getElementById('courses').value;

if(sName == null || sName == undefined || sName == "" || sDOB == null || sDOB == undefined || sDOB == ""
	|| sPhone == null || sPhone == undefined || sPhone == "" || fName == null || fName == undefined || fName == "" 
	|| aSchoolName == null || aSchoolName == undefined || aSchoolName == "" || aSchoolAddress == null || aSchoolAddress == undefined || aSchoolAddress == "" 
	|| aTMarks == null || aTMarks == undefined || aTMarks == "")
{
	alert('Warning\nAll fields are mandatory to fill');
}
else
{
	alert('Registeration successfull ):');
}
}
