<script lang="ts">
    import Link from "svelte-markdown/src/renderers/Link.svelte";

    export let href: string = '';
    export let title: string | undefined = undefined;

    const youtubeUrlRegex = /https?:\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?[\w?=]*)?/;
</script>

{#if youtubeUrlRegex.test(href)}
    <small>Youtube URL</small>
{:else}
    <Link {href} {title} />
{/if}
