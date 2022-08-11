<script lang="ts">
    import Link from "svelte-markdown/src/renderers/Link.svelte";
    import YoutubeVideo from "./YoutubeVideo.svelte";
    import {isYoutubeUrl} from "@utils/youtube";

    export let href: string = '';
    export let title: string | undefined = undefined;
</script>

{#if isYoutubeUrl(href)}
    <YoutubeVideo src={href} />
{:else}
    <Link {href} {title}>{title || href}</Link>
{/if}
