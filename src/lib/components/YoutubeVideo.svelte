<script lang="ts">
    import {extractYoutubeId} from "@utils/youtube";
    import IntersectionObserver from "./IntersectionObserver.svelte";

    export let src: string;
    if (!src) {
        throw new Error("No url specified");
    }
    
    let id = extractYoutubeId(src);
</script>

<IntersectionObserver once={true} let:intersecting >
    <div class="media-container w-full flex flex-row justify-center">
        {#if intersecting}
        <iframe width="560"
                height="315"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allowFullScreen
        >
        </iframe>
        {/if}
    </div>
</IntersectionObserver>

<style>
    .media-container {
        height: 315px;
    }
</style>
