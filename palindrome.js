let name = "sushant";

let rev = "";

for(let i=name.length-1; i>=0; i--){
      rev+=name[i];     	
}

if(name==rev){
   console.log("Yes");
}
else{
   console.log("No");
}
