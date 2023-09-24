$(document).ready(function () {

  $('.parallax').parallax();

});

const fetchNews = async (page) => {

  var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'from=2023-09-23&' +
  'from=2023-09-24&' +
  'pageSize=40&' +
  'apiKey=666371932c55476082f057f828446cdd';

  var req = new Request(url);

  let a = await fetch(req)
  let response = await a.json()
  console.log(JSON.stringify(response))

  let str = ""
  for (let item of response.articles) {
    str = str + `<div class="col s6 m6 l3">
  <div class="card small">
      <div class="card-image">
          <img src="${item.urlToImage}">
      </div>
      <div class="card-content">
          <p>${item.title}</p>
      </div>
      <div class="card-action">
          <a href="${item.url}">Read More</a>
      </div>
  </div>
</div>`
  }
  document.querySelector(".content").innerHTML = str
}
fetchNews(1)