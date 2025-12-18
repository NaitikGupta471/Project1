let you = document.querySelector(".Player")
let com = document.querySelector(".com")
let headline = document.querySelector(".headlines")

document.querySelectorAll("button").forEach(e =>{
    e.addEventListener("click", ()=>{
        // Disable all buttons after click
        document.querySelectorAll("button").forEach(b => b.disabled = true);

        const value = e.getAttribute("data-value");
        let playerchoice;
        let comchoice;

        // Player choice
        if(value=="Rock"){
            playerchoice = "Rock"
        }
        else if(value=="Paper"){
            playerchoice = "Paper"
        }
        else if(value=="Scissor"){
            playerchoice = "Scissor"
        }

        you.textContent = "You Choose: " + playerchoice

        // Computer choice (new random number per click)
        let rnnum = Math.ceil(Math.random()*3)
        if(rnnum==1){
            comchoice = "Rock"
        }
        else if(rnnum==2){
            comchoice = "Paper"
        }
        else if(rnnum==3){
            comchoice = "Scissor"
        }

        com.textContent = "Computer Chooses: " + comchoice

        // Decide winner
        if(comchoice==playerchoice){
            headline.textContent = "Draw!!"
        }
        else if(comchoice=="Rock" && playerchoice=="Paper"){
            headline.textContent = "Player Wins!"
        }
        else if(comchoice=="Rock" && playerchoice=="Scissor"){
            headline.textContent = "Computer Wins!"
        }
        else if(comchoice=="Paper" && playerchoice=="Rock"){
            headline.textContent = "Computer Wins!"
        }
        else if(comchoice=="Paper" && playerchoice=="Scissor"){
            headline.textContent = "Player Wins!"
        }
        else if(comchoice=="Scissor" && playerchoice=="Rock"){
            headline.textContent = "Player Wins!"
        }
        else if(comchoice=="Scissor" && playerchoice=="Paper"){
            headline.textContent = "Computer Wins!"
        }
        else{
            alert("Something went wrong..")
        }

        // Reload after 1.5 seconds
        setTimeout(() => {
            location.reload()
        }, 1500);
    })
})