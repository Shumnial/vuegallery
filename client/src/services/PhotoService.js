import API from '@/services/api'

export default {
	fetchPhotos () {
		return API.get('photos');
	},
	addPhotos (params) {
		return API.post('photos', params);
	},
	deletePhoto (id) {
    return API.delete(`photos/${id}`)
  }
}