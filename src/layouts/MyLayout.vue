<template>
  <q-layout view="lhh Lpr fFf">
    <q-header :elevated="false">
      <q-toolbar style="height:60px" class="toolbar-wrapper" :class="$route.path === '/' ? 'bg-primary' : 'bg-accent'">
        <router-link to="/" class="logo-link">
          <span class="visually-hidden">eos DAC</span>
          <img src="../statics/images/eosdac-logo.svg" />
        </router-link>
        <nav class="nav-wrapper">
          <q-btn class="btn-is-show" label="see pricing" unelevated :ripple="false" to="/pricing" />
          <q-btn class="btn-is-show" label="how it works" unelevated :ripple="false" to="/how-it-works" />
          <q-btn
            v-if="!getAccountName"
            label="login"
            @click="$store.dispatch('ual/renderLoginModal')"
            class="btn-login"
            :flat="getShouldRenderLoginModal"
            :loading="getShouldRenderLoginModal"
          />
          <q-btn-dropdown v-if="getAccountName" color="white" flat :label="getAccountName">
            <q-list>
              <q-item clickable dense v-close-popup @click="$store.dispatch('ual/logout')">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </nav>
      </q-toolbar>
    </q-header>
    <q-drawer v-if="false" v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="text-white bg-accent">
      <router-view />
    </q-page-container>
    <q-footer class="bg-accent" v-if="isShowFooter">

    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";

import Stepper from "components/steps/Stepper";

export default {
  components: {
    Stepper
  },
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    ...mapGetters({
      getAccountName: "ual/getAccountName",
      getShouldRenderLoginModal: "ual/getShouldRenderLoginModal"
    }),
    isShowFooter() {
      return !/\/dac-(creation|validation)/.test(this.$route.path);
    }
  }
};
</script>

<style scoped lang="stylus">
.toolbar-wrapper
  display flex
  justify-content space-between
.logo-link
  display flex
  margin-right 12px
  line-height normal
.nav-wrapper
  & > *
    padding 4px 10px
  @media (min-width 640px)
    display grid
    grid-template-columns auto auto auto
    grid-gap 8px
.btn-is-show
  @media (max-width 639px)
    display none
.btn-login
  width 140px
  background-color $secondary
  @media (max-width 639px)
    width 120px
</style>
