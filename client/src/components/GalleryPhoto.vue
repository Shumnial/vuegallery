<template>
	<transition name="fade">
		<a href="" class="gallery__photo">
			<button class="gallery__close-btn" @click.prevent="$emit('deletePhoto', photo)">X</button>
			<img
				@click.prevent="$emit('openPhoto', photo)"  
				:src="`/uploads/${photo.path}`" 
				:data-id="photo._id"
				alt=""/>
		</a>
	</transition>
</template>

<script>
export default {
	name: "GalleryPhoto",
	props: ["photo"],
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.gallery__photo {
	position: relative;
	display: block;
	width: 21.25%;
	margin-left: 2%;
	margin-right: 2%;
	margin-bottom: 2.5%;
}

.gallery__close-btn {
	display: none;
	position: absolute;
	right: 0;
	z-index: 1;
	cursor: pointer;
}

.gallery__photo:hover .gallery__close-btn {
	display: block;
}

.gallery__photo::after {
	content: "";
	display: block;
	
}

.gallery__photo img {
	display: block;
	max-width: 100%;
	height: auto;
}

.gallery__photo:nth-child(4n) {
	margin-right: 0;
}
</style>
