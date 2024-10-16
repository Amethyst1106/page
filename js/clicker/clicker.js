﻿if(get_cookie('ameji') === undefined){
    ameji = 0;
    set_cookie('ameji', 0);
}
if(get_cookie('mine1') === undefined){
    mine1 = 0;
    set_cookie('mine1', 0);
}

var ameji = parseInt(get_cookie('ameji'));
ameji = isNaN(ameji) ? 0 : ameji;
var mine1 = parseInt(get_cookie('mine1'));
mine1 = isNaN(mine1) ? 0 : mine1;
var mine1_cost = 30*2**mine1;

update_counter();
update_mine1_cost();

setInterval(update_counter, 50);
setInterval(update_ameji, 1000);

function update_counter(){
    let ameji_counter = document.getElementById("ameji_counter");
    ameji_counter.innerHTML = `${ameji} <font size="2">アメジ</font>`;
    let mine1_counter = document.getElementById("mine_counter");
    mine1_counter.innerHTML = `${mine1} <font size="2">鉱山</font>`;
}

function update_mine1_cost(){
    let mine1_button = document.getElementById("mine1");
    mine1_button.innerHTML = `アメジ鉱山+1<br>${mine1_cost}アメジ`
}

function update_ameji(){
    ameji += mine1;
    set_cookie('ameji', ameji);
    set_cookie('mine1', mine1);
}

function add_ameji(n = 1){
    ameji += n;
}

function add_mine(){
    if (ameji >= mine1_cost){
        ameji -= mine1_cost;
        mine1 += 1;
        mine1_cost = 30*2**mine1;
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
