// Api Links
const serviceId = 'https://portfolio.seasonsge.com/front_end/home_page/sec_5/service_by_id.php?id=';
const secProcess = 'https://portfolio.seasonsge.com/front_end/home_page/sec_6/view.php';
const secProcessSteps = 'https://portfolio.seasonsge.com/front_end/home_page/sec_6/process..php';

const urlParams = new URLSearchParams(window.location.search);
const params = urlParams.get('id');

axios.get(serviceId + params).then(response=>{
    console.log(response.data);
    let res = response.data;
    document.getElementById('serviceArea').innerHTML =
    `<h1 class="title split-collab">${res.keyword1_en} <br>
        <span>${res.keyword2_en}</span> <br>
        ${res.keyword3_en}
    </h1>
    <p class="disc">
        ${res.long_description_english}
    </p>
    <a href="free-audit.html" class="rts-btn btn-primary arrow-rotate">Get free audit <i class="fa-light fa-arrow-right"></i></a>
    <p class="mt--30 mb--0">${res.bbutoom_down_title_en}</p>`;
    document.getElementById('serviceImage').innerHTML =
    `<img src="${res.image}" alt="">`;
    document.getElementById('counters').innerHTML =
    `<div class="single-counter-up">
        <h3 class="title"><span class="counter">${res.counter1}</span></h3>
        <p>${res.counter_name1_english}</p>
    </div>
    <div class="single-counter-up">
        <h3 class="title"><span class="counter">${res.counter2}</span></h3>
        <p>${res.counter_name2_english}</p>
    </div>
    <div class="single-counter-up">
        <h3 class="title"><span class="counter">${res.counter3}</span></h3>
        <p>${res.counter_name3_english}</p>
    </div>
    <div class="single-counter-up">
        <h3 class="title"><span class="counter">${res.counter4}</span></h3>
        <p>${res.counter_name4_english}</p>
    </div>`;
    document.getElementById('imageAddition1').innerHTML = 
    `<img src="${res.image_addition1}" width="505" height="400" alt="product">`;
    document.getElementById('imageAddition2').innerHTML = 
    `<img src="${res.image_addition2}" width="505" height="400" alt="product">`;
    document.getElementById('imageAddition3').innerHTML = 
    `<img src="${res.image_addition3}" width="505" height="400" alt="product">`;
    document.getElementById('areaAddition1').innerHTML =
    `<h2 class="title split-collab">${res.title_addition1_en}</h2>
    <p class="disc">
        ${res.disc_addition1_en}
    </p>`;
    document.getElementById('areaAddition2').innerHTML =
    `<h2 class="title split-collab">${res.title_addition2_en}</h2>
    <p class="disc">
        ${res.disc_addition2_en}
    </p>`;
    document.getElementById('areaAddition3').innerHTML =
    `<h2 class="title split-collab">${res.title_addition3_en}</h2>
    <p class="disc">
        ${res.disc_addition3_en}
    </p>`;
    

}).catch(err=>console.log(err))

axios.get(secProcess).then(response=>{
    let res = response.data.data[0]
    console.log(res);
    document.getElementById('secProcessArea').innerHTML =
    `<span class="pre skew-up">${res.title_english}</span>
    <h2 class="title skew-up">${res.sentence1_english}</h2>`;
    document.getElementById('secProcessImageArea').innerHTML =
    `<img class="large" src="${res.image}" alt="working-process">`;
}).catch(err=>console.log(err))

axios.get(secProcessSteps).then(response=>{
    let res = response.data
    console.log(res);
    for (let i = 0; i < res.length; i++) {
        // const element = array[i];
         if (i == 0) {
            document.getElementById('accordionExamples').innerHTML +=
            `<div class="accordion-item show">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ${res[i].stage_title_english}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${res[i].stage_description_english}
                </div>
            </div>
        </div>`; 
         } else {
            document.getElementById('accordionExamples').innerHTML +=
            `<div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    ${res[i].stage_title_english}
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${res[i].stage_description_english}
                </div>
            </div>
        </div>`; 
         }      
    }
}).catch(err=>console.log(err))