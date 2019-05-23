

// 宣告正確答案：ary_Answer
ary_Answer = [];

// 輸入值存成array
ary_input = [];

// 設定猜題次數
var guessTimes = 0;

// 判斷0~9為A(位置正確、數字正確)的出現次數，設為hash
// 還不是很會用hash及其method，等會用再把array改成hash
// hashA = [{'0': 10 }, {'1': 20 }, {'2': 0 }, {'3': 0 }, {'4': 0 }];

// A(位置正確、數字正確)次數
ary_A_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            // 0  1  2  3  4  5  6  7  8  9

// ary_input中0~9各出現幾次，設為array
ary_input_0to9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            // 0  1  2  3  4  5  6  7  8  9

// ary_Answer中0~9各出現幾次，設為array
ary_Answer_0to9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            // 0  1  2  3  4  5  6  7  8  9

//比對input與answer中0~9的出現次數，取較小值，存成array
ary_Ans_inp_min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            // 0  1  2  3  4  5  6  7  8  9

// B(位置錯誤、數字正確)次數
ary_B_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            // 0  1  2  3  4  5  6  7  8  9


// 統計每次輸入後的結果，設成記錄：幾A幾B。
// 統計每次結果，各數字A次數的總和，例  result_A = [1,2,3]
//                                          [第一次輸入,第二次,第三次]
record_A = [];

// 統計每次結果，各數字A次數的總和，例  record_B = [2,1,2]
//                                          [第一次輸入,第二次,第三次]
record_B = [];

// 統計當次結果，各數字A次數的總和，初始值為0。由ary_A_times轉換而來。
var sum_A = 0;

// B的總次數初始值設為0。由ary_B_times轉換而來。
var sum_B = 0;

// 輸出至頁面上的"正確數字"字串(四個數字，沒有逗點)，由ary_Answer 轉換而成
var num_A = "";
// 輸出至頁面上的"玩家輸入值"字串(四個數字，沒有逗點)，由ary_input 轉換而成
var num_B = "";

// 玩家輸入數字送出後，顯示結果在table中的第幾行，初始值為0，每送出一次，則+1
var table_row_write = 0;

// ------------------------------------------------------------------------
// 遊戲一開始：
// 以亂數產生ary_Answer
// 使用時機：1.遊戲一開始  2.玩家挑戰成功後，玩家選擇繼續挑戰    3.玩家超過挑戰次數後沒答對，仍想繼續挑戰
function produceAnswer() {
    for (i = 0; i < 4; i++) {
        ary_Answer[i] = Math.floor(Math.random() * 10);
        console.log(ary_Answer[i]);
    }
    console.log(`正確答案為${ary_Answer}`);

    for (i = 0; i < 4; i++) {
        num_A += ary_Answer[i];
    }
    console.log(`正確答案為：${num_A}`);  
}

// 產生正確答案4個數字
produceAnswer();


// 開始遊戲
// function startGame() {
//     // 生成answer
//     produceAnswer();
//     document.getElementById('left_top_div').style.display = "block";
//     document.getElementById('left_bottom_div').style.display = "block";
//     document.getElementById('right_div').style.display = "block";
// }


// 清空input裡的數字
function clearInput() {   
    for (i = 0; i < 4; i++) {
        document.getElementById(`input_text${i}`).value = "";
    }    
}


// 在此輪猜題遊戲中，每次玩家輸入後要清空的變數
function clearVariable() {
    // 輸入值存成array
    ary_input = [];

    // A(位置正確、數字正確)次數
    ary_A_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9

    // ary_input中0~9各出現幾次，設為array
    ary_input_0to9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9

    //比對input與answer中0~9的出現次數，取較小值，存成array
    ary_Ans_inp_min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9

    // B(位置錯誤、數字正確)次數
    ary_B_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9

    // 統計當次結果，各數字A次數的總和，初始值為0。由ary_A_times轉換而來。
    sum_A = 0;

    // 統計當次結果，B的總次數初始值設為0。由ary_B_times轉換而來。
    sum_B = 0;

    // 統計當次結果，輸出至頁面上的"玩家輸入值"字串(四個數字，沒有逗點)，由ary_input 轉換而成
    num_B = "";

}

// 於此輪遊戲結束後，要繼續玩時，要清空的變數
function clearVariable_record() {
    // 宣告正確答案：ary_Answer
    ary_Answer = [];

    // 輸入值存成array
    ary_input = [];

    // 設定猜題次數
    guessTimes = 0;

    // A(位置正確、數字正確)次數
    ary_A_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9

    // ary_input中0~9各出現幾次，設為array
    ary_input_0to9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9

    // ary_Answer中0~9各出現幾次，設為array
    ary_Answer_0to9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9

    //比對input與answer中0~9的出現次數，取較小值，存成array
    ary_Ans_inp_min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9

    // B(位置錯誤、數字正確)次數
    ary_B_times = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 0  1  2  3  4  5  6  7  8  9


    // 統計每次輸入後的結果，設成記錄：幾A幾B。
    // 統計每次結果，各數字A次數的總和，例  result_A = [1,2,3]
    //                                          [第一次輸入,第二次,第三次]
    record_A = [];

    // 統計每次結果，各數字A次數的總和，例  record_B = [2,1,2]
    //                                          [第一次輸入,第二次,第三次]
    record_B = [];

    // 統計當次結果，各數字A次數的總和，初始值為0。由ary_A_times轉換而來。
    sum_A = 0;

    // B的總次數初始值設為0。由ary_B_times轉換而來。
    sum_B = 0;

    // 輸出至頁面上的"正確數字"字串(四個數字，沒有逗點)，由ary_Answer 轉換而成
    num_A = "";
    // 輸出至頁面上的"玩家輸入值"字串(四個數字，沒有逗點)，由ary_input 轉換而成
    num_B = "";

    // 玩家輸入數字送出後，顯示結果在table中的第幾行，初始值為0，每送出一次，則+1
    table_row_write = 0;
}

// 當遊戲結束後，要繼續玩時，清除table。
// but目前的設定仍未達到預期的效果。因為執行lcearTable()之後，若input輸入數字送出後，不會載入到table中。
function clearTable(){
    // 清空table

    // !! innerHTML = 後面不可使用 ""，否則會沒有效果。應使用innerHTML = 空的變數(例如 num_B)
    for (i = 1; i < 11; i++) {
        document.getElementById(`input_td${i}`).innerHTML = num_B;
        document.getElementById(`result_td${i}`).innerHTML = num_B;
    }
}

// click "start the game" button之後，scroll to數字輸入畫面
$('.startGame').click(function () {
    $('html,body').animate({ scrollTop: $('.playground').offset().top }, 'slow');
    
    //focus在input的第一個空格 
    document.getElementById("input_text0").focus();
})


// 將正確答案輸出至頁面
// 使用時機：1.玩家結果為4A時，即公佈答案   2.玩家沒挑戰成功，公佈答案
function postAnswer() {
    document.getElementById('answer').innerHTML = num_A;
}

// 當玩家於input的輸入為空格時，則帶出「不可為空」的訊息
// function checknull(id) {
//     var display = document.getElementById("display");
//     if (id.value == "") {
//         display.innerHTML = "不可為空，請輸入!"
//         id.focus();
//     }
//     else { display.innerHTML = "" }
// }

// function checkInp() {
//     for (i=0; i<4; i++){
//         if (isNaN(document.getElementById('input_text0').value)){
//             alert("Must input numbers");
//         }
//     if (isNaN(x)) {
//                 return false;
//     }
// }

// 驗證使用者輸入不是空格，才執行userInput()
// function verify(){
//     console.log(document.getElementById(input_text0).value.length);
//     if (document.getElementById(input_text0).value != null &&
//         document.getElementById(input_text1).value != null &&
//         document.getElementById(input_text2).value != null &&
//         document.getElementById(input_text3).value != null) {
        
//         //執行userInput() 
//         userInput();
//     }
// }

// function verify() {
//     // console.log(document.getElementById(input_text0).value);
//     if (document.getElementById(input_text0).value.length != 0 &&
//         document.getElementById(input_text1).value.length != 0 &&
//         document.getElementById(input_text2).value.length != 0 &&
//         document.getElementById(input_text3).value.length != 0) {

//         //執行userInput() 
//         userInput();
//     }
// }


function empty() {
    if (document.getElementById(input_text0).value == "" || 
        document.getElementById(input_text1).value == "" ||
        document.getElementById(input_text2).value == "" ||
        document.getElementById(input_text3).value == "") {
        alert("Enter a Valid Roll Number");
        return false;
    } 
}

function myFunction() {
    var x0, x1, x2, x3;

    // Get the value of the input field with id="numb"
    x0 = document.getElementById("input_text0").value;
    x1 = document.getElementById("input_text1").value;
    x2 = document.getElementById("input_text2").value;
    x3 = document.getElementById("input_text3").value;

    // function formSubmit() {
    //     var condId = document.getElementById("searchProductText");
    //     var text = condId.value;
    //     var textValue = text.replace(/(^\s*)|(\s*$)/g, "");     //替换输入内容当中所有的空字符，包括全角空格，半  
    //     if (textValue == null || textValue == "") {
    //         alert("输入的内容为空，无法查询！");
    //         return false;
    //     }

    // }  


    // If x is Not a Number or less than one or greater than 10
    if (x0 == "" || x0 < 0 || x0 > 9 || x1== "" || x1 < 0 || x1 > 9 || x2=="" || x2 < 0 || x2 > 9 ||  
        x3=="" || x3 < 0 || x3 > 9 ) {
        alert("Input not valid");
    } else {
        userInput();
    }
    
}


// 當玩家輸入4個數字後，送出，要執行的動作
function userInput(){

    // 答題次數+1
    guessTimes += 1;

    // 將玩家輸入的4個數字存成ary_input
    for(i=0; i<4; i++) {
    ary_input[i] = document.getElementById(`input_text${i}`).value;
    }
    
    // 由ary_input轉換成沒有逗點的num_B(字串)，用來輸出至頁面
    for(i=0; i<4; i++){
        num_B += ary_input[i];
    }
    
    // 要寫進table的行數+1
    table_row_write += 1;
    // 最多寫到第10行
    if (table_row_write <= 10) { document.getElementById(`input_td${table_row_write}`).innerHTML = num_B;}
    // 判斷 num_B 要放進頁面中table的哪一個input_td?，先依序找出為空格的input_td?
    // 下面這寫法有bug，因為玩家四個input皆為空格時，則寫進td則為空格。玩家下一次輸入input不為空格時，
    // 則會寫進前一個td，而不是該次的td
    // for (i=1; i<11; i++){
    //     if (document.getElementById(`input_td${i}`).innerHTML == ""){
    //         x = i;
    //         document.getElementById(`input_td${i}`).innerHTML = num_B;
    //         break
    //     }
    // }

    // console.log(`第幾格以上是空格：${x}`);


    // 分析玩家輸入的4個數字，並統計配對結果為A的數字之出現次數，存成ary_A_times
    for (i=0; i<4; i++){
        if(ary_Answer[i] === Number(ary_input[i])) {
            ary_A_times[ary_Answer[i]] += 1;
        }
    }   

    console.log(ary_A_times);
 
    // 分析當次玩家輸入值：幾 A
    for (i=0; i<10; i++){
        sum_A += ary_A_times[i];
    }

    console.log(`幾A：${sum_A}`);

    // 將玩家結果「幾A」儲存至record_A
    record_A.push(`${sum_A}A`);

    console.log(record_A);


    // 計算ary_Answer中，數字0~9各出現幾次，存成ary_Answer_0to9
    for (i = 0; i < 4; i++) {
        ary_Answer_0to9[ary_Answer[i]] += 1;
    }
    console.log(ary_Answer_0to9);

    // 計算ary_input中，數字0~9各出現幾次，存成ary_Answer_0to9
    for (i = 0; i < 4; i++) {
        ary_input_0to9[ary_input[i]] += 1;
    }
    console.log(ary_input_0to9);    

//比對input與answer中0~9的出現次數，取較小值，存成array
    for (i=0; i<10; i++){
        ary_Ans_inp_min[i] = Math.min(ary_Answer_0to9[i], ary_input_0to9[i]);
    }

    for (i=0; i<10; i++){
        ary_B_times[i] = ary_Ans_inp_min[i] - ary_A_times[i];
    }
    console.log(`B:${ary_B_times}`);
    

    // 統計當次有  幾B
    for (i = 0; i < 10; i++) {
        sum_B += ary_B_times[i];
    }
    console.log(`幾B:${sum_B}`);

    // 將玩家結果「幾B」儲存至record_B
    record_B.push(`${sum_B}B`);
    console.log(record_B);

    // 將幾A幾B輸出至頁面
    // 最多寫到第10行
    if (table_row_write <= 10) {
        document.getElementById(`result_td${table_row_write}`).innerHTML = 
        `${record_A[guessTimes-1]}${record_B[guessTimes-1]}`; }

    // 將幾A幾B輸出至頁面
    // var y = 0;
    // for (i = 1; i < 11; i++) {
    //     if (document.getElementById(`result_td${i}`).innerHTML == "") {
    //         x = i;
    //         document.getElementById(`result_td${i}`).innerHTML = `${sum_A} A ${sum_B} B `;
    //         break
    //     }
    // }
    // console.log(`第幾格以上是空格：${y}`);



    
    if (sum_A == 4 && guessTimes <= 10) {
        alert(`答對了，正確答案為${num_A}`);
        postAnswer();
        document.getElementById('information').innerHTML = "你答對了！";
        // 將input及button「送出」隱藏，不讓玩家繼續輸入
        document.getElementById('input_demo2').style.display = "none";
        // 顯示button「再玩一次」
        document.getElementById("playAgain").style.display = "block";
    } else if (sum_A < 4 && guessTimes == 10) {
        alert(`答錯了，正確答案為${num_A}`);
        postAnswer();
        console.log(`sum_A：${sum_A}`);
        console.log(`guessTimes：${guessTimes}`);
        document.getElementById('information').innerHTML = "超過答題次數，你輸了！";
        // 將input及button「送出」隱藏，不讓玩家繼續輸入
        document.getElementById('input_demo2').style.display = "none";
        // 顯示button「再玩一次」
        document.getElementById("playAgain").style.display = "block";
    }else  {
        // alert("繼續輸入");
        //focus在input的第一個空格 
        document.getElementById("right_div").focus({ preventScroll: false });
        // $('.startGame').click(function () {
        // function scrollToRecord(){    $('html,body').animate({ scrollTop: $('right_div').offset().top }, 'slow');
        // }
        // scrollToRecord();
            //focus在input的第一個空格 
            // document.getElementById("input_text0").focus();
        // })
    }

    // 清空input
    clearInput();
    
    // 清空變數
    clearVariable();

}

// 當input輸入完後，自動跳下一格，必須於input設定maxlength為 1。
// jQuery 的寫法，
$('input').keyup(function () {
    if ($(this).val().length == $(this).attr('maxlength'))
        $(this).next(':input').focus();
}); 

// 當input輸入完後，自動跳下一格，text設定長度為1
// javasript寫法
// function setfocus() {
//     if (document.getElementById("input_text0").value.length == 1) {
//         document.getElementById("input_text1").focus();
//     }
//     if (document.getElementById("input_text1").value.length == 1) {
//         document.getElementById("input_text2").focus();
//     }
//     if (document.getElementById("input_text2").value.length == 1) {
//         document.getElementById("input_text3").focus();
//     }
//     if (document.getElementById("input_text3").value.length == 1) {
//         document.getElementById("submit").focus();
//     }
// }


// 玩家繼續挑戰(button啟動)，清除table中的資料。
function playAgian() {
    // // 清除table中的資料
    // clearTable();

    // // 隱藏play again的div
    // document.getElementById("playAgain").style.display = "none";
    // // 刪除給玩家「你答對了」或「你答錯了」的訊息
    // document.getElementById('information').innerHTML = "";
    // // 產生一組新的answer
    // produceAnswer();

    // 刷新頁面，以下面這程式碼取代上面多行程式碼，較為簡潔
    // location.reload()乃是從cache下載
    // location.reload(true)則是強制從server端下載，但是會把整個網頁的資料都下載下來，耗時！
    location.reload(); 

    // 清空變數及記錄(每次猜題各幾A幾B)
    clearVariable_record();
}