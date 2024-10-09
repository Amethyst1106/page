
let select = document.getElementById("champions")
let champions = ["エイトロ", "ジグス", "スカーナー", "ブランド"]
for (let champion of champions) {
    let option = document.createElement("option");
    option.text = champion;
    option.value = champion;
    select.appendChild(option);
}