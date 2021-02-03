<template>
  <v-menu
    bottom
    left
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        class="ml-2"
        min-width="0"
        text
        v-bind="attrs"
        v-on="on"
      >
        <v-badge
          bordered
          color="red"
          overlap
        >
          <!-- 通知的数量目前是被写死的，需要动态绑定 -->
          <!-- 另外还需要写一个事件，让点击通知后小红点消失 -->
          <template v-slot:badge>
            <span>1</span>
          </template>

          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list
      flat
      nav
    >
      <app-bar-item
        v-for="(n, i) in notifications"
        :key="i"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ n }} </v-list-item-title>
        </v-list-item-content>
      </app-bar-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'DefaultNotifications',

    data: () => ({
      notifications: [
        'This is a test notification',
      ],
    }),
  }
</script>
