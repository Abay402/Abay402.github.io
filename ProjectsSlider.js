const containers = document.querySelectorAll(".ProjectsSliderContainer");
const projectOverlay = document.getElementById("ProjectOverlay");
const projectFrame = document.getElementById("ProjectFrame");
const closeProject = document.getElementById("CloseProject");

closeProject.addEventListener("click", () => {

    projectOverlay.style.display = "none";

    projectFrame.src = "";

    document.body.style.overflow = "";

});


containers.forEach(container => {

    let boxes = Array.from(container.children);

    if (boxes.length < 3) return;


    function updateClasses() {
        boxes.forEach((box, index) => {

            box.classList.remove(
                "ProjectsLeft",
                "ProjectsMiddle",
                "ProjectsRight",
                "ProjectsHidden"
            );

            if (index === 0) {
                box.classList.add("ProjectsLeft");
            }
            else if (index === 1) {
                box.classList.add("ProjectsMiddle");
            }
            else if (index === 2) {
                box.classList.add("ProjectsRight");
            }
            else {
                box.classList.add("ProjectsHidden");
            }
        });
    }

    updateClasses();


    container.addEventListener("click", event => {

        const clicked = event.target.closest(".ProjectsBox");

        if (!clicked) return;

        const index = boxes.indexOf(clicked);

        if (index === 1) {
            const link = clicked.dataset.href;

            if (link) {
                projectFrame.src = link;

                projectOverlay.style.display = "block";

                document.body.style.overflow = "hidden";
            }

            return;
        }


        const oldPositions = new Map();

        boxes.forEach(box => {
            oldPositions.set(
                box,
                box.getBoundingClientRect()
            );
        });


        if (index === 0) {

            // Last box comes in from the LEFT
            const incoming = boxes[boxes.length - 1];

            container.insertBefore(incoming, boxes[0]);

            boxes = Array.from(container.children);

            updateClasses();

            boxes.forEach(box => {

                const oldRect = oldPositions.get(box);

                if (!oldRect) return;

                const newRect = box.getBoundingClientRect();

                const x = oldRect.left - newRect.left;

                box.animate(
                    [
                        { transform: `translateX(${x}px)` },
                        { transform: "translateX(0)" }
                    ],
                    {
                        duration: 500,
                        easing: "ease",
                        fill: "none"
                    }
                );
            });

            const newLeft = boxes[0];
            const newRect = newLeft.getBoundingClientRect();

            newLeft.animate(
                [
                    {
                        transform: `translateX(${-container.offsetWidth}px)`
                    },
                    {
                        transform: "translateX(0)"
                    }
                ],
                {
                    duration: 500,
                    easing: "ease"
                }
            );

        }


        else if (index === 2) {

 
            const incoming = boxes[3 % boxes.length];

            container.appendChild(boxes[0]);

            boxes = Array.from(container.children);

            updateClasses();

            boxes.forEach(box => {

                const oldRect = oldPositions.get(box);

                if (!oldRect) return;

                const newRect = box.getBoundingClientRect();

                const x = oldRect.left - newRect.left;

                box.animate(
                    [
                        { transform: `translateX(${x}px)` },
                        { transform: "translateX(0)" }
                    ],
                    {
                        duration: 500,
                        easing: "ease",
                        fill: "none"
                    }
                );
            });



            const newRight = boxes[2];

            newRight.animate(
                [
                    {
                        transform: `translateX(${container.offsetWidth}px)`
                    },
                    {
                        transform: "translateX(0)"
                    }
                ],
                {
                    duration: 500,
                    easing: "ease"
                }
            );
        }

    });

});
document.querySelectorAll('.ContactsBox').forEach(box => {
    box.addEventListener('click', () => {
        window.open(box.dataset.href, '_blank');
    });
});

document.querySelectorAll('.ContactsBoxHome').forEach(box => {
    box.addEventListener('click', () => {
        window.location.href = box.dataset.href;
    });
});