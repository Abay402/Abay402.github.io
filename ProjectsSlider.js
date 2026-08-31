const containers = document.querySelectorAll(".ProjectsSliderContainer");

containers.forEach(container => {

    container.addEventListener("click", (event) => {

        const clicked = event.target.closest(".ProjectsBox");

        if (!clicked) return;

        const boxes = Array.from(container.children);

        const oldPositions = new Map();

        boxes.forEach(box => {
            oldPositions.set(box, box.getBoundingClientRect());
        });

        const index = boxes.indexOf(clicked);


        if (index === 0) {
       
            container.insertBefore(boxes[2], boxes[0]);
        }
        else if (index === 2) {
        
            container.appendChild(boxes[0]);
        }
        else {
            return;
        }

        boxes.forEach(box => {

            const oldRect = oldPositions.get(box);
            const newRect = box.getBoundingClientRect();

            const x = oldRect.left - newRect.left;
            const y = oldRect.top - newRect.top;


            box.animate(
                [
                    {
                        transform: `translate(${x}px, ${y}px)`
                    },
                    {
                        transform: "translate(0, 0)"
                    }
                ],
                {
                    duration: 500,
                    easing: "ease",
                    fill: "none"
                }
            );
        });

    });

});