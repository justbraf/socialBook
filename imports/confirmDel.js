import * as bootstrap from 'bootstrap'

Template.confirmDel.events({
    'click .js-confirm'() {
        const confirmDelModal = bootstrap.Modal.getInstance('#confirmDelModal')
        const delID = document.querySelector("#delID").value
        console.log("delete me", delID)
        confirmDelModal.hide()
        document.querySelector(".deleteIt").classList.add("hideIt")
        setTimeout(() => {
            socialdb.remove({ "_id": delID })
        }, 1000)
    },
    'click .js-cancelDelete'() {
        document.querySelector(".deleteIt").classList.remove('deleteIt')
    }
})