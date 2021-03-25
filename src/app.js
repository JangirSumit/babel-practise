async function showData() {
  document.getElementById("data").innerHTML = "Loading...";

  await delay(3000);

  const data = {
    name: "Saif",
    age: 30,
  };

  renderData(data);
}

function renderData({ name, age }) {
  document.getElementById("data").innerHTML = `Name: ${name}, Age: ${age}`;
}

async function delay(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
