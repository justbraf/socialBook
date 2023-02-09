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
    'click .js-delete'() {
        let that = this
        console.debug("deleting", that._id)
        socialdb.remove({ "_id": that._id })
    }
})