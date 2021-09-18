<template>
  <div>
    <div class="card mt-4 card-main">
      <img
        v-on:click="onclickInfo"
        class="card-img-top"
        v-bind:src="img"
        alt="imagen producto"
      />
      <div class="card-body d-flex flex-column align-items-center">
        <h2>{{ titulo }}</h2>

        <div style="width: 100%">
          <button v-on:click="onclickInfo()" class="btn btn-outline-info" style="font-size: 14px ;width: 100%">
            Más detalles
          </button>
        </div>
      </div>
      <div class="card-footer d-flex flex-column align-items-center c-foot">
        <button
          v-on:click="onclickShoppingCar"
          class="btn btn-info"
          style="width: 70%"
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
      <div class="precio d-flex justify-content-center align-items-center">
        <h5>{{ precio }} Bs.</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      cantidad: 0,
    };
  },
  props: {
    precio: Number,
    img: String,
    detalle: String,
    titulo: String,
    datos: Object,
  },

  methods: {
    onclick() {
      this.nombre = "Pepe";
    },
    onclickShoppingCar() {
      this.$parent.info = this.datos;

      this.$parent.$refs.carrito.$el.classList.remove("ventana-visible");
      setTimeout(() => {
        this.$parent.$refs.carrito.$el.classList.add("ventana-visible");
      }, 100);
    },
    onclickInfo() {
      this.$parent.info = this.datos;
      this.$parent.$refs.mod.$el.classList.remove("ventana-visible");
      setTimeout(() => {
        this.$parent.$refs.mod.$el.classList.add("ventana-visible");
      }, 100);
    },
  },
};
</script>

<style>
.card-body > h2 {
  font-variant: small-caps;
  font-size: 1.2em;
  text-align: center;
}
.card-body > p {
  font-size: 0.9em;
}
.card-footer > h5 {
  font-size: 1em;
}

.main-button > button {
  margin: 0 10px;
}
.card-main {
  border-radius: 1.5em !important;
  overflow: hidden;
}
.precio {
  position: absolute;
  font-size: 1em;
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  height: 40px;
  background-color: rgb(53, 82, 109);
}

.precio > h5 {
  font-size: 1em;
  margin: 0 15px;
  color: aliceblue;
  font-variant: small-caps;
}
</style>