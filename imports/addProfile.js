import * as bootstrap from 'bootstrap'

Template.addProfile.events({
    'click .js-addModal'() {
        const addModal = new bootstrap.Modal('#addModal', {})
        document.querySelector("#addModal").addEventListener('hidden.bs.modal', event => {
            // do something...
            console.log("closing")
        })

        addModal.show()
    },
    'click .js-saveProfile'() {
        const addModal = bootstrap.Modal.getInstance('#addModal')
        let fname = document.querySelector("#fname").value
        let lname = document.querySelector("#lname").value
        let age = document.querySelector("#age").value
        let location = document.querySelector("#location").value
        // console.debug(`Saving ${fname} ${lname} is ${age} years old and lives in ${location}`)
        socialdb.insert({
            "first": fname,
            "surname": lname,
            "age": age,
            "address": location
        })
        addModal.hide()
    }
})