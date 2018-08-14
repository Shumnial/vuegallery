import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		photos: [],
		activePhoto: null,
		seen: false
	},
	mutations: {
		getPhotos: (state, data) => {
			state.photos = data;
		},
		displayModal: state => {
			state.seen = !state.seen;
		},
		openPhoto: (state, photo) => {
			state.activePhoto = photo;
			state.seen = !state.seen;
		},
		uploadPhotos: (state, previewFiles) => {
			previewFiles.forEach(el => {
				return {name: el.name, descr: el.descr}
			})
		},
		deletePhoto: (state, photo) => {
			const index = state.photos.findIndex(el => el.name === photo.name);
			state.photos.splice(index, 1);
		}
	}
});

export default store;
