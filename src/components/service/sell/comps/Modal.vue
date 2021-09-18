<template>
  <div ref="ventana" class="ventana">
    <button class="button" v-on:click="onclickClose">
      <i class="fas fa-times-circle"></i>
    </button>
    <div v-if="info" class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-sm-6 col-md-5 col-xl-4">
          <img class="img-data" v-bind:src="info.img" alt="" />
        </div>
        <div class="col-10 col-md-5 offset-md-1">
          <h2>{{ info.nombre }}</h2>
          {{ info.descripcion }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    info: Object,
  },
  methods:{
    onclickClose(){
      this.$refs.ventana.classList.remove('ventana-visible')
    }
  }
};
</script>

<style>
.ventana {
  background-color: rgb(235, 243, 245);
  border: 2px solid rgb(67, 133, 133);
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(182, 199, 199, 0.377);
  width: 70%;
  margin-left: 10%;
  z-index: 10;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  top: 20px;
}

.ventana-visible {
  
  visibility: visible;
  opacity: 1;
  transition: opacity 1s;
}
.img-data {
  width: 100%;
}
h2 {
  color: rgb(4, 88, 88);
  font-variant: small-caps;
  text-align: center;
}

.button{
  background-color: transparent;
  border: 1px solid transparent;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 110;
}
.button:focus{
  outline: none;
}
.button > i{
  font-size: 2em;
}
</style>