import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: "https://www.goodfreephotos.com/albums/singapore/singapore-buildings-skyscrapers-skyline.jpg",
                id: "d23232",
                title: "Meetup in California",
                date: "2019-04-13",
                location: "New Zeland",
                description: "Meetup in south Africa"
            },
            {
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuwMukU39aGDdLY9D-SE-mMnaHnElsV-mMrzUbsWx_G_Q7cmU",
                id: "asd234",
                title: "Meetup in Diego",
                date: "2020-04-19",
                location: "San Deigo",
                description: "Meetup in south Africa"
            },
            {
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Singapore_Skyline_at_Night_with_Black_Sky.JPG",
                id: "edd233",
                title: "Meetup in Toronto",
                date: "2019-06-29",
                location: "cape Town",
                description: "Meetup in south Africa"
            }
        ],
        user: {
            id: "a111211as",
            registeredMeetups: []
        }
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload);
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: "adasd121"
            }
            // reach out to firebase and store it 
            commit('createMeetup', meetup);
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetUpA, meetUpB) => {
                return meetUpA.date > meetUpB.date
            });
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return function (meetUpId) {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id == meetUpId;
                });
            };
        }
    }
});