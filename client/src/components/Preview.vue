<template>
<transition name="fade">
	<div class="preview">
		<form @submit.prevent="$emit('uploadPhotos')" class="preview__form" enctype="multipart/form-data" method="post">
			<div class="preview__list">
				<PreviewPhoto
				@openPreviewFilters="$emit('openPreviewFilters', arguments[0])"
				@deletePreview="$emit('deletePreview', arguments[0])"
				v-for="file in previewFiles"
				:file="file">
				</PreviewPhoto>
			</div>
			<button 
			class="preview__btn preview__btn--upload"
			>Загрузить ({{ previewFiles.length }})</button>
			<button 
			class="preview__btn"
			@click.prevent="$emit('deleteAllPreview')"
			>Очистить</button>
		</form>
	</div>
</transition>	
</template>

<script>

export default {
	name: "Preview",
	props: ["previewFiles"],
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.preview {
	position: relative;
	background-color: #dedede;
	border-radius: 15px;
	max-width: 1160px;
	margin: 0 auto;
	margin-bottom: 40px;
	padding: 2.5%;
	box-sizing: border-box;
}

.preview__list {
	display: flex;
	flex-wrap: wrap;
}

.preview__item {

}

.preview__btn {
	padding: 10px 25px;
	border: none;
	background-color: #fff;
	border-radius: 5px;
	cursor: pointer;
}

.preview__btn--upload {
	margin-right: 15px;
}
</style>
