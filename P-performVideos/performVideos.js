gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function(){
    const footer = document.querySelector(".archiveFooter");
    const lastCard = document.querySelector(".archive.scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");

    pinnedSections.forEach((section, index, sections) => {
        let img = section.querySelector(".archiveContent");

        let nextSection = sections[index+1] || lastCard;
        let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;

        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end:
                    index === sections.length
                        ? `+=${lastCard.offsetHeight/2}`
                        : footer.offsetTop - window.innerHeight,
                pin:true,
                pinSpacing:false,
                scrub:1,
            }
        })
        gsap.fromTo(img, {scale:1},{
            scale:0.5,
            ease:"none",
            scrollTrigger: {
                trigger:section,
                start: "top top",
                end: endScalePoint,
                scrub: 1,
            }
        })
    });
});