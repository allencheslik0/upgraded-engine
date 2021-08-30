// getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn  = info_box.querySelector(".buttons .quit");
const restart_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box")

//Event Listeners

//Start Event

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}


//Exit Event
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

restart_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}

var que_count = 0;
var que_number = 1;

var next_btn = quiz_box.querySelector(".next_btn");

next_btn.onclick = ()=>{
    if(que_count < questions.length -1){
        que_count++;
        que_number++;
        showQuestions(que_count);
    }else{
        console.log("Questions Completed");
    }
}

function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].Number + ", " + questions[index].question +'</span>';
    let option_tag = '<div class="option">' + qustions[index].options[0] + '<span></span></div>'
                     + '<div class="option">' + qustions[index].options[1] + '<span></span></div>'
                     + '<div class="option">' + qustions[index].options[2] + '<span></span></div>'
                     + '<div class="option">' + qustions[index].options[3] + '<span></span></div>'
    que_text.innerHTML= que_tag;
    option_list.innerHTML= option_tag;
    const option = option_list.querySelector(".option");
    for (let i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }


}


const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCountTag =  '<span><p>'+ que_count +'</p>Of<p>'+ questions.length +'</p>Questions</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag