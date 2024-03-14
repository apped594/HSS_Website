
const buttons = document.querySelectorAll("[data-modal-id]");
;

buttons.forEach(button =>{

    button.addEventListener("click", e=> {

        let modals = document.getElementsByClassName("page-open")

        Array.from(modals).forEach(m =>{
            m.classList.remove("page-open")
        });

        
        const modalId = button.dataset.modalId;
        const modal = document.getElementById(modalId);
    
        modal.classList.toggle("page-open");
        document.getElementById("logo")
        .classList.add("transparency");
    })

})

const ContentPageButtons = document.querySelectorAll("[data-modal-id2]");

ContentPageButtons.forEach(button =>{

    

    button.addEventListener("click", e=>{
        

        let modals2 = document.getElementsByClassName("active")

        Array.from(modals2).forEach(m =>{
            m.classList.remove("active")
    
        });

        button.classList.add("alternative-labels")

        const modalId2 = button.dataset.modalId2;
        

        const contentExpand = document.getElementById(modalId2);
        contentExpand.classList.toggle("active");

    })
})

const exitButons = document.querySelectorAll("[data-modal-id3]");

exitButons.forEach(button =>{

    button.addEventListener("click", e=>{

        let modals2 = document.getElementsByClassName("active")

        Array.from(modals2).forEach(m =>{
            m.classList.remove("active")
        });
        let modals = document.getElementsByClassName("page-open")

        Array.from(modals).forEach(m =>{
            m.classList.remove("page-open")
        });

        document.getElementById("logo")
        .classList.remove("transparency");

        let expandButtons = document.getElementsByClassName("alternative-labels");

        Array.from(expandButtons).forEach(m=>{

            m.classList.remove("alternative-labels");
        })

      

    })
})