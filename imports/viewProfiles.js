Template.viewProfiles.helpers({
    profiles() {
        return socialdb.find()
    }
})