<script lang="ts">
    import type { marked } from "marked";
    import SvelteMarkdown, { type Renderers } from "svelte-markdown";
    import SmartLink from "./AppMarkdown/SmartLink.svelte";
    
    export let source: string;

    let renderers: Partial<Renderers> = {
        link: SmartLink,
    };

    let options: marked.MarkedExtension = {
        sanitize: true,
    };
</script>

<div class="app-md">
    <SvelteMarkdown {source} {renderers} {options} />
</div>

<style>
    .app-md :global(p) { @apply my-8 text-2xl; }

    .app-md :global(hr) { @apply my-8; }
</style>
