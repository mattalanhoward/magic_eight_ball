const userName = 'John'
const userQuestion = 'What time is it?'
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = ''

userName ?
  console.log('Hello, ' + userName + '!'):
  console.log('Hello!');


userQuestion ?
  console.log(userName + "'s question is ... " + userQuestion):
  console.log('Please enter a question')

switch (randomNumber) {
      case (randomNumber = 0):
        eightBall = 'It is certain';
        break;
       
      case (randomNumber = 1):
        eightBall = 'It is decidedly so';
        break;
        
      case (randomNumber = 2):
        eightBall = 'Reply hazy try again';
        break;
      
      case (randomNumber = 3):
        eightBall = 'Cannot predict now';
        break;
       
      case (randomNumber = 4):
        eightBall = 'Do not count on it';
        break;
        
      case (randomNumber = 5):
        eightBall = 'My sources say no';
        break;
    
      case (randomNumber = 6):
        eightBall = 'Outlook not so good';
        break;
    
      case (randomNumber = 7):
        eightBall = 'Signs point to yes';
      
  default:
    console.log('no answer')
  
}
       

console.log(eightBall);
