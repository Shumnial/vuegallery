import Vue from "vue";
import Router from "vue-router";

import UploadForm from "@/components/UploadForm";
import Gallery from "@/components/Gallery";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/upload-form",
			name: "UploadForm",
			component: UploadForm
		},
		{
			path: "/gallery",
			name: "Gallery",
			component: Gallery
		}
	]
});
