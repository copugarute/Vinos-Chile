<template>
  <v-container>
    <div class="text-h6">Datos del comprador</div>
    <v-divider></v-divider>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="form.nombre"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.confirmEmail"
        :rules="[
          (v) => v === this.form.email || 'Email invalido',
          (v) => !!v || 'Email requerido',
        ]"
        label="Repetir E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.telefono"
        :rules="telefonoRules"
        label="Teléfono"
        placeholder="+56976474953"
        required
      ></v-text-field>

      <div class="text-h6">Datos del despacho</div>
      <v-divider></v-divider>

      <v-text-field
        v-model="form.direccion"
        :rules="[(v) => !!v || 'Debe ingresar dirección']"
        label="Dirección"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.comuna"
        :rules="[(v) => !!v || 'Debe ingresar comuna']"
        label="Comuna"
        required
      ></v-text-field>

      <div class="text-h6">Forma de pago</div>
      <v-divider></v-divider>

      <v-radio-group v-model="form.pago">
        <v-radio
          v-for="(item, i) in formaDePago"
          :key="i"
          :label="item.label"
          :value="item.value"
          :rules="[(v) => !!v || 'Debe seleccionar medio de pago']"
        ></v-radio>
      </v-radio-group>

      <v-btn
        :disabled="this.valid == false"
        color="success"
        class="mr-4"
        @click="confirmar()"
      >
        Confirmar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CheckForm",
  data: () => ({
    valid: true,
    form:{
      nombre: "",
      email: "",
      confirmEmail: "",
      telefono: "",
      direccion: "",
      comuna: "",
      pago: "",
    },
    
    formaDePago: [
            { label: "Tranferencia Bancaria", value: "transf_Bank" },
            { label: "Servipag", value: "servipag" },
            { label: "Webpay", value: "webpay" },
            { label: "Contra Entrega", value: "contraentrega" },
          ],
    nameRules: [(v) => !!v || "El Nombre es requerido"],
    emailRules: [
      (v) => !!v || "El E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "El E-mail debe ser valido",
    ],
    telefonoRules: [
      (v) => !!v || "El teléfono es requerido",
      (v) =>
        /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(v) ||
        "El teléfono debe ser valido",
    ],
  }),
  computed: {},

  methods: {
    ...mapActions(["traerDatosCompra"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    confirmar() {
      this.validate()
      if (this.validate()) {
        let datosCompra = {
          nombre: this.form.nombre,
          email: this.form.email,
          telefono: this.form.telefono,
          direccion: this.direccion,
          comuna: this.form.comuna,
          pago: this.form.pago,
          fecha: Math.floor(Math.random() * 10000),
        };
        console.log(datosCompra);
        this.traerDatosCompra(datosCompra);
        this.$router.push("/confirmacion");
      } else {
        alert("Debe ingresar todos los datos");
      }
    },
  },
}

</script>

<style>
</style>