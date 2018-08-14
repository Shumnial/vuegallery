<template>
  <div id="app">
    <!-- <router-link to="/upload-form">Форма загрузки</router-link>
    <router-link to="/photo-gallery">Галерея</router-link> -->
    <router-view></router-view>
    <UploadForm @handleFileSelect="handleFileSelect">
    </UploadForm>
    <Preview 
    v-if="previewFiles.length > 0"
    :previewFiles="previewFiles"
    @openPreviewFilters="openPreviewFilters"
    @uploadPhotos="uploadPhotos" 
    @deletePreview="deletePreview"
    @deleteAllPreview="deleteAllPreview">
    </Preview>
    <Gallery
    v-if="photos.length > 0"
    :photos="photos"
    @openPhoto="openPhoto" 
    @deletePhoto="deletePhoto">
    </Gallery>
    <PreviewFilters 
    v-if="filtersSeen"
    :file="activePreview"
    @displayPreviewFilters="displayPreviewFilters"
    @onPreviewFormSubmit="onPreviewFormSubmit"
    />
    <GalleryModal 
      v-if="seen" 
      :photo="activePhoto"
      @displayModal="displayModal"/>
  </div>
</template>

<script>
import Vue from "vue";
import {mapState, mapGetters} from "vuex";
import UploadForm from "@/components/UploadForm";
import Gallery from "@/components/Gallery";
import GalleryPhoto from "@/components/GalleryPhoto";
import GalleryModal from "@/components/GalleryModal";
import Preview from "@/components/Preview";
import PreviewPhoto from "@/components/PreviewPhoto";
import PreviewFilters from "@/components/PreviewFilters";
import PhotoService from '@/services/PhotoService';
Vue.component("UploadForm", UploadForm);
Vue.component("Gallery", Gallery);
Vue.component("GalleryPhoto", GalleryPhoto);
Vue.component("GalleryModal", GalleryModal);
Vue.component("Preview", Preview);
Vue.component("PreviewPhoto", PreviewPhoto);
Vue.component("PreviewFilters", PreviewFilters);

export default {
  name: "App",
  props: [],
  data() {
    return {
      photoFiles: [],
      previewFiles: [],
      activePreview: null,
      filtersSeen: false
    };
  },
  computed: {
    ...mapState([
      'photos',
      'activePhoto',
      'seen',
      ])
  },
  methods: {
    displayModal () {
      this.$store.commit('displayModal');
    },
    openPhoto (photo) {
      this.$store.commit('openPhoto', photo);
    },
    async uploadPhotos () {
      try {
        const fd = new FormData();
        this.photoFiles.forEach(n => fd.append('photos', n));
        const response = await PhotoService.addPhotos(fd);
        this.previewFiles = [];
        this.photoFiles = [];
        this.getPhotos();
      } catch(err) {
        console.log("err: ", err);
      }
    },
    async deletePhoto (photo) {
      await PhotoService.deletePhoto(photo._id);
      this.getPhotos();
    },
    displayPreviewFilters () {
      this.filtersSeen = !this.filtersSeen;
    },
    openPreviewFilters (file) {
      this.activePreview = file;
      this.displayPreviewFilters();
    },
    deletePreview (file) {
      const index = this.previewFiles.findIndex(el => el.name === file.name);
      this.previewFiles.splice(index, 1);
    },
    deleteAllPreview () {
      this.previewFiles = [];
    },
    onPreviewFormSubmit (file) {
      const index = this.previewFiles.findIndex(el => el.name === file.name);
      this.previewFiles[index].descr = file.descr;
      this.activePreview = this.previewFiles[index];
      this.filtersSeen = !this.filtersSeen;
    },
    handleFileSelect (evt) {
      const target = evt.currentTarget;
      const files = target.files;
      const filesArray = [];
      for(let i = 0; i < target.files.length; i++) {
        filesArray.push(target.files[i])
      }
      this.photoFiles = [...this.photoFiles, ...filesArray];

      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.onload = () => {
          this.previewFiles.push({'name': reader.result});
        };
        reader.readAsDataURL(files[i]);
      }
      target.value = "";
    },
    async getPhotos () {
      const response = await PhotoService.fetchPhotos();
      this.$store.commit('getPhotos', response.data.photos);
      console.log("response.data.photos: ", response.data.photos);
    }
  },
  mounted () {
    this.getPhotos();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: #fff;
  margin-top: 60px;
}

body {
  background-color: #232321;
}

a {
  color: #fff;
}

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
