class Oop {
    constructor() {
        this.events()
    }

    events() {
        let myFamily = (function () {
            let family = [];

            return {
                addMember: function (member) {
                    family.push(member);
                },

                removeMember: function (member) {
                    let familyIndex = family.indexOf(member);
                    if(familyIndex >= 0) {
                        family.splice(familyIndex, 1);
                    }
                },

                getFamilyMemebers: function () {
                    return JSON.parse(JSON.stringify(family));
                }
            }
        })();
        myFamily.addMember('Ed');
        myFamily.addMember('Uncle Alexander');
        myFamily.addMember('Vera');
        myFamily.addMember('Sonya');
        myFamily.addMember('Uliana');
        console.log(myFamily.getFamilyMemebers());
    }
}

export default Oop;