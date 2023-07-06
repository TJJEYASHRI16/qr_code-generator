/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//imports 
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

//question object
const questions = [{
    type:'input',
    name:'URL',
    message: "Enter the URL"

  }];

//inquirer prompt
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("Your response is "+answers.URL);
    //generates qr code
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('URL.png'));
    fs.writeFile("url.txt",answers.URL,(err) =>{
        if(err) throw err;
        console.log("Success !");
    })
  })
  .catch((error) => {
   
     console.log("Error");
    }
  );



 