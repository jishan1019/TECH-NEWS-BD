const showSingleNews = () => {
  const singleNews = JSON.parse(localStorage.getItem("singleNews"));
  const detailsTitle = document.querySelector("#detailsTitle");
  const fullDetails = document.querySelector("#fullDetails");

  detailsTitle.innerHTML = `
         <p class="text-black/40 text-xs">Home >${singleNews?.title}</p>
          <h1 class="textSeconday my-3 text-2xl font-bold">${singleNews?.title}.</h1>
          <p class="text-black/40 text-xs space-x-2">${singleNews?.catagory} - ${singleNews?.pubDate}</p>
       
      `;

  fullDetails.innerHTML = `
            <img class="lg:w-1/2 h-64 " src="${singleNews?.image}" alt="">
            <h1 class="textSeconday my-3 text-2xl font-bold">
            ${singleNews?.description?.shortDes}.</h1>

           <div>
            <a href=${singleNews?.websiteLink} target="_blank">${
    singleNews?.websiteLink
      ? `Website Link: <span class="underline textSeconday">${singleNews?.websiteLink}</span>`
      : ""
  }
            </a>

             <p class="text-sm mt-1">${
               singleNews?.websiteLink
                 ? "Click This link For more information."
                 : ""
             }</p>
             </div>

            <p>${singleNews?.description?.longDes.slice(0, 300)}</p>
             <p>${singleNews?.description?.longDes.slice(300, 700)}</p>
              <p>${singleNews?.description?.longDes.slice(700, 1500)}</p>
              <p>${singleNews?.description?.longDes.slice(1500, 4000)}</p>
  
      `;

  console.log(singleNews, "from single details ");
};

showSingleNews();
