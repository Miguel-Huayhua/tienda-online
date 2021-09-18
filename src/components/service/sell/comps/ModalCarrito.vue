<template>
  <div ref="ventana" class="ventana">
    <button class="button" v-on:click="onclickClose">
      <i class="fas fa-times-circle"></i>
    </button>
    <div v-if="datos" class="container-fluid">
      <div class="row">
        <div class="total bg-light">
          <h3>
            Costo Unidad: <br />
            {{ datos.precio }} Bs.
          </h3>
        </div>
        <div class="col-12 col-sm-4 ">
          <div class="row">
            <div
              class="col-4 offset-4 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"
            >
              <img
                class="img-prod img-style mt-5"
                v-bind:src="datos.img"
                alt="imagen"
              />
            </div>
            <div class="col-12">
              <h3>
                {{ datos.nombre }}
              </h3>
            </div>
            <div class="col-10 offset-1 mt-2">
              <input
                v-on:change="onchange"
                type="number"
                class="input-group input-num"
                min="0"
                ref="cant"
                value="0"
              />
            </div>
            <div class="col-12 d-flex flex-column">
              <h4>Total {{ total }} Bs.</h4>
              <button
                v-on:click="onclickOk"
                class="btn btn-outline-info mb-1 ok"
              >
                Aceptar <i class="fas fa-check-circle"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-8 col-md-7 offset-md-1 mt-1">
          <div class="linea bg-info mt-2"></div>

          <h3>Lista de productos agregados...</h3>

          <ul v-if="prods.length > 0" class="lista list-group">
            <li
              v-for="data in prods"
              v-bind:key="data.datos.id_prod"
              class="mb-3 list-group-item"
            >
              <div class="total bg-warning">
                <h3>Total: {{ data.datos.precio * data.cantidad }} Bs.</h3>
              </div>
              <div class="row">
                <div
                  class="
                    col-4
                    offset-4
                    col-sm-6
                    offset-sm-3
                    col-lg-4
                    offset-lg-0
                  "
                >
                  <img
                    class="img-prod img-style"
                    v-bind:src="data.datos.img"
                    alt=""
                  />
                </div>
                <div
                  class="col-12 col-lg-7 d-flex flex-column align-items-center"
                >
                  <h3>{{ data.datos.nombre }}</h3>
                  <div class="col-12 d-flex justify-content-between">
                    <h4>Cantidad: {{ data.cantidad }}</h4>
                    <button
                      class="btn btn-outline-danger trash"
                      v-on:click="removeData(data)"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div v-else>
            <h3>No hay productos seleccionados aún...</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCarrito",
  data() {
    return {
      total: 0,
      cantidad: 0,
      prods: [],
    };
  },
  props: {
    datos: Object,
    shop: Array,
  },
  methods: {
    onchange() {
      this.total = this.datos.precio * this.$refs.cant.valueAsNumber;
      this.cantidad = this.$refs.cant.valueAsNumber;
    },
    onclickClose() {
      this.total = 0;
      this.$refs.ventana.classList.remove("ventana-visible");
      console.log((this.$refs.cant.value = "0"));
    },
    onclickOk() {
      this.cantidad == 0
        ? this.muestraAlerta()
        : this.prods.push({
            datos: this.datos,
            total: this.total,
            cantidad: this.cantidad,
          });
      this.total = 0;
      this.cantidad = 0;
      this.$refs.ventana.classList.remove("ventana-visible");
    },
    removeData(datos) {
      let pos = this.prods.indexOf(datos);
      this.prods.splice(pos, 1);
    },
    muestraAlerta() {
      this.$parent.$el.firstChild.classList.remove("show-alert");
      this.$parent.$el.firstChild.classList.add("show-alert");
      setTimeout(() => {
        this.$parent.$el.firstChild.classList.remove("show-alert");
      }, 5000);
    },
  },
  mounted() {
    this.prods = this.shop;
  },
};
</script>

<style>
.img-prod {
  width: 100%;
}
.lista {
  scroll-snap-type: proximity;
  overflow: scroll;
  overflow-x: unset;
  height: 250px;
  /*Estilos estándar experimentales (Principalmente Firefox)*/
  scrollbar-color: rgba(86, 95, 177, 0.5) rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}

.input-num {
  border-radius: 10px;
  border: none;
  background: rgb(211, 232, 240);
  height: 30px;
}
.input-num:focus {
  outline: none;
}

.lista::-webkit-scrollbar {
  -webkit-appearance: none;
}

.lista::-webkit-scrollbar:vertical {
  width: 10px;
}

.lista::-webkit-scrollbar-button:increment,
.contenedor::-webkit-scrollbar-button {
  display: none;
}

.lista::-webkit-scrollbar:horizontal {
  height: 10px;
}

.lista::-webkit-scrollbar-thumb {
  background-color: #797979;
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

.lista::-webkit-scrollbar-track {
  border-radius: 10px;
}
.img-style {
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgb(184, 213, 236);
}
h3,
h4 {
  color: rgb(4, 88, 88);
  font-variant: small-caps;
  text-align: center;
  font-size: 1em;
  margin-top: 0.5em;
}

.total {
  background-color: #797979;
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  color: #1c2030;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.total > h3 {
  margin: 5px 25px 5px 5px;
}
.trash {
  height: 35px;
}
.linea {
  width: 90%;
  margin: 0 auto;
  height: 1px;
}
.ventana {
  position: fixed;
}
</style>