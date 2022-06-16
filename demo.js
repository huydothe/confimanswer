function processConfirm(answer){
    let result=" ";
    if(answer){
        result="Excellent.We will play a nice game chess.";
    }else{
        result="May be late then.";
    }return result;
}
let confirmAnswer= confirm("Shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);