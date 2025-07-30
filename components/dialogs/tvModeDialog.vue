<template>
  <v-dialog :model-value="dialog" fullscreen>
    <v-card>
      <v-card-title>
        <v-row justify="end">
          <v-col cols="auto">
            <v-btn
              variant="flat"
              density="comfortable"
              icon="close"
              @click="$emit('update:dialog', false)"
            />
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row justify="center">
            <v-col cols="auto">
              <h1>Local</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>Cola de reproducción</p>
              <p>Sonando ahora</p>
              <v-img
                src="https://via.placeholder.com/300"
                height="200"
                width="300"
              ></v-img>
              <p>Título</p>
              <p>Artista</p>
            </v-col>
            <v-col>
              <p>A continuación</p>
              <v-list>
                <v-list-item v-for="n in 5" :key="n">
                  <v-list-item-title>Track {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>Instrucciones</p>
              <h2>Código</h2>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:dialog"],
  data() {
    return {};
  },
};
</script>
