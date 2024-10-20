class Ameji{
    constructor(type = "ameji", name = "アメジ"){
        this.type = type;
        this.name = name;
        if (get_cookie(this.type) === undefined){
            set_cookie(this.type, 0);
        }
        this.number = parseInt(get_cookie(this.type));
        this.number = isNaN(this.number) ? 0 : this.number;
    }
    
    // 個数の表示を更新
    update_counter(){
        let counter = document.getElementById(this.type + "_counter");
        counter.innerHTML = `${this.number} <font size="2">${this.name}</font>`;
    }

    // 数を増やす
    add(n = 1){
        this.number += n
        this.update_counter();
        set_cookie('ameji', this.number);
    }
}