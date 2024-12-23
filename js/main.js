const container = document.querySelector(".container-box");

const libDatas = [
  {
    name: "react",
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    name: "react-dom",
    description:
      "The entry point of the DOM-related rendering paths for React.",
  },
  { name: "react-is", description: "Brand checking of React Elements." },
  {
    name: "vue",
    description:
      "Simple, Fast & Composable MVVM for building interactive interfaces.",
  },
];

axios
  .get("https://api.cdnjs.com/libraries?limit=20")
  .then((res) => {
    const resultDatas = res.data.results;

    resultDatas.map((data) => {
      console.log(data);

      container.innerHTML += `
     <div  class="lib-box">
          <div class="header">
            <p class='libName'  onclick="gotoNextPage('${data.name}')" >${data.name}</p>
          </div>
          <div class="body">
            
          </div>
          <div class="footer mt-3">Tags: react, jsx, transformer, view</div>
        </div> `;
    });
  })
  .catch((error) => {
    console.error("Error fetching library data:", error);
  });

function gotoNextPage(dataName) {
  console.log(dataName);

  window.location.href = `nextpage.html?library=${dataName}`;
}
