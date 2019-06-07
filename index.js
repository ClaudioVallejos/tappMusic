window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const colors =[
        "#4810CC",
        "#FFC96E",
        "#6C5999",
        "#CCA57E",
        "#2E60FF",
        "#CC10CC"
    ]

console.log(sounds);
    //hacer sonar los sonidos sonorificos sonantes
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function (){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        })
    });

    //hacer las pelotitas saltarinas :v
    const createBubble = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
    } 
        
    });
})