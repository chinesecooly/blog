<template>
    <div class="mermaid flex justify-center">
        <slot />
    </div>
</template>

<script>
import mermaid from 'mermaid';
export default {
    name: 'Mermaid',
    methods: {
        init() {
            mermaid.initialize({
                startOnLoad: true
            });
            mermaid.init();
        }
    },
    mounted() {
        this.init();
    }
}
</script>