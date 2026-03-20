// thêm comment
function addComment(btn){
    let article = btn.closest("article");
    let input = article.querySelector("input");
    let list = article.querySelector(".comment-list");
    let countEl = article.querySelector(".comments a");

    let text = input.value.trim();
    if(text === "") return;

    // tạo UI comment
    let div = document.createElement("div");
    div.className = "comment-item";
    div.innerText = text;
    list.appendChild(div);

    // tăng số comment
    let count = list.children.length;
    countEl.innerText = count + " comments";

    // lưu vào localStorage
    let id = article.dataset.id;
    let comments = JSON.parse(localStorage.getItem(id)) || [];
    comments.push(text);
    localStorage.setItem(id, JSON.stringify(comments));

    input.value = "";
}

// load lại khi refresh
window.onload = function(){
    document.querySelectorAll("article").forEach(article=>{
        let id = article.dataset.id;
        let list = article.querySelector(".comment-list");
        let countEl = article.querySelector(".comments a");

        let comments = JSON.parse(localStorage.getItem(id)) || [];

        comments.forEach(text=>{
            let div = document.createElement("div");
            div.className = "comment-item";
            div.innerText = text;
            list.appendChild(div);
        });

        countEl.innerText = comments.length + " comments";
    });
};