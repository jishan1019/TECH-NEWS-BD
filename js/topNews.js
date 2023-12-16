const fetchData = () => {
  fetch("../data/topNews.json")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (data) => {
  const topNewsContainer = document.querySelector("#topNewsContainer");
  const allNewsContainer = document.querySelector("#allNewsContainer");

  data?.slice(0, 6)?.forEach((item) => {
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

  data?.slice(6, 1000)?.forEach((item) => {
    const allNewsCard = document.createElement("div");
    allNewsCard.innerHTML = `

                     <div  onclick="fetchSingleNews(${
                       item?.id
                     })" class="newsCard cursor-pointer flex gap-6 shadow-md my-3 p-4">
                       <div>
                            <img class="h-28 w-60" src="${item?.image}" alt="">
                        </div>
                        <div>
                            <h1 class="textSeconday font-bold text-[12px] lg:text-xl">${
                              item?.title
                            }</h1>
                            <p class="text-[9px] lg:text-sm  my-3 text-black/40"><span class="textSeconday font-semibold">${
                              item?.category
                            }</span> - ${item?.pubDate}</p>
                            

                            <p class="text-[8px] lg:text-sm">${item?.description?.longDes.slice(
                              0,
                              150
                            )} ...</p>

                        </div>
                    </div>
      `;

    allNewsContainer.appendChild(allNewsCard);
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
