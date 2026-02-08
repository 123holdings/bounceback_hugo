/* main navigation design start */
function togglemenu() {
  const dropdownMenu = document.getElementById('jsDropdownMenu');
  const header = document.getElementById('js-header');
  dropdownMenu.classList.toggle('header__mobile-nav-open');
  header.classList.toggle('header-open');

}


/* custom select script here */
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");

l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 0; j < ll; j++) {
    c = document.createElement("DIV");
    if (j === 0) {
      c.setAttribute("class", "same-as-selected");
    }
    c.innerHTML = `<span class="outer-circle"><span class="inner-circle"></span></span>`;
    c.innerHTML += selElmnt.options[j].innerHTML;

    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].textContent == this.textContent) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
  updateURL()
}

document.addEventListener("click", closeAllSelect);

const doctorsFitlerHeading = document.querySelector('.doctors-filter__doctors-list');
if(doctorsFitlerHeading){
  doctorsFitlerHeading.classList.add('filter-doctors')
}


/* footer links dropdown functionality in footer*/
const links = document.querySelectorAll('.footer__links');

links.forEach((link, index) => {
  link.addEventListener('click', e => {
    links.forEach((link, number) => {
      if (index != number) {
        const dropdown = link.querySelector('.footer__links-wrapper');
        const arrow = link.querySelector('svg');
        dropdown.classList.remove('footer__links-wrapper--open');
        arrow.classList.remove('footer__icon--open');
      }
    })

    const dropdown = link.querySelector('.footer__links-wrapper');
    const arrow = link.querySelector('svg');
    arrow.classList.toggle('footer__icon--open');
    dropdown.classList.toggle('footer__links-wrapper--open');

  })
})

/*multilanguage switcher*/

const languageOptions = document.querySelector('.header__language-options');
const selectItems = document.querySelectorAll('.header .select-items div');

selectItems.forEach(item => {
  item.addEventListener('click', e => {
    let languageOptions = item.parentElement.previousElementSibling.previousElementSibling;
    console.log(languageOptions)
    if (window.location.href != languageOptions.value) {
      window.location = languageOptions.value;
    }

  })
})

window.onload = function(){
/*Doctors filter functionality*/
const cards = document.querySelectorAll('.doctor-card');
// const navBranches = document.querySelectorAll('.filter-branch');
// const allClinics = document.querySelectorAll('.filter-doctors .select-items div');

// function checkActiveOptions() {
//   if(cards.length){

//     const activeBranch = document.querySelector('.filter-branch--active').dataset.branch.toLowerCase().replace(/[{()}]/g,'');
//     const activeclinics = capitalizeFirstLetter(document.querySelector('.js-doctors-list').value.replace(/[{()}]/g,''));
  
//     return [activeBranch, activeclinics];
//   }

// }

// function searchCards(branch, clinics) {
//   console.log('it is running')
//   const cards = document.querySelectorAll('.doctor-card');
//   let i = 0;
//   cards.forEach(card => {

//     const cardBranch = card.dataset.branch.toLowerCase().replace(/[{()}]/g,'');
//     const cardClinics = capitalizeFirstLetter(card.dataset.clinics.replace(/[{()}]/g,''));
//     let defaultbranch = document.querySelector('.filter-branch:first-child').dataset.branch.toLowerCase().replace(/[{()}]/g,'');
//     let defaultclinics = document.querySelector('.js-doctors-list').options[0].value.replace(/[{()}]/g,'');

//     defaultbranch = "/" + defaultbranch + "/d";
//     defaultclinics = "/" + defaultclinics + "/d";
//     card.style.display = 'none';
//     if (branch == defaultbranch && clinics == defaultclinics) {
//       console.log('1')
//       card.style.display = 'flex';

//     } else if (branch == defaultbranch && clinics != defaultclinics) {

//       if (clinics.test(cardClinics)) {
//         card.style.display = 'flex';
//         console.log('2')
//       }
//       if (clinics.test(cardClinics)) {

//         card.style.display= 'flex';

//       }

//     } else if (branch != defaultbranch && clinics == defaultclinics) {
//       if (branch.test(cardBranch)) {
//         card.style.display = 'flex'
//       }
//       if (branch.test(cardBranch)) {
//         card.style.display= 'flex';
//         console.log('3')
//       }

//     } else {

//       if (branch.test(cardBranch) && clinics.test(cardClinics) ) {
//         card.style.display = "flex";
//       }

//     }
//   })
 
// }


// function displayFilteredcards() {
//   historyState()
//   const [branch, clinics] = checkActiveOptions();
//   searchCards(new RegExp(branch, "d"), new RegExp(clinics, "d"));

// }


// function historyState(){
//   let stateObj = {};
//   if(checkActiveOptions()){
//     const [branch, clinics] = checkActiveOptions();
//     stateObj.branch = branch;
//     stateObj.clinics = clinics;
//     history.pushState(stateObj,null,"");
//   }

// }
// historyState();


// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }


// navBranches.forEach(branch => {

//   branch.addEventListener('click', e => {
//     document.querySelector('.filter-branch--active').classList.remove('filter-branch--active');
//     branch.classList.add('filter-branch--active');
//     displayFilteredcards();
//   });

// })

// allClinics.forEach(clinic => {
//   clinic.addEventListener('click', displayFilteredcards)
// })


/*Adding click listener to the cards to go detail page*/
cards.forEach(card => {
  card.addEventListener('click', e => {
    e.stopPropagation;
    const button = card.querySelector('.button');
    const url = card.dataset.url;
    let isClickedInside = button.contains(e.target);

    if (!isClickedInside) {
      window.location.href = url;
    }


  })
})
const clinicCards = document.querySelectorAll('.clinics-card');

clinicCards.forEach(card => {
  card.addEventListener('click', e => {
    e.stopPropagation;
    const button = card.querySelector('.button');
    const url = card.dataset.url;
    let isClickedInside;
    if(button){
      isClickedInside = button.contains(e.target);
    }else{
      isClickedInside = false;
    }
    if (!isClickedInside) {
      window.location.href = url;
    }
  })
})


/*custom select for appointment form */

const formCustomSelected = document.querySelectorAll('.appointment-form__cutom-select');

formCustomSelected.forEach(item => {
  let selectElement = item.querySelector('select');
  selectElement.style.display = 'none';

  let options = [...selectElement.options];

  for (let i = 0; i < options.length; i++) {
    let customOption = document.createElement('DIV');
    customOption.classList.add('custom-option');
    if (!i) {
      customOption.classList.add('custom-option--active');
    }
    customOption.textContent = options[i].textContent;

    item.appendChild(customOption);
  }
  let customOptions = item.querySelectorAll('.custom-option');
  customOptions.forEach((option, index) => {
    option.addEventListener('click', e => {
      console.dir(selectElement)
      selectElement.value = options[index].textContent;
      // selectElement.innerText = options[index].textContent;
      item.querySelector('.custom-option--active').classList.remove('custom-option--active');
      option.classList.add('custom-option--active');
    })
  })

})


//autofil form data
var GET = {};
var queryString = window.location.search.replace(/^\?/, '');
queryString.split(/\&/).forEach(function (keyValuePair) {
  var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
  var paramValue = decodeURI(keyValuePair.replace(/^[^=]*\=/, "")); // some decoding is probably necessary
  GET[paramName] = paramValue;
})

//searcing data to auto fil form
if (queryString) {
  // for branches
  let branches = document.querySelectorAll('.appointment-form__custom-branch .custom-option');
  branches = Array.from(branches);
  branches.every(option => {
    let selectOption = option.innerText;
    const pattern = new RegExp(selectOption.toLowerCase().replace(/[{()}]/g,''), "g")
    let branch = GET["branch"].toLowerCase();
    if (pattern.test(branch)) {
      document.querySelector('.appointment-form__custom-branch .custom-option--active').classList.remove('custom-option--active')
      option.classList.add('custom-option--active');
      document.querySelector('.appointment-form__custom-branch select').value = selectOption;
      
      return false;
    }
    return true;
  })

  //for clinics
  let formClinics = document.querySelectorAll('.appointment-form__custom-clinics .select-items div');
  formClinics = Array.from(formClinics);
  formClinics.every(option => {
    let selectOption = option.innerText;
    const pattern = new RegExp(selectOption.toLowerCase().replace(/[{()}]/g,'').replace(/&/g, ','), "g")
    let clinic = GET["clinics"].toLowerCase();
    if (pattern.test(clinic)) {
      document.querySelector('.appointment-form__custom-clinics .same-as-selected').classList.remove('same-as-selected');
      document.querySelector('.appointment-form__custom-clinics .select-selected').innerText = selectOption;
      option.classList.add('same-as-selected');
      document.querySelector('#clinics').value = selectOption;

      return false;
    }
    return true;
  })

  //for name
  let doctorsNames = document.querySelectorAll('.appointment-form__custom-doctors .select-items div');
doctorsNames= Array.from(doctorsNames)
doctorsNames.every(option => {
  let selectOption = option.innerText;

  const pattern = new RegExp(selectOption.toLowerCase().replace(/[{()}]/g,''), "g")
  let name = GET["name"].toLowerCase();

  if (pattern.test(name)) {
    document.querySelector('.appointment-form__custom-doctors .same-as-selected').classList.remove('same-as-selected');
    document.querySelector('.appointment-form__custom-doctors .select-selected').innerText = selectOption;
    option.classList.add('same-as-selected');
    document.querySelector('#doctors').value = selectOption;

    return false;

  }
  return true;
})
}

}

function goback(){
 history.back();
}



function updateURL(){
  if(!document.querySelector('.filter-branch--active') && !document.querySelector('.js-doctors-list')) return;
  const activeBranch= encodeURIComponent(document.querySelector('.filter-branch--active').dataset.branch);
  const activeclinic= encodeURIComponent(document.querySelector('.js-doctors-list').value);
  const url = new URL(window.location);
  url.searchParams.set('clinics', activeclinic);
  url.searchParams.set('branch', activeBranch);
  window.history.pushState({"branch": activeBranch,"clinics": activeclinic }, '', url);
  console.log('url is changed')
  console.log(history.state)
}



  function myFunction(x) {
    if (x.matches) { 
      let options= {
        root: null,
        rootMargin: '-120px 0px 10px 0px',
        threshold: 0
      };
      
      let sidebar={
        hf: false,
        ff: false
      }
      
      function callbackFunction(entries){ // array of observing elements
        entries.forEach(entry=>{
          if(document.getElementById('sidebar')){
            console.log(entry.target.classList.contains('js--services-title'))
            if(entry.isIntersecting){
              if(entry.target.className === 'footer'){
                sidebar.ff = false
              }
              if(entry.target.className === 'clinics-hero' || entry.target.classList.contains('js--services-title')){
                sidebar.hf= false
              }
              
            }
            if(!entry.isIntersecting){
              if(entry.target.className === 'clinics-hero' || entry.target.classList.contains('js--services-title')){
                if(!sidebar.hf){
                  sidebar.hf = true;
                }
              }
              if(entry.target.className === 'footer'){
                if(!sidebar.ff){
                  sidebar.ff = true;
                }
              }
            }
      
            if(sidebar.hf && sidebar.ff){
              document.getElementById('sidebar').classList.add('fixed');
              console.log('hi')
            }else if(sidebar.hf && !sidebar.ff){
              document.getElementById('sidebar').classList.remove('fixed');
            }else if(!sidebar.hf && sidebar.ff){
              document.getElementById('sidebar').classList.remove('fixed');
            }else{
              document.getElementById('sidebar').classList.remove('fixed');
            }
      
            console.log(sidebar.hf,sidebar.ff)
          }
        })
      }
      
      let observer= new IntersectionObserver(callbackFunction,options);
      
      
      let hero = document.querySelector('.clinics-hero');
      if(hero){
        observer.observe(hero);
      }
      let ServicesTitle = document.querySelector('.js--services-title');
      if(ServicesTitle){
        observer.observe(ServicesTitle);
      } 
      
      let footer = document.querySelector('.footer');
      if(footer){
        observer.observe(footer);
      }
       
    } 
  }
  
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) 
  x.addListener(myFunction)

const sidebarMenu = document.querySelector('.side-bar-manu');
const mobileSidebar = document.querySelector('#sidebar');

if(sidebarMenu){
  sidebarMenu.addEventListener('click',e=>{
    mobileSidebar.classList.toggle('clinics-sidebar--open');
  })
}




//making sidebar menu sticky

// let optionForSidebarMenu = {
//   root: null,
//   rootMargin: '-120px 0px 10px 0px',
//   threshold: 0
// }


// function makeSicky(entries){
//   entries.forEach(entry=>{
//     if(!entry.isIntersecting){
//       sidebarMenu.classList.add('side-bar-manu--sticky');
//       console.log(entry)
//     }else{
//       sidebarMenu.classList.remove('side-bar-manu--sticky')
//     }
//   }) 
// }

// let observerForSidebarMenu= new IntersectionObserver(makeSicky,optionForSidebarMenu);
// let ServicesTitle = document.querySelector('.js--services-title');

// if(observerForSidebarMenu){
//   observerForSidebarMenu.observe(ServicesTitle);
// }


const clinicsSidebarItem = document.querySelectorAll('.clinics-sidebar__item');

if(clinicsSidebarItem && window.matchMedia("(max-width: 768px)")){
  clinicsSidebarItem.forEach(item=>{
    item.addEventListener('click',e=>{
      document.querySelector('.side-bar-manu span').textContent = item.textContent;
      mobileSidebar.classList.remove('clinics-sidebar--open');
    }) 
  })
}

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: ['100%', 0, '100%'],
      opacity: 0,
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['-100%', 0, 0],
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      direction: 'horizontal',
    },
    // when window width is >= 1060px
    1060: {
      direction: 'vertical',
      effect: 'creative',
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, '-100%', '100%'],
          opacity: 0,
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: [0, '100%', 0],
        },
      },
    }
  }
});

const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  spaceBetween: 100,
  slidesPerView: 1,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination1',
    type: 'bullets',
    clickable: true,
  },
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 500,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 1060px
    1060: {
      slidesPerView: 3,
    }
  }
});
