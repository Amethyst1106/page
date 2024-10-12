
let select = document.getElementById("champion_select");
let champion_names_url = "https://ddragon.leagueoflegends.com/cdn/14.20.1/data/ja_JP/champion.json";

// 実行部分
fetchJsonData(champion_names_url)
    .then(data => {
        let champion_names = get_champion_names(data);
        add_select_champion(champion_names);
    });

// selectにチャンピオン名と値を設定
function add_select_champion(champion_names){
    for (let champion_key  in champion_names) {
        let champion = champion_names[champion_key];
        let option = document.createElement("option");
        option.text = champion["name_jp"];
        option.value = champion["name_en"];
        select.appendChild(option);
    }
    change_img();
}

// urlからjsonを取得
async function fetchJsonData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

// jsonからチャンピオンの英名と日本名の辞書を取得
function get_champion_names(json_data){
    let champion_names = new Object();
    let champions = json_data.data
    for(let champion_key of Object.keys(champions)){
        let champion = champions[champion_key];
        champion_names[champion_key] = {};
        champion_names[champion_key]["name_en"] = champion.id;
        champion_names[champion_key]["name_jp"] = champion.name;
    }

    return champion_names;
}

