import * as bootstrap from 'bootstrap'

Template.listProfiles.helpers({
    profiles() {
        return socialdb.find()
    }
})

Template.listProfiles.events({
    'click .js-view'() {
        let that = this
        const viewModal = new bootstrap.Modal('#viewModal', {})
        console.warn("viewing", that)
        document.querySelector('#viewProfile').src = that.profile
        document.querySelector('#viewName').innerHTML = `${that.first} ${that.surname}`
        document.querySelector('#viewAge').innerHTML = that.age
        document.querySelector('#viewLocation').innerHTML = `location: ${that.address}`
        viewModal.show()
    },
    'click .js-delete'(event) {
        let that = this
        const confirmModal = new bootstrap.Modal('#confirmDelModal', {})
        document.querySelector("#delID").value = that._id
        confirmModal.show()
        event.target.parentNode.parentNode.classList.add('deleteIt')
    },
    'click .myRating'(event) {
        // console.log(event.currentTarget)
        // console.log("rating: ", $("#" + event.currentTarget.id).data("userrating"))
        socialdb.update({
            "_id": event.currentTarget.id
        },{
            $set:{
                rating: $("#" + event.currentTarget.id).data("userrating")
            }
        })
    }
})