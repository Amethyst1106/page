let ameji = new Ameji();
let mine1 = new Mine(type = "mine1", name = "アメジ鉱山", first_cost = 20, cost_func = function(n){return 10*(1+n);}, ameji);
let mine2 = new Mine(type = "mine2", name = "アメジ鉱山発見機", first_cost = 1000, cost_func = function(n){return 1000*2**n;}, ameji);

let mines = [mine1, mine2]


update_counter_cost();
setInterval(frame, 1000);

// 毎秒の処理
function frame(){
    ameji.add(mines[0].number);
    for(let i = 0; i < mines.length-1; i++){
        if(mines[i+1].number > 0){
            mines[i].add(mines[i+1].number);
        }
    }
}

function update_counter_cost(){
    ameji.update_counter();
    for(let mine of mines){
        mine.add_cost();
        mine.update_cost();
        mine.update_counter();
    }
}

function add_ameji(){
    ameji.add();
}

function buy_mine(i = 1){
    mines[i-1].buy();
}