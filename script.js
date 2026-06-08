let box1=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let body=document.querySelector("body")
let s=document.getElementById("win")

player0=true
contest1=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [2,5,8],
    [1,4,7],
    [3,6,9]
]

pranay=[]
i=0
pranayfuc=()=>{
    while (i<contest1.length){
        if (pranay[contest1[i][0]]!==" " && pranay[contest1[i][0]]===pranay[contest1[i][1]] && pranay[contest1[i][1]]===pranay[contest1[i][2]]){
            // console.log("player",pranay[contest1[i][0]] ,"Won") 
            if (pranay[contest1[i][0]]=="o"){
                // Background1="player O Won"
                
                s.innerText="player o Won";
            }
            else if (pranay[contest1[i][0]]=="X"){
                // Background1="player X Won"
                
                s.innerText="player X Won";
            }
        }       
    i+=1 
    }
    i=0

}
box1.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (player0==true){
            box.innerText="X";
            player0=false;
            box.disabled=true;
            pranay[box.id]="X";
            pranayfuc();
        }
        else{
            box.innerText="o";
            box.disabled=true;
            player0=true;
            pranay[box.id]="o";
            pranayfuc();
        }
    })
})


reset.addEventListener(("click"),()=>{
    pranay=[]
    box1.forEach((box)=>{
        box.disabled=false;
        box.innerText=" ";
        s.innerText="";


    })

}
)



console.log(pranay)
