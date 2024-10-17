var ameji = 0;
var mine = 0;
var mine1_cost = 30;

setInterval(update_counter, 50);
setInterval(update_ameji, 1000);

function update_counter(){
    let ameji_counter = document.getElementById("ameji_counter");
    ameji_counter.innerHTML = `${ameji} <font size="2">アメジ</font>`;
    let mine1_counter = document.getElementById("mine_counter");
    mine1_counter.innerHTML = `${mine} <font size="2">鉱山</font>`;
}

function update_mine1_cost(){
    let mine1_button = document.getElementById("mine1");
    mine1_button.innerHTML = `アメジ鉱山+1<br>${mine1_cost}アメジ`
}

function update_ameji(){
    ameji += mine;
}

function add_ameji(n = 1){
    ameji += n;
}

function add_mine(){
    if (ameji >= mine1_cost){
        ameji -= mine1_cost;
        mine += 1;
        mine1_cost *= 2;
        update_mine1_cost();
    }
    else{
        show_error();
    }
}

function show_error(){
    let err = document.getElementById("err");
    err.innerHTML = ("アメジが足りません。");
    setTimeout(function(){err.innerHTML = "";}, 2000);
}
