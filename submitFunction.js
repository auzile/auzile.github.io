function _(id){
	return document.getElementById(id);
}

function submitFunction(){
	_("mybtn").disabled=true; //disable button
	_("status").innerHTML = 'please wait ...'; //indication that data being process on the server
	var formdata = new FormData();//append new key-value pairs into all of data that's gonna be transmitted to PHP
	formdata.append("name", _("name").value);
	formdata.append("email", _("email").value);
	formdata.append("phone", _("phone").value);
	formdata.append("message", _("message").value);
	var ajax = new XMLHttpRequest();
	ajax.open("GET", 'processor.php'); //Want to POST the data to the php script
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){//The data is finishes processing by PHP and PHP has returned data to the ajax object
			if(ajax.responseText == "success") {
				var nameValue = _("name").value;
				if(/\s/.test(nameValue)){
					var substr = nameValue.substr(0,nameValue.indexOf(' '));
					_("status").innerHTML = 'Thanks '+substr+' We will contact you soon';
				}else{
					_("status").innerHTML = 'Thanks '+nameValue+' We will contact you soon';	
				}
			} else {
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}

			$("#contactform")[0].reset();
		}
	}
	ajax.send( formdata );
}