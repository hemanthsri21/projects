
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('users') || '[]');
  userName: string | null = null;
  generate: string = '';
  tryInput: string | null = null;
  guessArray: string[][] = [];

  constructor(private route: Router) {}

  onBlur(event: any) {
    const input = event.target;
    if (!input.value) {
      input.focus();
    }
  }
  

  ngOnInit() {
    this.generate = this.generateNumber();
  }

  startNewGame() {
    if (this.userName) {
      this.users.push({
        userName: this.userName,
        try: 0,
      });
    }
  }


  validate() {
    if (this.tryInput) {
      let tryInputArray = this.tryInput.split('');
      let generateArray = this.generate.toString().split('');
      let guess = ['*', '*', '*', '*'];

      for (let generateIndex = 0; generateIndex < generateArray.length; generateIndex++) {
        for (let tryInputIndex = 0; tryInputIndex < tryInputArray.length; tryInputIndex++) {
          if (generateArray[generateIndex] == tryInputArray[tryInputIndex] && generateIndex == tryInputIndex) {
            console.log('generateArrayIndex', generateIndex);
            console.log('tryInputArrayIndex', tryInputIndex);
            console.log('+');
            guess[tryInputIndex] = '+';
            break;
          } else if (generateArray[generateIndex] == tryInputArray[tryInputIndex] && generateIndex != tryInputIndex) {
            console.log('generateArrayIndex', generateIndex);
            console.log('tryInputArrayIndex', tryInputIndex);
            console.log('-');
            guess[tryInputIndex] = '-';
            break;
          }
        }
      }

      console.log('guess', guess);
      this.guessArray.push(guess)

      if (this.tryInput == this.generate) {
        alert('Mission completed');
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({
          userName: this.userName,
          try: this.guessArray.length + 1,
        });
        localStorage.setItem('users', JSON.stringify(users));
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
        this.guessArray = [];
        this.tryInput = null;
      }
    }
  }

  generateNumber() {
    let exists = [];
    let randomNumber: any;
    let collection = '';
    for (let i = 0; i < 4; i++) {
      do {
        randomNumber = Math.floor(Math.random() * 9);
      } while (exists[randomNumber]);
      exists[randomNumber] = true;
      collection = collection.concat(randomNumber.toString());
      console.log(randomNumber);
      
    }
    return collection;
  }

  getLeastTries(): number {
    let leastTries = Infinity;
    for (const user of this.users) {
      if (user.try < leastTries) {
        leastTries = user.try;
      }
    }
    return leastTries;
  }
  
//   time() {
//  let seconds= 0;
 
//  setInterval(MyTime , 1000);
 
//  myTime(){
//   ++seconds
//   docume
//  }


}

