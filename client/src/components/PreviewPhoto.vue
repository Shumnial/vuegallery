<template>
	<transition name="fade">
		<span class="preview__photo">
			<img 
			:src="file.name" 
			@click="$emit('openPreviewFilters', file)">
			<button 
			class="preview__close-btn"
			@click.prevent="$emit('deletePreview', file)">X</button>
		</span>
	</transition>
</template>

<script type="text/javascript">

export default {
	name: "PreviewPhoto",
	props: ["file"],
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.preview__photo {
	position: relative;
  display: block;
  width: 14%;
  margin-right: 1.25%;
  margin-left: 1.25%;
  margin-bottom: 2.5%;
  border-radius: 15px;
  cursor: pointer;
}

.preview__photo img {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}

.preview__photo::after {
	content: "";
  display: block;
  padding-bottom: 60%;
}

.preview__close-btn {
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
}
</style>
