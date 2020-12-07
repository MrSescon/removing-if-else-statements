/*  
    If you want to assign a new value to a variable based on some provided input, 
    then stop the If-Else nonsense — there’s a more readable approach. 

*/
/* 
    Despite the simplicity, it’s awful. 
    First off, If-Else is easily replaced with a switch here. 
    But, we can simplify this code even further by removing else if and else altogether.

*/
const DetermineGenderWithElses = (input: number) => {
  let gender: string = ""

  if (input == 0) {
    gender = "male"
  } else if (input == 1) {
    gender = "Woman"
  } else {
    gender = "Unknown"
  }

  return gender

}


/* 
  Take away the else if and else, and we are left with clean, readable code. 
  Notice that I’ve also changed the style to be fast return opposed to single 
  return statement — it simply doesn’t make sense to continue testing a value 
  if the correct one has already been found. 
*/
const DetermineGenderWithoutElses = (input: number) => {
  if (input == 0) return "woman"
  if(input == 1) return "man"
  return "unknown"
}

