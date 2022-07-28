<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    export let source: string;
</script>

<div class="app-md">
    <SvelteMarkdown {source} />
    <p class="m-8"></p>
</div>

<style>
    .app-md :global(p) {
        @apply my-8 text-2xl;
    }

    .app-md :global(hr) {
        @apply my-8;
    }
</style>
