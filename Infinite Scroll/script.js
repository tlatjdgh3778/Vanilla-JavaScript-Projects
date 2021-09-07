const loading = document.querySelector(".loading");
const scrollToTop = document.querySelector(".scrollToTop");

scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
});

const displayLoading = () => {
    loading.classList.add("display");

    setTimeout(getPost, 1000);
};

const hiddenLoading = () => {
    loading.classList.remove("display");
};

let timer;
window.addEventListener("scroll", () => {
    const clientHeight = document.documentElement.clientHeight; // 현재 브라우저 창의 높이
    const scrollHeight = document.documentElement.scrollHeight; // 스크롤을 다 내린 것 까지 포함한 창의 높이
    const scrollTop = document.documentElement.scrollTop; // 현재 스크롤 위치(스크롤 바 위쪽 기준)
    // scrollTop + clientHeight = scrollHeight
    // 스크롤을 다 내렸다는 뜻.

    if (scrollTop >= 100) {
        scrollToTop.classList.add("btnDisplay");
    } else {
        scrollToTop.classList.remove("btnDisplay");
    }

    if (scrollTop + clientHeight === scrollHeight) {
        displayLoading();
    }
});

const randomUser = () => {
    // 난수 생성
    return Math.floor(Math.random() * 100) + 1;
};

const getPost = async () => {
    // jsonplaceholder 홀더에서 데이터 가져오는 코드
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomUser()}`);

    const postData = await post.json();

    const user = await fetch("https://randomuser.me/api/");
    const userData = await user.json();

    const data = {
        postData,
        userData: userData.results[0],
    };

    addPost(data);
};

document.addEventListener("DOMContentLoaded", () => {
    // HTML과 script가 로드되면 getPost()로 데이터들을 가져온다.
    getPost();
    getPost();
    getPost();
    getPost();
    getPost();
});

const addPost = ({ postData, userData }) => {
    // getPost로 받은 데이터를 HTML로 그려주자
    // <div id="card">
    //     <h1 class="title">title</h1>
    //     <div class="content">content</div>
    //     <img src="" class="user_pic" />
    //     <div class="username">username</div>
    // </div>
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="title">${postData.title}</div>
        <div class="content">${postData.body}</div>
        <div class="userinfo">
            <img src="${userData.picture.medium}" class="picture" />
            <div class="username">${userData.name.first} ${userData.name.last}</div>
        </div>
    `;

    const root = document.querySelector("#root");
    root.appendChild(card);

    hiddenLoading();
};
