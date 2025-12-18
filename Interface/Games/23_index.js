let comchoice
let playerchoice
let you = document.querySelector(".Player")
let com = document.querySelector(".com")
let headline = document.querySelector(".headlines")
let rnnum = Math.ceil(Math.random()*3)
document.querySelectorAll("button").forEach(e =>{
    e.addEventListener("click",()=>{
        const value = e.getAttribute("data-value");
        if(value=="Rock"){
            playerchoice = "Rock"
            you.append(playerchoice)
        }
        else if(value=="Paper"){
            playerchoice = "Paper"
            you.append(playerchoice)
        }
        else if(value=="Scisor"){
            playerchoice = "Scisor"
            you.append(playerchoice)
        }
        // else{
        //     location.reload()
        // }
        // Function
        if(rnnum==1){
            comchoice = "Rock"
            com.append(comchoice)
        }
        else if(rnnum==2){
            comchoice = "Paper"
            com.append(comchoice)
        }
        else if(rnnum==3){
            comchoice = "Scisor"
            com.append(comchoice)
        }
        
        if(comchoice==playerchoice){
            headline.innerHTML = "Draw!!"
        }
        else if(comchoice=="Rock" && playerchoice=="Paper"){
            headline.textContent = "Player Wins!"
        }
        else if(comchoice=="Rock" && playerchoice=="Scisor"){
            headline.textContent = "Computer Wins!"
        }
        else if(comchoice=="Paper" && playerchoice=="Rock"){
            headline.textContent = "Computer Wins!"
        }
        else if(comchoice=="Paper" && playerchoice=="Scisor"){
            headline.textContent = "Player Wins!"
        }
        else if(comchoice=="Scisor" && playerchoice=="Rock"){
            headline.textContent = "Player Wins!"
        }
        else if(comchoice=="Scisor" && playerchoice=="Paper"){
            headline.textContent = "Computer Wins!"
        }
        else{
            alert("something wents wrong..")
        }
        setTimeout(() => {
            location.reload()
        }, 1500);
    })
})
