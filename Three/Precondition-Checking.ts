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

/*

  At this point, we’ve made sure the main logic is only executed 
  if the value falls within the expected range.
  The IFs have also been replaced with ternary 
  now that it doesn’t make sense to have a default return of “Unknown” at the 
  end any longer.

*/
const DetermineGenderWithPreconditionChecking = (input: number) => {
  if (input < 0 || input > 1) throw new ArgumentException()

  return input === 0 ? "Woman" : "Man"
}