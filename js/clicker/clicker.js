if(get_cookie('ameji') === undefined){
    ameji = 0;
    set_cookie('ameji', 0);
}
if(get_cookie('mine1') === undefined){
    mine1 = 0;
    set_cookie('mine1', 0);
}
if(get_cookie('mine2') === undefined){
    mine2 = 0;
    set_cookie('mine2', 0);
}



var ameji = parseInt(get_cookie('ameji'));
ameji = isNaN(ameji) ? 0 : ameji;
var mine1 = parseInt(get_cookie('mine1'));
mine1 = isNaN(mine1) ? 0 : mine1;
var mine2 = parseInt(get_cookie('mine2'));
mine2 = isNaN(mine2) ? 0 : mine2;

var mine1_cost = 10*(1+mine1);
var mine2_cost = 1000*2**mine2;

update_counter();
update_mine1_cost();
update_mine2_cost();

setInterval(update, 1000);

function update_counter(){
    let ameji_counter = document.getElementById("ameji_counter");
    ameji_counter.innerHTML = `${ameji} <font size="2">アメジ</font>`;
    let mine1_counter = document.getElementById("mine1_counter");
    mine1_counter.innerHTML = `${mine1} <font size="2">アメジ鉱山</font>`;
    let mine2_counter = document.getElementById("mine2_counter");
    mine2_counter.innerHTML = `${mine2} <font size="2">アメジ鉱山発見機</font>`;
}

function update_mine1_cost(){
    let mine1_button = document.getElementById("mine1").getElementsByTagName("button")[0];
    mine1_button.innerHTML = `アメジ鉱山+1<br>${mine1_cost}アメジ`
}

function update_mine2_cost(){
    let mine2_button = document.getElementById("mine2").getElementsByTagName("button")[0];
    mine2_button.innerHTML = `アメジ鉱山発見機+1<br>${mine2_cost}アメジ`
}

function update(){
    mine1 += mine2;
    add_ameji(mine1);
    set_cookie('ameji', ameji);
    set_cookie('mine1', mine1);
    set_cookie('mine2', mine2);
}

function add_ameji(n = 1){
    ameji += n;
    update_counter();
}

function add_mine1(){
    if (ameji >= mine1_cost){
        add_ameji(-mine1_cost);
        mine1 += 1;
        mine1_cost = 10*(1+mine1);
        update_mine1_cost();
    }
    else{
        show_error("err1");
    }
}

function add_mine2(){
    if (ameji >= mine2_cost){
        add_ameji(mine2_cost);
        mine2 += 1;
        mine2_cost = 1000*2**mine2;
        update_mine2_cost();
    }
    else{
        show_error("err2");
    }
}

function show_error(id){
    let err = document.getElementById(id);
    err.innerHTML = ("アメジが足りません。");
    setTimeout(function(){err.innerHTML = "";}, 2000);
}
