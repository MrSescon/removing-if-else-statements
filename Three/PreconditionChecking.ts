/* 
  Most often, I find that it won’t make sense to continue executing a method 
  if it’s provided with invalid values.
  Say we have the DetermineGender method from before, 
  with the requirement that the provided input value must always be 0 or 1. 
*/

// Input must be 0 or 1
const DetermineGenderWithoutPreconditionChecking = (input: number) => {
  console.log("Continue Executing logic")
}

/* 
  Executing the method without value validation doesn’t make any sense. 
  So, we’ll need to check some preconditions before we allow the method continuing
  its executing.
  Applying the guard clause defensive coding technique, 
  you’ll check method input values and only move on to executing the method if.

*/
const DetermineGenderWithPreconditionChecking = (input: number) => {
  if (input < 0 || input > 1) throw new ArgumentException()
  

  return input === 0 ? "Woman" : "Man"
}