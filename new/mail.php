    <?php
if(isset($_POST['email'])) {

// Email and subject.
$email_to = "codersurjo@gmail.com";
$email_subject = "Mint Makeup & Beauty Enquiry";        

$name = $_POST['name']; // required
$email = $_POST['email']; // required
$phone = $_POST['phone']; // required
$message = $_POST['email']; // required

// create email content
$email_content = "From:"." ".$name."\n"."Email:"." ".$email."\n"."Phone:"." ".$phone."\n"."Message:"." ".$message; 

//mail
mail($email_to, $email_subject, $email_content);

}
//return to contact page after submit.
header("location:contact.html?success");
?>