const fetchData = () => {
  fetch("../data/topNews.json")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (data) => {
  const topNewsContainer = document.querySelector("#topNewsContainer");
  console.log(data);

  data?.forEach((item) => {
    const newsCard = document.createElement("div");
    newsCard.innerHTML = `
    
      <div class="card w-full h-80 shadow-xl rounded-sm relative">
                <figure>
                    <img class="w-full" src="${item?.image}" alt="Shoes" />
                </figure>
                <div class="card-body absolute bottom-0 bg-black/50 py-2 w-full textPrimary ">
                    <h2 class="card-title">${item?.title}</h2>
                    <p>${item?.pubDate}</p>

                </div>
            </div>

      `;

    topNewsContainer.appendChild(newsCard);
  });
};

fetchData();
displayData();
