// timestampを作成する関数
const getTime = function (){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let milisecond = today.getMilliseconds();
    let now_time = year + "-" + month + "-" + day + "-" + hour + ":" + minute + ":" + second + "." + milisecond
    console.log(now_time)
    return now_time
}
// // サーバーに値を送信する
// function sendDataProcedure(data) {
//     fetch("url", data)
// }
// // フォーカスがあたっているか？
// var onFocused = false;
// // サーバーにデータを送信する関数
function sendingData(area_data) {
        // フォーカスが当たっているテキストエリアのidを取得する
        const area_id = area_data.id
        // テキストエリアの親のidを取得する
        const task_id = area_data.parentElement.id
        // テキストエリアの中身を取得する
        const textData = area_data.value
        //timestampを取得
        const timeStamp = getTime()
        //使うかわからんが、document idを取得する
        const docId = document.getElementById('document-id').innerText
        //ワークシート名を取得する
        const sheet_name = document.getElementById('title').innerText

        console.log(task_id)
        console.log(area_id)
        console.log(textData)
        console.log(timeStamp)
        console.log(docId)
        console.log(sheet_name)
        //sendDataProcedure(textData)
    // }
}
//
// var tmpOnFocused = false
// // リアルタイムの状況を送信する関数
// function sendingRealTimeData() {
//     // もしフォーカスがあたっていればデータを送信
//     if (tmpOnFocused !== onFocused) {
//         tmpOnFocused = onFocused
//         sendDataProcedure(onFocused)
//     }
// }

window.addEventListener("load", main, false);

function main(e) {
    //setInterval(sendingRealTimeData, 1000);
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        // テキストエリアの数が1より大きくなったら　
        if (document.getElementsByTagName("textarea").length >1) {
            elements = document.getElementsByTagName("textarea")
            btn_item = document.getElementsByClassName('addButton ui-btn ui-icon-plus ui-btn-icon-left ui-btn-inline ui-shadow ui-corner-all ui-mini');
            clearInterval(jsInitCheckTimer);  //定期実行をやめる


            for (let i=0; i<btn_item.length; i++){
                // 段落追加ボタンが押されたら実行されるはず
                btn_item[i].addEventListener('click', function (){
                    elements = document.getElementsByTagName("textarea");
                    console.log(elements.length);
                    for (var i = 0; i < elements.length; i++) {
                        let now_texterea = document.getElementById(elements[i].id); //elements[i].idを格納しておく
                        console.log(elements.length);

                        // 新しく生成された要素にはまだフォーカスが当たっておらず関数が割り当てられていないので、
                        // フォーカスがあたった時にしてほしい動作をここで発火させる。
                        if (document.activeElement.id === elements[i].id) {
                            console.log(`${elements[i].id}で\nフォーカスゲットしてます`);
                            sendingData(now_texterea)
                        }
                        // テキストエリアにフォーカスが当たっている時の処理
                        now_texterea.onfocus = function() {
                            console.log('フォーカスゲットしてます');
                            sendingData()
                        }
                        // テキストエリアからフォーカスが外れた時の処理
                        now_texterea.onblur = function (){
                            console.log('フォーカスなくなりました')
                            sendingData(now_texterea)
                        }
                    }
                })
            }
            for (i = 0; i < elements.length; i++) {
                let now_textarea = document.getElementById(elements[i].id); //elements[i].idを格納しておく
                console.log(elements.length);

                now_textarea.onfocus = function (){
                    console.log('フォーカスゲットしてます');
                    sendingData(now_textarea)
                }
                // テキストエリアからフォーカスが外れた時の処理
                now_textarea.onblur = function (){
                    console.log('フォーカスなくなりました')
                    sendingData(now_textarea)
                }
            }
        }
    }
}



