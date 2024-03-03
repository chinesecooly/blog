<template>
    <v-layout class="rounded rounded-md">
        <v-navigation-drawer v-model="drawer" location="left" temporary floating>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-img src="/logo.svg" class="float-left" style="margin: 0%;"></v-img>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-magnify"></v-btn>
            <v-item-group>
                <v-item v-for="btn in btnList" :key="btn.icon">
                    <v-btn icon @click="openLink(btn.link)">
                        <v-icon>{{ btn.icon }}</v-icon>
                    </v-btn>
                </v-item>
            </v-item-group>
            <v-btn icon="mdi-brightness-6" @click="changeTheme"></v-btn>
        </v-app-bar>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <slot />
        </v-main>
    </v-layout>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
    data: () => ({
        drawer: false,
        btnList: [
            {
                icon: 'mdi-email',
                link: 'mailto:bitloom@163.com?subject=邮件标题'
            },
            {
                icon: 'mdi-github',
                link: 'https://github.com/chinesecooly/blog'
            },
            {
                icon: 'mdi-qqchat',
                link: 'https://qm.qq.com/q/fUKdfoTUPu'
            },
            {
                icon: 'mdi-send',
                link: 'https://t.me/+jWO5Ne6zL5Q5ODdl'
            }
        ]
    }),
    methods: {
        openLink(link) {
            window.open(link, '_blank');
        },
        changeTheme() {
            this.$vuetify.theme.global.name = this.$vuetify.theme.global.current.dark ? 'light' : 'dark';
        }
    }
}
</script>
