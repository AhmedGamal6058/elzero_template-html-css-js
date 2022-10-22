// setting
if(localStorage.getItem('color-option')!=null){
    document.documentElement.style.setProperty('--main--color',localStorage.getItem('color-option'));
    document.querySelectorAll('.colors-list li').forEach(el=>{
        el.classList.remove('active');
        if(el.dataset.color==localStorage.getItem('color-option')){
            el.classList.add('active');
        }
    })
}
document.querySelector('.setting-box .fa-cog').onclick = function(){
    this.classList.toggle('fa-spin');
    document.querySelector('.setting-box').classList.toggle('open');
    document.querySelector('.setting-box .toggle-setting').classList.toggle('open');
};
const colorlist=document.querySelectorAll('.setting-box .colors-list li');
colorlist.forEach(li=>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
        localStorage.setItem('color-option',e.target.dataset.color);
        e.target.parentElement.querySelectorAll('.active').forEach(el=>{
            el.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});
const backgroundchanges=document.querySelectorAll('.setting-box .option-box span');
backgroundchanges.forEach(span=>{
    span.addEventListener("click",(e)=>{
        e.target.parentElement.querySelectorAll('.active').forEach(span=>{
            span.classList.remove('active');
        });
        e.target.classList.add('active');
        if(e.target.dataset.background==='yes'){
            playbackgrounding();
        }
        else{
            backgroundoptins= false;
            clearInterval(backgroundinterval);
        }
    });
});
let bulletspan = document.querySelectorAll('.bullets-option span');
let bulletscontainer =document.querySelector('.nav-bullets');
bulletspan.forEach(bullets=>{
    bullets.addEventListener('click',()=>{
        if(bullets.dataset.display==='yes'){
            bulletscontainer.style.display='block';
        }
        else{
            bulletscontainer.style.display='none';
        }
    })
})
document.querySelector('.reset-options').onclick = ()=>{
    localStorage.clear();  
    document.location.reload();  
}

// landing
var i=1,
    backgroundoptins= true,
    backgroundinterval;

function playbackgrounding(){
    let landingpage = document.querySelector('.landing-page');

    backgroundinterval=setInterval(()=>{
            if (i===4){landingpage.style.backgroundImage="url('images/"+i+".jpeg')";}
            else {landingpage.style.backgroundImage="url('images/"+i+".jpg')";}
            i+=1;
            if(i==5){
                i=1;
            }
    },3000)
};
playbackgrounding();
let togglebtn =document.querySelector('.toggle-menu');
let tlinks =document.querySelector('.header-area .links');

togglebtn.onclick=(e)=>{
    e.stopPropagation();
    tlinks.classList.toggle('open');
    document.querySelector('.introduction-text').classList.toggle("open");
}
tlinks.onclick=(e)=>{
    e.stopPropagation();
}   
document.body.addEventListener("click",(e)=>{
    t=e.target.classList.contains('toggle-menu');
    p=tlinks.classList.contains('open');
    console.log(e.target);
    if(!(t & p &(e.target!==tlinks))){
        tlinks.classList.remove('open');
        document.querySelector('.introduction-text').classList.remove("open");
    }

})

// start progress //
let ourskills =document.querySelector('.skills');
window.onscroll = function(){
    let skillsoffsetTop =ourskills.offsetTop;
    let skillsoffsetHeight =ourskills.offsetHeight;
    let windowHeight =this.innerHeight;
    let windowscrolltop =this.pageYOffset;
    if( (windowscrolltop >= skillsoffsetTop+skillsoffsetHeight-windowHeight-200)&&(windowscrolltop <= skillsoffsetTop+skillsoffsetHeight-windowHeight+400)){
        let allskills = document.querySelectorAll('.skills .skills-box .skill-progress span');
        allskills.forEach(skill=>{
            skill.style.width=skill.dataset.progress;
        })
    }
    else{
        let allskills = document.querySelectorAll('.skills .skills-box .skill-progress span');
        allskills.forEach(skill=>{
            skill.style.width=0;
        })
    }
}

// start gallery
let ourgallery =document.querySelectorAll('.gallery img');

ourgallery.forEach(image=>{
    image.addEventListener('click',(e)=>{
        let overlay =document.createElement('div');
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);
        let popupbox = document.createElement('div');
        popupbox.className="popup-box";
        if(image.alt != null){
            let imgheading =document.createElement('h3');
            let imgtext =document.createTextNode(image.alt);
            imgheading.appendChild(imgtext);
            popupbox.appendChild(imgheading);
        }
        let closebutton =document.createElement('span');
        let textx = document.createTextNode('X');
        closebutton.appendChild(textx);
        closebutton.className='close-box';
        popupbox.appendChild(closebutton);
        let imgbox = document.createElement('img');
        imgbox.src=image.src;
        popupbox.appendChild(imgbox);
        document.body.appendChild(popupbox);

    });
});

document.addEventListener('click',(e)=>{
    if(e.target.className=="close-box"){
        e.target.parentNode.remove();
        document.querySelector('.popup-overlay').remove();
    }
})

// bullets
let allbullets =document.querySelectorAll('.nav-bullets .bullet');
let alllinks =document.querySelectorAll('.header-area .links li a');
function moveto(element){
    element.forEach(elm=>{
        elm.addEventListener('click',(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            })
        })
    })
}
moveto(allbullets);
moveto(alllinks);

