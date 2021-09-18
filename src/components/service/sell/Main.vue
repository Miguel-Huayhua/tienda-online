<template>
  <div>
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-6">
          <button
            class="btn btn-info dropdown-toggle btn-list"
            type="button"
            v-on:click="onclick()"
          >
            Ordenar por:
          </button>
          
          <ul class="items" ref="listaTipo">
            <li>
              <button v-on:click="onProds('LAC')" class="dropdown-item">
                Lacteos
              </button>
            </li>
            <li>
              <button v-on:click="onProds('EMB')" class="dropdown-item">
                Embutidos
              </button>
            </li>
            <li><a class="dropdown-item" href="#">Bebidas Alcohólicas</a></li>
            <li><a class="dropdown-item" href="#">Refrescos</a></li>
            <li><a class="dropdown-item" href="#">Cuidado Personal</a></li>
            <li><a class="dropdown-item" href="#">Abarrotes</a></li>
            <li><a class="dropdown-item" href="#">Aseo y Limpieza</a></li>
          </ul>
        </div>
        <div class="col-6">
          <div class="container-fluid">
            <form class="d-flex" v-on:submit.prevent="onsubmit">
              <input
                class="inp-se"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-search" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Sell ref="prods" />
  </div>
</template>

<script>
import Sell from "./comps/Sell.vue";
import axios from "axios";
export default {
  name: "main",
  components: {
    Sell,
  },
  methods: {
    onclick() {
      this.$refs.listaTipo.classList.toggle("show-items");
    },
    onProds(type) {
      axios.get(`https://api-tienda-miguel.herokuapp.com/prods/${type}`).then((val) => {
        console.log(val.data);
        this.$refs.prods.datos = val.data;
        document.title=type
      });
    },
  },
};
</script>

<style>
.items {
  transform: translateY(-50%);
  position: absolute;
  visibility: hidden;
}
.show-items {
  position: relative;
  visibility: visible;
  transform: translateY(0%);
  transition: transform 0.5s;
}
</style>