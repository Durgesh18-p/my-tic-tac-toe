const  playersInput = document.querySelectorAll('#para')
let boxes = document.querySelectorAll("#field")
const resetBtn = document.querySelector('#btn')
let turn = "X";

Array.from(playersInput).forEach(element =>{
    element.addEventListener('click',function(){
        console.log(element)
        element.innerText = turn;
        turn = changeTurn()
        document.querySelector('#winner').innerText = turn + "'s turn";
        checkWin()
    })
})

const changeTurn = ()=>{

    return turn === "X"? "0": "X";
}

function checkWin(){
        const winArray = [
            [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
        winArray.forEach((e) =>{
            if((boxes[e[0]].innerText === boxes[e[1]].textContent) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText !== '')){
                document.querySelector('#winner').innerText = boxes[e[0]].innerText + " won";
                // document.getElementById("info")[0].textContent = "";  
            }
    })
}

resetBtn.addEventListener('click',function(){
    Array.from(playersInput).forEach(element =>{
        element.innerText = ''
    })
    document.querySelector('#winner').innerText = "";
})


