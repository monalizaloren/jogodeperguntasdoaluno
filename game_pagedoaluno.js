// Você deverá pegar o item 'player1Name' que está dentro do localStorage e guardar dentro da variável
    player1Name = ???.getItem("player1Name");
	player2Name = ???;

	player1Score = ???;// defina a pontuação inicial 
    ???

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;


function send() {
	getWord = document.getElementById("word").value;
    //utilize o código que retorna o valor da string que foi chamada convertido para minúsculo.
	word = getWord.???();
    // 'charAt'retorna uma parte da string, começando no índice especificado
    charAt1 = word.???(1);

    //Na linha 26 você está divindo o comprimento da palavra por 2 e esse número será o índice(posição) da letra que aparecerá. Utilize o código 'lenght' para obter o comprimento da palavra
	lenghtDivide2 = Math.floor(word.???/2);
	charAt2 = word.charAt(lenghtDivide2);

    lenghtMinus1 = word.??? - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
    
    //O código 'replace' substitui a letra, pelo caractere '_', na posição chartAt
    removeCharAt1 = word.???(charAt1, "_");
    removeCharAt2 = removeCharAt1.???(charAt2, "_");
    removeCharAt3 = removeCharAt2.???(charAt3, "_");


    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;

    //utilize o código que retorna o valor da string que foi chamada convertido para minúsculo.
	answer = getAnswer.???();

    //Se resposta for igual a palavra, ou seja se answer for igual word
	if(??? == ???)	
	{
		if(answerTurn == "player1")
		{
            //Adicione a pontuação
			player1Score = player1Score +???;
            //Variável que guarda a pontuação do primeiro jogador
		    document.getElementById("player1Score").innerHTML = ???;
		}
		else 
		{
            //Else significa 'senão', então se o primeiro jogador não acertar, o segundo jogador, ganhará um ponto
			player2Score = ???
            //Variável que guarda a pontuação do segundo jogador
		    document.getElementById("player2Score").innerHTML = ???;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}