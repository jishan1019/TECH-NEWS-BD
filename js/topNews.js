const fetchData = () => {
  fetch("../data/topNews.json")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (data) => {
  const topNewsContainer = document.querySelector("#topNewsContainer");
  data?.forEach((item) => {
    const newsCard = document.createElement("div");
    newsCard.innerHTML = `
    
      <div onclick="fetchSingleNews(${item?.id})"  class="card w-full h-72 shadow-xl rounded-sm relative cursor-pointer	">
                <figure>
                    <img class="w-full h-[40vh]" src="${item?.image}" alt="Shoes" />
                </figure>
                <div class="card-body absolute bottom-0 bg-black/50 py-2 w-full textPrimary ">
                    <h2 class="card-title">${item?.title}</h2>
                    
                    <div class="flexContainer justify-between	">
                    <p>Pub: ${item?.pubDate}</p>
                    <button class="underline">Read More</button>
                    </div>
                </div>
            </div>

      `;

    topNewsContainer.appendChild(newsCard);
  });
};

const fetchSingleNews = (singleItemId) => {
  fetch("../data/topNews.json")
    .then((res) => res.json())
    .then((data) => {
      const singleNews = data?.find((news) => news?.id === singleItemId);
      localStorage.setItem("singleNews", JSON.stringify(singleNews));
    });

  window.location.href = "newsDetails.html";
};

fetchData();
displayData();
