async function abc() {
  let pro = new Promise((resolve, reject) => {
    setTimeout(() => resolve("True"), 2000);
  });
  setTimeout(() => console.log("false"), 5000);
  let result = await pro;
  console.log(result);
}
abc();


async function myfunction() {
    let x = Math.random();
    console.log(x);
    if (x <= 0.5) {
        return "This is True";
    } else {
        throw "This is False";
    }
}
(async () => {
let result = await myfunction();
console.log(result);
})();