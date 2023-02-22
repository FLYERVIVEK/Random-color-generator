const change = () =>{
    const randomnum = Math.floor(Math.random() * 16777215);
    const randomhex = "#" + randomnum.toString(16);
    document.body.style.backgroundColor = randomhex;
    document.getElementById("color").innerText = randomhex;

    navigator.clipboard.writeText(randomhex);
}
document.getElementById("btn").addEventListener("click", change);
change();