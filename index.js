// import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inuptText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "a";
  alert(inuptText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
