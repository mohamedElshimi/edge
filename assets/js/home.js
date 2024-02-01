// API endpoint
const sec1 = 'https://portfolio.seasonsge.com/front_end/home_page/sec_1/get.php';
const sec2 = 'https://portfolio.seasonsge.com/front_end/home_page/sec_2/api_send_email.php';
const sec4 = 'https://portfolio.seasonsge.com/front_end/home_page/sec_4/get.php';
const sec4Logos = 'https://portfolio.seasonsge.com/front_end/home_page/sec_4/logos.php';
const sec5Part1 = 'https://portfolio.seasonsge.com/front_end/home_page/sec_5/view _part1.php';
const sec5list = 'https://portfolio.seasonsge.com/front_end/home_page/sec_5/servicelist.php';
const secProcess = 'https://portfolio.seasonsge.com/front_end/home_page/sec_6/view.php';
const secProcessSteps = 'https://portfolio.seasonsge.com/front_end/home_page/sec_6/process..php';
const secAudit = 'https://portfolio.seasonsge.com/front_end/home_page/sec_7/audit_send.php';
const sec7 = 'https://portfolio.seasonsge.com/front_end/home_page/sec_7/view.php';
const counters = 'https://portfolio.seasonsge.com/front_end/home_page/sec_8/view.php';
const feedbackTitle = 'https://portfolio.seasonsge.com/front_end/home_page/customer_review/git.php';
const feedbackCards = 'https://portfolio.seasonsge.com/front_end/home_page/customer_review/git_review.php';


// Make a GET request using Axios
axios.get(sec1).then(response => {
        // Process the response data
        const responseData = response.data;
        // console.log('done',responseData[0]);
        // Update HTML with the response
        const sec1Area = document.getElementById('sec1Area');
        sec1Area.innerHTML = `<h1 class="title skew-up-2">${responseData[0].title_en}</h1>
        <p class="disc">
        ${responseData[0].sub_title_en}
        </p>
        <form action="#" method="post">
            <input type="email" placeholder="Email address.." required id="sec2Email">
            <i class="fa-regular fa-envelope"></i>
            <button class="rts-btn btn-primary-2" onclick="sendMail()">Get a quote</button>
        </form>
        <div class="bottom-text">
            <p class="disc">${responseData[0].description_en}</p>
        </div>`;
}).catch(error => {
        console.error('There was an error with the Axios request:', error);
});
function sendMail() {
    event.preventDefault();
    let email=document.getElementById("sec2Email").value;
    var formdata = new FormData();
    formdata.append("email", email);

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };
    if (email) {
        fetch(sec2, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.status) {
                swal("Done", result.message_en, "success");
            } else if(!result.status) {
                swal("Warning", result.message_en, "warning");
            }
        }).catch(error => console.log('error', error));
    }
    
}
axios.get(sec4).then(response=>{
    const res = response.data.data[0];
    // console.log(res);
    document.getElementById('sec4Area').innerHTML = 
    `<figure class="pli-image">
    <img class="anim-image-parallax tt-lazy" src="${res.image}" data-src="${res.image}" alt="image">
</figure>
<a href="${res.video_link}" class="rts-btn popup-video btn-secondary-5-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.25 20.9999C5.05109 20.9999 4.86032 20.9209 4.71967 20.7803C4.57902 20.6396 4.5 20.4488 4.5 20.2499V3.74993C4.49999 3.6196 4.53395 3.49151 4.59852 3.37829C4.6631 3.26508 4.75606 3.17065 4.86825 3.1043C4.98044 3.03796 5.10798 3.002 5.2383 2.99997C5.36862 2.99794 5.49722 3.0299 5.61143 3.09271L20.6114 11.3427C20.7291 11.4074 20.8273 11.5026 20.8956 11.6182C20.964 11.7338 21 11.8656 21 11.9999C21 12.1342 20.964 12.266 20.8956 12.3816C20.8273 12.4972 20.7291 12.5924 20.6114 12.6571L5.61143 20.9071C5.50069 20.968 5.37637 20.9999 5.25 20.9999Z" fill="#614CE1" />
    </svg>
</a>`;
}).catch(err=>{
    console.log(err);
})
axios.get(sec4Logos).then(response=>{
    let res = response.data.data;
    for (let i = 0; i < res.length; i++) {
        document.getElementById('lightArea').innerHTML += 
        `<div class="swiper-slide">
            <a href="#"><img src="${res[i].image}" alt="brand"></a>
        </div>`;
        document.getElementById('darkArea').innerHTML += 
        `<div class="swiper-slide">
            <a href="#"><img src="${res[i].image_dark}" alt="brand"></a>
        </div>`;
    }
}).catch(err=>console.log(err))
axios.get(sec5Part1).then(response=>{
    // console.log(res.data.data);
    let res = response.data.data[0];
    document.getElementById('sec5Part1Area').innerHTML = 
    `<div class="title-style-one-left">
    <span class="pre split-collab">${res.main_title_english}</span>
    <h2 class="title split-collab">${res.sub_title_english}</h2>
</div>
<p class="disc">
    ${res.description_english}
</p>`;
}).catch(err=>console.log(err))
axios.get(sec5list).then(response=>{
    let res=response.data.data;
    
    for (let i = 0; i < res.length; i++) {
        document.getElementById('serviceLinks').innerHTML +=
        `<li class="nav-item sub-dropdown"><a class="nav-link page" href="service-single.html?id=${res[i].id}">${res[i].title_english}</a></li>`; 
    }
}).catch(err=>console.log(err))
axios.get(sec5list).then(response=>{
    let res=response.data.data;
    
    for (let i = 0; i < res.length; i++) {
        document.getElementById('sec5ListArea').innerHTML +=
        `<div class="swiper-slide">
            <div class="single-service-style-two">
                <div class="icon">
                    <img src="${res[i].image}" alt="service">
                </div>
                <a href="service-single.html">
                    <h6 class="title">${res[i].title_english}</h6>
                </a>
                <p class="disc">
                    ${res[i].title_english}
                </p>
                <a href="service-single.html?id=${res[i].id}" class="btn-border-bottom">Learn more <i class="fa-sharp fa-light fa-arrow-right"></i></a>
            </div>
        </div>`; 
    }
}).catch(err=>console.log(err))
axios.get(secProcess).then(response=>{
    let res = response.data.data[0]
    // console.log(res);
    document.getElementById('secProcessArea').innerHTML =
    `<span class="pre skew-up">${res.title_english}</span>
    <h2 class="title skew-up">${res.sentence1_english}</h2>`;
    document.getElementById('secProcessImageArea').innerHTML =
    `<img class="large" src="${res.image}" alt="working-process">`;
}).catch(err=>console.log(err))
axios.get(secProcessSteps).then(response=>{
    let res = response.data
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
        // const element = array[i];
         if (i == 0) {
            document.getElementById('accordionExample').innerHTML +=
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
            document.getElementById('accordionExample').innerHTML +=
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
function sendMailAudit() {
    event.preventDefault();
    let email=document.getElementById("email").value;
    let name=document.getElementById("name").value;
    let phone=document.getElementById("Phone").value;
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    
    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
    };
    if (email) {
        fetch(secAudit, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.status) {
                swal("Done", result.message_en, "success");
            } else if(!result.status) {
                swal("Warning", result.message_en, "warning");
            }
        }).catch(error => console.log('error', error));
    }
    
}
axios.get(sec7).then(response=>{
    // console.log();
    let res = response.data[0];
    document.getElementById('sec7').innerHTML = 
    `<h2 class="title split-collab">${res.title1_english} <br>
    ${res.extra_title1_english}</h2>
    <p class="disc">${res.details_english}</p>`;
}).catch(err=>console.log(err))
axios.get(counters).then(response=>{
    // console.log(response.data);
    let res = response.data;
    for (let i = 0; i < res.length; i++) {
        document.getElementById('countersArea').innerHTML +=
        `<div class="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-center">
        <div class="single-counter-up-two">
            <div class="icon">
                <img src="${res[i].image_url}">
            </div>
            <div class="inmformation">
                <h2 class="title"><span class="counter">${res[i].number}</span>k</h2>
                <p>${res[i].title_english}</p>
            </div>
        </div>
    </div>`;
    }
}).catch(err=>console.log(err))
axios.get(feedbackTitle).then(response=>{
    let res = response.data[0]
    // console.log(res);
    document.getElementById('feedbackTitleArea').innerHTML = 
    `<span class="pre split-collab">${res.MainTitle_English}</span>
    <h2 class="title split-collab position-relative">${res.AdditionalTitle1_English} <br>
    ${res.AdditionalTitle2_English}</h2>`;
}).catch(err=>console.log(err))
axios.get(feedbackCards).then(response=>{
    let res = response.data
    console.log(res);
    for (let i = 0; i < res.length; i++) {
        document.getElementById('feedbackCardsArea').innerHTML +=
        `<div class="col-sm-10 col-md-6 col-lg-6 col-xl-4">
            <div class="single-testimonials-area">
                <div class="quote-image">
                    <img src="assets/images/testsimonials/logo/quote.png" alt="marketing">
                </div>
                <div class="logo d-flex justify-content-center">
                    <img class="light" src="assets/images/testimonials/logo/01.svg" alt="testimonials">
                    <img class="dark" src="${res[i].CompanyLogo}" alt="testimonials" width="80">
                </div>
                <p class="disc text-center">
                    “${res[i].OpinionText_en}”
                </p>
                <div class="author-area justify-content-between text-end">
                    <a href="#" class="avatar">
                        <img src="${res[i].ReviewerImage}" alt="marketing" width="80">
                    </a>
                    <div class="information">
                        <h6 class="title">${res[i].ReviewerName_en}</h6>
                        <span>${res[i].ReviewerJobTitle_en}</span>
                    </div>
                </div>
            </div>
        </div>`;
    }
}).catch(err=>console.log(err))