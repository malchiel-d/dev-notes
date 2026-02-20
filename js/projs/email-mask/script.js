<script>   
 
function mask(email){  
   let userName = email.slice(0,email.indexOf("@")); 
//handle 1 or 2 letter usernames
   if(userName.length <=2 ){
     const suffix = userName.length === 1 ? " " : "s";
     return `you cant have ${userName.length} character${suffix} as a username`;
   }   
     
   let domain = email.slice(email.indexOf("@"));
   let lastL = userName.slice(userName.length-1);
   let stars = "*".repeat(userName.length-2);   

   return email[0] + stars + lastL + domain;
}
//test
    let one = "u@example.com";
    let two = "us@example.com";
    let three = "use@example.com";
    let four = "user@example.com";
   console.log(mask(one));
   console.log(mask(two));
   console.log(mask(three));  
   console.log(mask(four));

</script>
