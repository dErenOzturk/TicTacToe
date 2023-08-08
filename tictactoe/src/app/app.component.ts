import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  next: string = 'X';
  result: string = '';
  winners:number[] = [];

  score:any[] = [
    {"name" : "X", "score" : 0},
    {"name" : "O", "score" : 0}
  ]


  games: string[] = ['', '', '', '', '', '', '', '', ''];

  setMark(index: number) {
    if (this.games[index] == '' && this.result == '') {
      this.games[index] = this.next;

      this.checkGameResult();

      this.checkIfGameFinish();

      if (this.result != "") {
        return;
      }

      if (this.next == 'X') {
        this.next = 'O';
      } else {
        this.next = 'X';
      }
    }
  }

  newGame() {
    this.next = "X";
    this.result = "";
    this.winners = [];
    for (let i = 0; i < this.games.length; i++) {
      this.games[i] = ""; 
    }
  }

  checkGameResult() {

    const winningPlayerIndex = this.next === 'X' ? 0 : 1;

    if(this.games[0] != "" && this.games[0] == this.games[1] && this.games[1] == this.games[2]) {
      this.result = `Oyunu ${this.next} kazandı!`;
      this.winners.push(0,1,2);
      this.score[winningPlayerIndex].score++;
    }
    else if(this.games[3] != "" && this.games[3] == this.games[4] && this.games[4] == this.games[5]) {
      this.result = `Oyunu ${this.next} kazandı!`;
      this.winners.push(3,4,5);
      this.score[winningPlayerIndex].score++;
    }
    else if(this.games[6] != "" && this.games[6] == this.games[7] && this.games[7] == this.games[8]) {
      this.result = `Oyunu ${this.next} kazandı!`;
      this.winners.push(6,7,8);
      this.score[winningPlayerIndex].score++;
    }
    else if(this.games[0] != "" && this.games[0] == this.games[3] && this.games[3] == this.games[6]) {
      this.result = `Oyunu ${this.next} kazandı!`;
      this.winners.push(0,3,6);
      this.score[winningPlayerIndex].score++;
    }
    else if(this.games[1] != "" && this.games[1] == this.games[4] && this.games[4] == this.games[7]) {
      this.result = `Oyunu ${this.next} kazandı!`;
      this.winners.push(1,4,7);
      this.score[winningPlayerIndex].score++;
    }
    else if(this.games[2] != "" && this.games[2] == this.games[5] && this.games[5] == this.games[8]) {
      this.result = `Oyunu ${this.next} kazandı!`;
      this.winners.push(2,5,8);
      this.score[winningPlayerIndex].score++;
    }
    else if(this.games[0] != "" && this.games[0] == this.games[4] && this.games[4] == this.games[8]) {
      this.result = `Oyunu ${this.next} kazandı!`;
      this.winners.push(0,4,8);
      this.score[winningPlayerIndex].score++;
    }
    else if(this.games[2] != "" && this.games[2] == this.games[4] && this.games[4] == this.games[6]) {
      this.result = `Oyunu ${this.next} kazandı!`;
      this.winners.push(2,4,6);
      this.score[winningPlayerIndex].score++;
    }
  }

  checkWinnerButtonClass(index:number) {
    if(this.winners.includes(index)) {
      return "btn btn-success buton";
    }
    else if (this.result == "Oyun berabere!!!") {
      return "btn btn-secondary buton";
    }
    else{
      return "btn btn-primary buton";
    }
  }

  checkIfGameFinish() {
    let isFinish:boolean = false;
    for (let i = 0; i < this.games.length; i++) {
      if(this.games[i] === "") {
        isFinish = false;
        break;
      }
      else {
        isFinish = true;
      }
    }

    if(isFinish && this.result === "") {
      this.result = "Oyun berabere!!!";
    }
  }

  checkResultClass() {
    if(this.result != "" && this.result == "Oyun berabere!!!"){
      return "alert alert-danger";
    }
    else {
      return "alert alert-success";
    }
  }
}
