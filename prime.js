function check_prime(number){
  let counter = 0;
  for(let i=1; i<=number; i++){
    if(number%i==0){
      counter++;
    }
  }
  if(counter==2){
    console.log(number,": is prime");
  }
  else{
    console.log(number,": is not prime");
  }
}

check_prime(7);
check_prime(12);