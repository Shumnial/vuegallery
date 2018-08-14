<template>
	<div class="overlay" @click="$emit('displayModal')"><slot></slot></div>
</template>

<script type="text/javascript">

export default {
	name: "Overlay",
	data() {
		return {};
	}
};
</script>

<style type="text/css">
.overlay {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
}
</style>
