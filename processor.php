<?php
	include_once('config.php');

	if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])){//if posted data for name,email & message are all set, then and only then the rest of the code below run
		$n = $_POST['name']; // HINT: use preg_replace() to filter the data
		$e = $_POST['email'];
		$p = $_POST['phone'];
		$m = nl2br($_POST['message']);//change newline to break tags

		//sanitize all POST vars
		$name=mysqli_real_escape_string($con, $_POST['name']);
		$nameclean=filter_var($name, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
		$email=mysqli_real_escape_string($con, $_POST['email']);
		$emailclean=filter_var($email, FILTER_SANITIZE_EMAIL, FILTER_FLAG_STRIP_HIGH);
		$phone=mysqli_real_escape_string($con, $_POST['phone']);
		$phoneclean=filter_var($phone, FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH); 
		$message=mysqli_real_escape_string($con, $_POST['message']);
		$messageclean=filter_var($message, FILTER_SANITIZE_EMAIL, FILTER_FLAG_STRIP_HIGH);

		//insert into database
		mysqli_query($con,"INSERT INTO contact(name,email,phone,message)VALUES('$nameclean','$emailclean','$phoneclean','$messageclean')");  

		//send an email
		$to = "auzile.green@gmail.com";//email address the massage to go to
		$from = $e;
		$subject = 'Contact Form Message';
		$message = '<b>Name:</b>'.$n.'<br><b>Email:</b> '.$e.'<br><b>Phone:</b> '.$p.' <p>'.$m.'</p>';
		$headers = "From: $from\n"; //specify who the email is form
		$headers .= "MIME-Version: 1.0\n"; 
		$headers .= "Content-type: text/html; charset=iso-8859-1\n";
		if( mail($to, $subject, $message, $headers) ){//check if parameters on the mail function has run properly
			echo "success";
		} else {
			echo "The server failed to send the message. Please try again later.";
		}
		
	}

	$con->close();


?>