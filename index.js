const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
//  const splitUp = tutorials.toString().split(','); 
//  return splitUp.map( divider => divider.charAt(0).toUpperCase() + divider.slice(1));
//};

const titleCased = () => {
  return tutorials.map( (tutorial) => {
      let arrayOfWords = tutorial.split(' ')
      let arrayOfTransformedWords = arrayOfWords.map( (word) => {  
        return finalWord = word.charAt(0).toUpperCase() + word.slice(1)
         
      })

      return arrayOfTransformedWords.join(' ')
  })
}