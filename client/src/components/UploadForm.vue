<template>
  <form enctype="multipart/form-data" method="post" class="upload-form" novalidate="">
    <input 
    type="file" 
    id="upload-file" 
    class="upload-form__input" 
    name="filename" 
    required
    multiple
    accept="image/jpeg,image/png,image/gif"
    @change="$emit('handleFileSelect', $event)">
    <p class="upload-form__text">Drop your files here</p>
    <slot></slot>
  </form>
</template>

<script>

export default {
  name: "UploadForm",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.upload-form {
  position: relative;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 1160px;
  border-radius: 15px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
  box-sizing: border-box;
}

.upload-form::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 96%;
  height: 80%;
  border: 2px dashed gray;
}

.upload-form__text {
  color: black;
  transition: transform 0.3s;
}

.upload-form:hover .upload-form__text {
  transform: scale(1.2);
}

.upload-form__input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}

.upload-form__label {
  cursor: pointer;
}

.upload-form__label img {
  width: 100px;
  height: 100px;
  transition: transform 0.3s;
}

.upload-form__label:hover img {
  transform: scale(1.1);
}

@keyframes shake {
  0% {
    transform: rotate(10deg);
  }
  33% {
    transform: rotate(0deg);
  }
  66% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
