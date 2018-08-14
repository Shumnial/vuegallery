<template>
	<transition name="fade">
		<div>
			<div class="overlay" @click.prevent="$emit('displayPreviewFilters')"></div>
		  <form class="preview-filters" method="post" enctype="multipart/form-data" action="#" @submit.prevent="$emit('onPreviewFormSubmit', file)">
		  	<div class="preview-filters__wrapper">
		  		<img class="preview-filters__img" :src="file.name">
		  		<fieldset class="preview-filters__info filters-info">
		  			<!-- <input class="filters-info__item filters-info__item--name" type="text" name="photoName" placeholder="Название"> -->
		  			<textarea v-model="file.descr" class="filters-info__item filters-info__item--descr" type="text" name="photoDescr" placeholder="Описание">{{ file.descr }}</textarea>
		  		</fieldset>
		  		<!-- <fieldset class="preview-filters__list filters">
		  			<input id="filter-none" type="radio" name="filter" value="none">
		  			<label for="filter-none"></label>
		  		
		  			<input id="filter-chrome" type="radio" name="filter" value="chrome">
		  			<label for="filter-chrome"></label>
		  		
		  			<input id="filter-sepia" type="radio" name="filter" value="sepia">
		  			<label for="filter-sepia"></label>
		  		</fieldset> -->
		  		<button class="preview-filters__btn preview-filters__btn--save">ОК</button>
		  		<button class="preview-filters__btn preview-filters__btn--close" @click.prevent="$emit('displayPreviewFilters')">X</button>
		  	</div>
		  </form>
		</div>
	</transition>
</template>

<script type="text/javascript">
	export default {
		name: "PreviewFilters",
		props: ["file"],
		data() {
			return {}
		}
	};
</script>

<style type="text/css">
.preview-filters {
	position: fixed;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	margin: auto;
	background-color: #fff;
	z-index: 1000;
	background-color: transparent;
	max-width: 30%;
}

.preview-filters__wrapper {
	position: relative;
	display: inline-block;
}

.preview-filters__img {
	max-width: 100%;
	height: auto;
}

.preview-filters__btn--save {
	font-size: 16px;
	padding: 10px 30px;
}

.preview-filters__btn--close {
	position: absolute;
	top: -25px;
	right: -30px;
	cursor: pointer;
}

.filters-info {
	padding: 5px;
	box-sizing: border-box;
	margin-bottom: 20px;
}

.filters-info__item {
	display: block;
	font-size: 16px;
	font-family: "Arial";
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	outline: none;
}

.filters-info__item--name {
	margin-bottom: 5px;
}

.filters-info__item--descr {
	min-height: 100px;
}
</style>