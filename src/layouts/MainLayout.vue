<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <!-- <q-toolbar-title align="center" class="q-pa-lg text-h5 text-weight-bold">
          The Weekly Message
        </q-toolbar-title> -->
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab class="q-px-md lt-sm" to="/" label="Home" />
        <q-route-tab class="q-px-md lt-sm" to="/about" label="About" />
        <q-route-tab class="q-px-md lt-sm" to="/archive" label="Archive" />
        <q-route-tab class="q-px-md lt-sm" to="/subscribe" label="Subscribe" />

        <q-route-tab class="q-px-xl gt-xs" to="/" label="Home" />
        <q-route-tab class="q-px-xl gt-xs" to="/about" label="About" />
        <q-route-tab class="q-px-xl gt-xs" to="/archive" label="Archive" />
        <q-route-tab class="q-px-xl gt-xs" to="/subscribe" label="Subscribe" />
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