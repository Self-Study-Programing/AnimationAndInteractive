const list = document.querySelector(".list");
const items = list.children;
console.log(items);

const item2 = list.parentElement;

const item3 = list.closest("main");

const item4 = list.previousElementSibling;

const item4 = list.nextElementSibling;

// 반복되는 요소에 이벤트 한꺼번에 연결하기

for (let el of list) {
  el.addEventListener("click", (e) => {
    console.log(e.currentTarget.innerText);
  });
}
