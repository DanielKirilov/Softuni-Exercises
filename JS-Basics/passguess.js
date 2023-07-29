function guesspass(input) {
   let potencialpassword = (input[0]);
   let password = ("s3cr3t!P@ssw0rd");

   if (potencialpassword === password) {
    console.log("Welcome");
   } else 
   console.log("Wrong password!")

}
guesspass(["s3cr3t!P@ssw0rd"])