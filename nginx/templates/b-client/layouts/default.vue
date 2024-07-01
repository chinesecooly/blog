<template>
    <v-layout class="rounded rounded-md">
        <v-navigation-drawer v-model="drawer" location="left" temporary floating width="450">
            <v-list>
                <v-list-item prepend-icon="mdi-home" title="Home" @click="$router.push('/')"></v-list-item>
                <v-list-group v-for="(outerGroup, i) in navigationList" :key="i" :value="outerGroup.title">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :title="outerGroup.title" prepend-icon="mdi-book"
                            @click="navigateTo(outerGroup)"></v-list-item>
                    </template>
                    <v-list-group v-for="(innerGroup, i) in outerGroup.children" :key="i" :value="innerGroup.title">

                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" :title="innerGroup.title"
                                @click="navigateTo(innerGroup)"></v-list-item>
                        </template>
                        <v-list-item v-for="(innerItem, i) in innerGroup.children" :key="i" :title="innerItem.title"
                            :value="innerItem.title" @click="navigateTo(innerItem)">
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-img src="/logo.svg"></v-img>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-magnify"></v-btn>
            <v-item-group>
                <v-item v-for="  btn   in   btnList  " :key="btn.icon">
                    <v-btn icon @click="openLink(btn.link)">
                        <v-icon>{{ btn.icon }}</v-icon>
                    </v-btn>
                </v-item>
            </v-item-group>
            <v-btn icon="mdi-brightness-6" @click="changeTheme"></v-btn>
        </v-app-bar>

        <v-main>
            <slot />
        </v-main>
        <v-footer class="text-center" app>
            <v-row justify="center" no-gutters>
                <v-col class="text-center mt-4" cols="12">
                    <strong>鲁ICP备2021007744号-2</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-layout>
</template>

<script>

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
        ],
        navigationList: []
    }),
    methods: {
        navigateTo(item) {
            console.log(item);
            if (!item.children) {
                this.$router.push(item._path);
            }
        },
        openLink(link) {
            window.open(link, '_blank');
        },
        changeTheme() {
            this.$vuetify.theme.global.name = this.$vuetify.theme.global.current.dark ? 'light' : 'dark';
        },
        async fetchContentNavigation() {
            const { data: navigationList } = await useAsyncData('navigation', () => fetchContentNavigation());
            this.navigationList = navigationList;
        },
    },
    created() {
        this.fetchContentNavigation();
    }
}
</script>
