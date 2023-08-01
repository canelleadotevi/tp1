import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App); /* le main.ts c'est la configuration de base du projet et c'est sur ça qu'on met les trucs à importer app.use pur utiliser des trucs pour le bon fonctionnement du projet.From pour spécifer le chemin de l'élément à importer. */

app.use(createPinia());
app.use(router);

app.mount("#app");
