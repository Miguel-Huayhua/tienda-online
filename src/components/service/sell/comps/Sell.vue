<template>
  <div class="container-fluid mt-3">
    <div class="alerta d-flex align-items-center bg-outline-danger">
      <i class="fas fa-exclamation-circle"></i>
      <h6 class="mt-1">Por favor, asegurese que la cantidad sea arriba de 0</h6>
    </div>

    <Modal ref="mod" v-bind:info="info"></Modal>
    <Carrito v-bind:shop="shop" v-bind:datos="info" ref="carrito"></Carrito>
    <div ref="products" v-on:click="onclickProducts" class="row">
      <div
        v-for="data in datos"
        v-bind:key="data.id_prod"
        class="col-6 col-sm-4 col-lg-3"
      >
        <Card
          v-bind:datos="data"
          v-bind:titulo="data.nombre"
          v-bind:precio="data.precio"
          v-bind:img="data.img"
          v-bind:detalle="data.descripcion"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Modal from "./Modal.vue";
import Carrito from "./ModalCarrito.vue";
import axios from "axios";
export default {
  name: "Sell",
  components: {
    Card,
    Modal,
    Carrito,
  },
  data() {
    return {
      nombre: "",
      datos: null,
      info: null,
      shop: [],
    };
  },
  methods: {
    onclickProducts() {
      this.$refs.carrito.$el.classList.remove("ventana-visible");
      this.$refs.mod.$el.classList.remove("ventana-visible");
      this.$refs.carrito.total = 0;
      console.log((this.$refs.carrito.$refs.cant.value = "0"));
    },
    onsubmit() {
      console.log("Hola");
    },
  },
  mounted() {
    axios.get("http://localhost:3000/").then((val) => {
      this.datos = val.data;
    });
  },
};
</script>

<style>
.btn-list {
  position: relative;
  z-index: 10;
}

.inp-se {
  border-radius: 20px 0 0 20px !important;
  background-color: rgb(31, 66, 88);
  color: rgb(255, 255, 255);
  border: none;
  outline: none;
  width: 80%;
}
.btn-search {
  border: 1px solid rgb(31, 66, 88);
  border-radius: 0 20px 20px 0;
}
.alerta {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 200;
  width: 20%;
  transform: translateX(100%);
  min-width: 250px;
  justify-content: space-between;
  border-radius: 10px;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  height: 70px;
  background-color: rgb(241, 221, 217);
}
.alerta > i {
  font-size: 2em;
  margin-right: 6px;
  margin-left: 50px;
}
.alerta > h6 {
  font-size: 0.95em;
}
.show-alert {
  animation-duration: 5s;
  animation-name: mueve;
}
@keyframes mueve {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>