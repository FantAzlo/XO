{
        let gameField = []
        for (i = 0; i < 3; i++){
            gameField[i] = []
            for (j = 0; j < 3; j++){
                gameField[i][j] = 0
            }
        }

        function setX(id) {
            let gameButton = document.getElementById(id)
            if (gameButton.children.length === 0) {
                let img = document.createElement("img")
                img.src = "/Image/X.png"
                img.width = 90
                img.height = 90
                gameButton.appendChild(img)
                gameButton.setAttribute("disabled", true)
                gameField[id[2]][id[3]] = 1

                if ((checkWin()!==1)&&(checkWin()!==2)&&(checkWin() !== 4)) setO()
            }

            function setWinPanel(str,color){
                let field = document.getElementById("GameField")
                let winText = document.createElement("p")
                winText.setAttribute('class', "WinText")
                winText.setAttribute('onclick', "location.reload()")
                winText.innerText = str
                winText.style.backgroundColor = color
                field.appendChild(winText)
                makeDis()
            }
            if (checkWin() === 1) setWinPanel( "You are winner! \nClick here to restart.", "greenyellow")
            if (checkWin() === 2) setWinPanel( "You are looser! \nClick here to restart.", "red")
            if (checkWin() === 4) setWinPanel( "It's a draw! \nClick here to restart.", "yellow")
        }

        function setO(){
            let x, y, gB = 4
            while (gB !== 0){
                x = getRandomInt(3)
                y = getRandomInt(3)
                gB = gameField[x][y]
            }
            gameField[x][y] = 2
            let id = "GB" + x + y
            let gameButton = document.getElementById(id)
            let img = document.createElement("img")
            img.src = "/Image/O.png"
            img.width = 90
            img.height = 90
            gameButton.appendChild(img)
            gameButton.setAttribute("disabled", true)
        }
        function checkWin(){
            for (i=0;i<3;i++){
                if ((gameField[i][0] !== 0)&&(gameField[i][0] === gameField[i][1])&&(gameField[i][1] === gameField[i][2])){
                    return gameField[i][0]
                }
            }//???? Y
            for (i=0;i<3;i++){
                if ((gameField[0][i] !== 0)&&(gameField[0][i] === gameField[1][i])&&(gameField[1][i] === gameField[2][i])){
                    return gameField[0][i]
                }
            }//???? X
            if ((gameField[0][0] !== 0)&&(gameField[0][0] === gameField[1][1])&&(gameField[1][1] === gameField[2][2])){
                return gameField[0][0]
            }//???? 1???? ??????????????????
            if ((gameField[0][2] !== 0)&&(gameField[0][2] === gameField[1][1])&&(gameField[1][1] === gameField[2][0])){
                return gameField[0][2]
            }//???? 2???? ??????????????????
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    if (gameField[i][j] === 0) return 3
                }
            }//???????????????? ???? ??????????
            return 4
        }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function makeDis() {
        for (i = 0; i < 3; i++){
            for(j = 0; j < 3; j++){
                document.getElementById("GB"+i+j).setAttribute("disabled", true)
            }
        }
    }