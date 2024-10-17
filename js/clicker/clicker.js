var ameji = 0;
var mine = 0;

setInterval(update_counter, 50);
setInterval(update_ameji, 1000);

function update_counter(){
    let ameji_counter = document.getElementById("ameji_counter");
    ameji_counter.innerHTML = `${ameji} <font size="2">アメジ</font>`;
    let mine_counter = document.getElementById("mine_counter");
    mine_counter.innerHTML = `${mine} <font size="2">鉱山</font>`;
}

function update_ameji(){
    ameji += mine;
}

function add_ameji(n = 1){
    ameji += n;
}

function add_mine(n = 1){
    mine += n;
}