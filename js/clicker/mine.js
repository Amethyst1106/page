class Mine{
    constructor(type = "mine1", name = "アメジ鉱山", first_cost = 0, cost_func, ameji){
        this.type = type;
        this.name = name;
        if (get_cookie(this.type) === undefined){
            set_cookie(this.type, 0);
        }
        this.number = parseInt(get_cookie(this.type));
        this.number = isNaN(this.number) ? 0 : this.number;
        this.cost_func = cost_func;
        this.cost = first_cost;
        this.ameji = ameji;
    }
    
    // 個数の表示を更新
    update_counter(){
        let counter = document.getElementById(this.type + "_counter");
        counter.innerHTML = `${this.number} <font size="2">${this.name}</font>`;
    }
    
    // 表示コストを更新
    update_cost(){
        let buy_button = document.getElementById(this.type).getElementsByTagName("button")[0];
        buy_button.innerHTML = `${this.name}+1<br>${this.cost}アメジ`;
    }

    // 数を増やす
    add(n = 1){
        this.number += n
        this.add_cost();
        this.update_cost();
        this.update_counter();
        set_cookie(this.type, this.number);
    }

    // アップグレード
    buy(n = 1){
        if (this.ameji.number >= this.cost * n){
            this.ameji.add(-this.cost * n);
            this.add(n);
        }
        else{
            this.show_error();
        }
    }


    // コストを増やす
    add_cost(){
        this.cost = this.cost_func(this.number);
    }

    show_error(){
        let err = document.getElementById(this.type + "_err");
        err.innerHTML = ("アメジが足りません。");
        setTimeout(function(){err.innerHTML = "";}, 2000);
    }
}

