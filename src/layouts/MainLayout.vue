<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
         <q-tabs
          v-model="tab"
          class="text-white q-pt-md"
          inline-label
          align="justify"
          mobile-arrows
          indicator-color="accent"
          stretch
          dense
        >
          <q-route-tab name="mails" icon="fas fa-home" no-caps label="Home" class="q-pb-sm" to="/" />
          <q-route-tab name="alarms" icon="fas fa-address-card" no-caps label="About" class="q-pb-sm" to="/about" />
          <q-route-tab name="movies" icon="fas fa-archive" no-caps label="Archive" class="q-pb-sm" to="/archive" />
          <q-route-tab name="subscribe" icon="fas fa-plus-square" no-caps label="Subscribe" class="q-pb-sm" to="/subscribe"/>
        </q-tabs>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div align="center" class="text-body2">	&copy; Aju George Jacob</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>