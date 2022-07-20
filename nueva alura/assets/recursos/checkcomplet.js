     const checkcomplet = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon" );
        i.addEventListener("click", completTask);
        return (i);
    }

    const completTask = (event) => {
        const elemente = event.target;
        elemente.classList.toggle("fas");
        elemente.classList.toggle("completeIcon");
        elemente.classList.toggle("far");

    }

    export default checkcomplet
