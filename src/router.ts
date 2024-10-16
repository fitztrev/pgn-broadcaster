import { createRouter, createWebHistory } from 'vue-router';
import BroadcastsByUser from './components/BroadcastsByUser.vue';
import Status from './components/Status.vue';
import Round from './components/Round.vue';
import Settings from './components/Settings.vue';

const routes = [
  { path: '/', component: Status },
  { path: '/settings', component: Settings, name: 'settings' },
  { path: '/broadcasts/:username/page/:pageNum', component: BroadcastsByUser, name: 'broadcasts' },
  { path: '/round/:id', component: Round, name: 'round' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
