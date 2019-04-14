const DEFAULT_ROWS = 20;
const DEFAULT_COLS = 20;
let boardSize = document.getElementById('main').clientWidth = window.innerHeight -50;
function Box(x,y) {
    this.x = x;
    this.y = y;
    this.getHtml = function () {
        let boxHtml = '<div class="box" id="box'+x + '-' + y +'" onclick="newGameBoard.play('+x+','+y+','+'this);"></div>';
        return boxHtml
    }
}
function GameBoard(rows,cols) {
    this.rows =rows;
    this.cols = cols;
    this.boxes = [];
    this.player = 'X';
    this.isGameOver = false;
    this.index=[];
    this.showMessage = function (message) {
        document.getElementById('message').innerHTML = message;
    };
    this.endGame = function (index) {
        if (index.length >=5) {
            this.isGameOver = true;
            for (i=0;i<index.length;i++) {
                document.getElementById('box' + index[i]).style = "background: crimson";
            }
            this.showMessage('Congrats Winner is' + this.player);
        }
    };
    this.createGameBoard = function () {
        let gameBoard = document.getElementById('main');
        for (i=0;i<this.rows;i++){
            let row = [];
            this.boxes.push(row);
            for (j=0;j<this.cols;j++){
                let box = new Box(i,j);
                row.push(box);
                gameBoard.innerHTML += box.getHtml();
            } 
        }
    };
    this.resetGame = function () {
        for (i=0;i<this.rows;i++){
            for (j=0;j<this.cols;j++){
                this.boxes[i][j].value = '';
                document.getElementById('box' + i + '-' + j).innerHTML = '';
                document.getElementById('box' + i + '-' + j).style.background ='';
                this.isGameOver = false;
                this.showMessage('Play')
            }
        }
    };
    this.play=function (x,y,e) {
         if (e.innerHTML===''&& !this.isGameOver) {
             switch (this.player) {
                 case 'X':
                     this.player = 'O';
                     this.boxes[x][y].value = this.player;
                     this.checkWinner(x,y,this.player);
                     if (!this.isGameOver){
                        this.nextPlayer = 'X';
                        this.showMessage(this.nextPlayer + " Turn Now");
                     }
                     break;
                 case 'O':
                     this.player = 'X';
                     this.boxes[x][y].value = this.player;
                     this.checkWinner(x,y,this.player);
                     if (!this.isGameOver){
                        this.nextPlayer = 'O';
                        this.showMessage(this.nextPlayer + " Turn Now");
                     }
                     break;
             }
             e.innerHTML = this.player;
         }
    };
    this.checkWinner = function (x,y,player) {
        checkRow.call(this);
        checkColumn.call(this);
        checkSecondDiagonal.call(this);
        checkFirstDiagonal.call(this);
        this.endGame(this.index);
        function checkRow() {
            var i = 1;
            var count = 1;
            var rowIndex = [x+'-'+y];
            while ((y + i) < this.cols && this.boxes[x][y + i].value === player) {
                rowIndex.push(x+'-'+(y+i));
                i++;
                count++;
            }
            i = 1;
            while ((y-i)>=0 && this.boxes[x][y-i].value === player){
                rowIndex.push(x+'-'+(y-i));
                i++;
                count++;
            }
            if (count>=5) this.index = this.index.concat(rowIndex);
        }
        function checkColumn() {
            var i = 1;
            var count = 1;
            var columnIndex = [x+'-'+y];
            while ((x + i) < this.rows  && this.boxes[x + i][y].value === player) {
                columnIndex.push(''+(x+i)+'-'+y);
                i++;
                count++;
            }
            i = 1;
            while ((x-i)>=0 && this.boxes[x-i][y].value === player){
                columnIndex.push(''+(x-i)+'-'+y);
                i++;
                count++;
            }
            if (count>=5) this.index = this.index.concat(columnIndex);
        }

        function checkFirstDiagonal() {
            var count = 1;
            var i = 1;
            var j = 1;
            var firstDiagonalIndex = [x+'-'+y];
            while ((y + i < this.cols) && (x + i < this.rows) && this.boxes[x + i][y + i].value === player) {
                firstDiagonalIndex.push(''+(x+i)+'-'+(y+i));
                count++;
                i++;
            }
             i = 1;
            while ((x - i >= 0) && (y - j >= 0) && this.boxes[x - i][y - i].value === player) {
                firstDiagonalIndex.push(''+(x-i)+'-'+(y-i));
                count++;
                i++;

            }
            if (count>=5) this.index = this.index.concat(firstDiagonalIndex);
        }

        function checkSecondDiagonal() {
            var count = 1;
            var i = 1;
            var secondDiagonalIndex = [x+'-'+y];
            while ((y + i < this.cols) && (x - i >= 0) && this.boxes[x - i][y + i].value === player) {
                secondDiagonalIndex.push(''+(x-i)+'-'+(y+i));
                count++;
                i++;
            }
            i = 1;
            while ((y - i >= 0) && (x + i < this.rows) && this.boxes[x + i][y - i].value === player) {
                secondDiagonalIndex.push(''+(x+i)+'-'+(y-i));
                count++;
                i++;
            }
            if (count>=5) this.index = this.index.concat(secondDiagonalIndex);
        }

    }
}
function start() {
    newGameBoard = new GameBoard(DEFAULT_ROWS,DEFAULT_COLS);
    newGameBoard.createGameBoard()
}
start();

