import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
// import { Console } from 'console';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  width: number;
  height: number;
  spirtes: number[];
  playerPosition: number;
  stepCounter: number;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.readData("Enter Board Width").subscribe(result => {
      this.width = result;
      this.readData("Enter Board Height").subscribe(result => {
        this.stepCounter = 0;
        this.spirtes = [];
        this.height = result;
        this.spirtes = this.getSpritePositions();
        this.playerPosition = this.getPlayerPositions();
        let that = this;
        document.onkeydown = (e) => {
          event = e || window.event;
          console.log(e.keyCode);
          switch (e.keyCode) {
            case 38://Up Arrow
              that.newPosition("UP");
              break;
            case 40://Down Arrow
              that.newPosition("DOWN");
              break;
            case 37://left Arrow
              that.newPosition("LEFT");
              break;
            case 39://right Arrow
              that.newPosition("RIGHT");
              break;
          }
        };
      });
    });
  }

  newPosition(direction) {
    var newPosition: number = -1;
    switch (direction) {
      case "UP"://Up Arrow
        newPosition = this.playerPosition - this.width;
        break;
      case "DOWN"://Down Arrow
        newPosition = this.playerPosition + this.width;
        break;
      case "LEFT"://left Arrow
        newPosition = this.playerPosition - 1;
        break;
      case "RIGHT"://right Arrow
        newPosition = this.playerPosition + 1;
        break;
    }

    if (newPosition >= 0 && newPosition < (this.width * this.height)) {
      this.playerPosition = newPosition;
      this.stepCounter += 1;
      let index = this.spirtes.findIndex(x => x == this.playerPosition);
      if (index != -1) {
        this.spirtes.splice(index, 1);
      }

      if (this.spirtes.length == 0) {
        alert(`Game Over. Total moves to save prices: ${this.stepCounter}`);
      }
    }
  }

  checkIfExists(value) {
    return this.spirtes.findIndex(x => x == value) != -1;
  }

  getPlayerPositions() {
    let max = (this.width * this.height / 2) + this.width;
    let min = (this.width * this.height / 2) - this.width;
    var position = 0;
    while (position == 0) {
      let pos = Math.floor(Math.random() * (max - min) + min);
      if (this.spirtes.findIndex(x => x == pos) == -1)
        position = pos;
    }

    return position;
  }

  getSpritePositions() {
    let spritesCount = Math.floor((this.width + this.height) / 2);
    var positions = [];
    while (positions.length < spritesCount) {
      let randNumber = Math.floor(Math.random() * (this.width * this.height - 0) + 0);
      let ind = positions.findIndex(x => x == randNumber)
      if (ind == -1) {
        positions.push(randNumber);
      }
    }

    return positions;
  }

  openDialog(): void {

  }

  readData(displayMessage: string) {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data: displayMessage,
      disableClose: true
    });

    return dialogRef.afterClosed();
  }

  counter(i: number) {
    return new Array(i);
  }
}

