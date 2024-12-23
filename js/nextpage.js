const libraryName = new URLSearchParams(window.location.search).get("library");
console.log(libraryName);

const containerBox = document.getElementById("mainCon");

axios.get(`https://api.cdnjs.com/libraries/${libraryName}`).then((res) => {
  const libDatas = res.data;
  console.log(libDatas);

  containerBox.innerHTML = `
      <div class="library-container">
        <div class="header-box">
            <div class="titles">Home/Libraries/fontawesome</div>
            <div>
              <div class='nameanddesc'>
                <h1>${libDatas.name}</h1>
                <p>${libDatas.description}</p>
              </div>
              <div class="links">
                <div class='git-sec'>
                  <img src="" alt="" />
                  <p></p>
                  <p>npm package</p>
                  <p>0 known vulnerabilities</p>
                </div>
                <div class="licensed">
                  <p>MIT</p>
                  <p>licensed</p>
                  <a href="${libDatas.repository.url}">
                    <p>${libDatas.repository.url}</p></a >
                </div>
              </div>
              <div class="tags">
                    ${libDatas.keywords}
              </div>
            </div>
          </div>
          <div class="body">
            <div class="selections">
                <h4>Version</h4>
                <select name="" id="">
                    <option value="">${libDatas.version}</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                Asset type
                <select name="" id="">
                          <option value=""All></option>
                    <option value="">JavaScript</option>
                </select>
            </div>
            <div class="div">
                <p>Some files are hidden, click to show all files</p>
            </div>
            <div class="link-cards">
                <div class="link-box">
                    <a href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js"><p>https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js</p></a>
                    <h4></h4>
                </div>
            </div>
          </div>
      </div> 
    `;
});
