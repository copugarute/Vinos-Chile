<template>
  <v-container>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="nombre"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="confirmEmail"
      :rules="rulesConfirm"
      label="Repetir E-mail"
      required
    ></v-text-field>

    <v-text-field
        v-model="telefono"
        :rules="telefonoRules"
        label="Teléfono"
        placeholder="+56976474953"
        required
    ></v-text-field>

    

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Confirmar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
  </v-container>
</template>

<script>
export default {
    name:'CheckForm',
    data: () => ({
      valid: true,

        nombre:'',
        email:'',
        confirmEmail:'',
        telefono:'',
        direccion:'',
        comuna:'',
        pago:'',

      nameRules: [
        v => !!v || 'El Nombre es requerido',
      ],
      emailRules: [
        v => !!v || 'El E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'El E-mail debe ser valido',
      ],
      rulesConfirm: [
        (v) => !! v || 'Inrese correo',
        (v) => { v !== this.email || 'El Email no coincide'}
      ],
    //   emailConfirmRules: [
    //     (v) => !!v || 'El E-mail is requerido',
    //     (v) => !!v === this.email || 'El E-mail no coincide',
    //   ],
      telefonoRules: [
        v => !!v || 'El teléfono es requerido',
        v => /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(v) || 'El teléfono debe ser valido'
      ]
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      
    },

}
</script>

<style>

</style>