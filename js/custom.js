//즉시실행함수

(function () {
    mainVisualTimeline();
    portfolioWrapTimeline();
    coverTimeline();
    gnbEvent();
    circleTxt(`.profile .ctxt`);
})();


function coverTimeline() {
    const btn = document.querySelector('.utils_wrap .btn');
    const cover = document.querySelector('.gnb');
    btn.addEventListener('click', e => {
        const t = e.currentTarget;
        t.classList.toggle('is-active')
        cover.classList.toggle('on')
    })
}

function gnbEvent() {
    const cover = document.querySelector('.gnb');
    const btn = document.querySelector('.utils_wrap .btn');
    cover.addEventListener('wheel', e => {
        //e.preventDefault();
        e.stopPropagation(); // 이벤트의 전파를 막음
    });

    const lnk = document.querySelectorAll('.gnb .lnk a');

    lnk.forEach((it, idx) => {
        it.addEventListener('click', () => {
            cover.classList.remove('on');
            btn.classList.remove('is-active');
        })
    })
}


function mainVisualTimeline() {
    const t = document.querySelector('.mainVisal .tit h2');
    const p = document.querySelector('.mainVisal .tit p');
    const a = document.querySelector('.mainVisal .t');

    const tl = gsap.timeline();
    tl
        .from(t, {
            x: 1000,
            autoAlpha: 0,
            delay: 0.5,
            duration: 0.5,
        })
        .from(p, {
            x: 1000,
            autoAlpha: 0,
            delay: 0.5,
            duration: 0.5,
        }).to("#div", {
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,

            },
            duration: 10,
            //repeat: -1,
        }).to("#div2", {
            motionPath: {
                path: "#path2",
                align: "#path2",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,

            },
            duration: 10,
            //yoyo: true,
            repeat: -1,
        })
}


function portfolioWrapTimeline() {

    const tlw = gsap.timeline();


    const wrap = gsap.utils.toArray(".portfolio .slide_wrap .con");

    tlw.from(
        '.portfolio .title h3', {
        x: 500,
        autoAlpha: 0,
        scrollTrigger: {
            trigger: '.portfolio .title h3',
            pin: false,
            scrub: 1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            start: 'top center',
            end: '300px center',
            // markers: true,
        }
    }
    ).from(
        '.portfolio .title p', {
        x: 500,
        autoAlpha: 0,
        scrollTrigger: {
            trigger: '.portfolio .title p',
            pin: false,
            scrub: 1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            start: '300px center',
            end: '600px center',
            //markers: true,
        }
    }
    ).from(
        '.portfolio .title strong', {
        x: 500,
        autoAlpha: 0,
        scrollTrigger: {
            trigger: '.portfolio .title strong',
            pin: false,
            scrub: 1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            start: '600px center',
            end: '900px center',
            //markers: true,
        }
    }
    ).to(`#itm0x`, {
        motionPath: {
            path: `#path0x`,
            align: `#path0x`,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,

        },
        duration: 10,
        repeat: -1
    })


    const wm = gsap.to(wrap, {
        xPercent: -100 * (wrap.length + 1),
        ease: "none",
        scrollTrigger: {
            trigger: '.portfolio',
            pin: true,
            scrub: 1,
            snap: 1 / (wrap.length + 1),//scrub: 0일 경우 작동하지 않음
            start: 'top top',
            end: () => '+=' + document.querySelector('.portfolio').offsetWidth * 6,
        }

    })

    const itmsH = gsap.utils.toArray(".portfolio .slide_wrap .slide .inner .desc h3");
    const itmsP = gsap.utils.toArray(".portfolio .slide_wrap .slide .inner .desc p");
    const itmsD = gsap.utils.toArray(".portfolio .slide_wrap .slide .inner .desc .table");
    const itmsL = gsap.utils.toArray(".portfolio .slide_wrap .slide .inner .desc .link");
    const itmsPH = gsap.utils.toArray(".portfolio .slide_wrap .slide .inner .desc .path");

    itmsH.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',

            }
        })
    });

    itmsP.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            delay: 0.5,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',

            }
        })
    });

    itmsD.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            delay: 1,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',

            }
        })
    });

    itmsL.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            delay: 1.5,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',

            }
        })
    });
}

function portfolioTimeline(n) {
    const t = document.querySelectorAll('.portfolio .desc h3');
    const p = document.querySelectorAll('.portfolio .desc p');
    const m = document.querySelectorAll('.portfolio .mokup');
    const tb = document.querySelectorAll('.portfolio .table');
    const lnk = document.querySelectorAll('.portfolio .link');

    const tl = gsap.timeline();

    tl
        .from(m[n], {
            autoAlpha: 0,
            y: 200,
            delay: 0.5,
        })
        .from(t[n], {
            autoAlpha: 0,
            x: 200,
            duration: 0.3,
        })
        .from(p[n], {
            autoAlpha: 0,
            x: 200,
            duration: 0.3,
        })
        .from(tb[n], {
            autoAlpha: 0,
            x: 200,
        })
        .from(lnk[n], {
            autoAlpha: 0,
            x: 200,
        })
        .to(`#itm0${n}`, {
            motionPath: {
                path: `#path0${n}`,
                align: `#path0${n}`,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,

            },
            duration: 10,
        })
}


function storyTimeline() {
    const t = document.querySelector('.portfolio .tit h3');
    const p = document.querySelector('.portfolio .tit p');

    const tl = gsap.timeline();

    tl.from(t, {
        autoAlpha: 0,
        x: 2000,
        delay: 0.5,
    }).from(p, {
        autoAlpha: 0,
        x: 2000,
        delay: 0.5,
    }).to(`#itm0x`, {
        motionPath: {
            path: `#path0x`,
            align: `#path0x`,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,

        },
        duration: 10,
    })
}


function profileTimeline() {
    const t = document.querySelector('.profile .tit h3');
    const p = document.querySelector('.profile .tit p');
    const c = document.querySelector('.profile .ctxt');
    const tl = gsap.timeline();

    tl.from(t, {
        x: 1000,
        autoAlpha: 0,
        delay: 1
    }).from(p, {
        x: 1000,
        autoAlpha: 0,
        delay: 1
    })
}

function mouseCursor() {
    const mc = document.querySelectorAll('.mainVisal , .profile');
    mc.forEach(it => {
        it.addEventListener('mousemove', (e) => {
            let mouseX = e.pageX + 10; // document의 x좌표값
            let mouseY = e.pageY + 10; // document의 y좌표값

            const cursor = document.querySelector('.cursor');
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        })
    })
}

function mouseCursorReset() {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = 80 + 'px';
    cursor.style.top = 'auto';
    cursor.style.bottom = 40 + 'px';
}


function circleTxt(txt) {
    const t = document.querySelector(txt).innerText;
    const at = [...t].map(it => `<span>${it}</span>`).join('');
    document.querySelector(txt).innerHTML = at;
    const b = document.querySelector(txt);
    const ctxt = b.querySelectorAll("span");
    console.log(ctxt);

    ctxt.forEach((it, idx, arry) => {
        it.style.cssText = `
        position: absolute;
        top:0;
        left: 50%;
        height: 100%;
        transform: translate(-50%,0) rotate(${360 / arry.length * idx}deg)
        `
    })
}


document.querySelector('.totop').addEventListener('click', () => {
    gsap.to(window, { duration: 2, scrollTo: 0 })
})









