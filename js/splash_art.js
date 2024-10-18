
function change_splash_art(){
    let champion_name = document.getElementById("champion_select").value;
    let img = document.getElementById("splash_art");
    let url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_name}_0.jpg`;

    img.src = url;
}