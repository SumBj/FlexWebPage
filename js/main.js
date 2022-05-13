// 모든 article 요소 변수 items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");
//article 요소의 개수만큼 반복 
for(let element of items){
    element.addEventListener("mouseenter" ,e=>{
        e.currentTarget.querySelector("video").play();
    });
    element.addEventListener("mouseleave" ,e=>{
        e.currentTarget.querySelector("video").pause();
    });

    element.addEventListener("click" ,e=>{
        let title =e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h1").innerText = title;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        aside.querySelector("video").play();
        aside.classList.add("on");
    });

    close.addEventListener("click", ()=>{
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    });
    }

