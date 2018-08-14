<template>
	<div class="gallery">
		<div class="gallery__wrapper">
			<GalleryPhoto
			@openPhoto="$emit('openPhoto', arguments[0])" 
			@deletePhoto="$emit('deletePhoto', arguments[0])"
			v-for="item in photos"
			:photo="item"
			:title="date"
			/>
		</div>
	</div>
</template>

<script>

export default {
	
	name: "Gallery",
	props: ["photos"],
	data() {
		return {
			date: new Date()
		}
	}
};
</script>

<style type="text/css">
.gallery {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 0 auto;
	background-color: #3e3e3b;
	width: 100%;
	max-width: 1160px;
	border-radius: 15px;
	margin-bottom: 40px;
}
.gallery__wrapper {
	width: 100%;
	display: flex;
	align-items: flex-start;
	align-content: space-between;
	flex-wrap: wrap;
	padding: 2.5%;
	padding-bottom: 0;
}

</style>
