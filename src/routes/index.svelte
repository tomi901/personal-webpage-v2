<script lang="ts">
    let links: { displayName: string, link: string }[] = [
        { displayName: "Curriculum Vitae", link: "https://firebasestorage.googleapis.com/v0/b/tom-rinaldi.appspot.com/o/public%2FWeb%2FCV.pdf?alt=media" },
        { displayName: "LinkedIn", link: "https://www.linkedin.com/in/tom%C3%A1s-rinaldi-50244a1a1/" },
        { displayName: "Page Source Code", link: "https://github.com/tomi901/personal-webpage-v2/" },
    ];
</script>

<main class="grid place-items-center h-screen">
    <div class="grid place-items-center">
        <img src="/images/profile_picture.png"
             alt="My profile"
             class="profile-pic w-72 aspect-square rounded-full object-cover border-amber-50 border-8 mb-10 drop-shadow-2xl"
        >
        <h1 class="drop-shadow-2xl">Tomás Rinaldi</h1>
        <p class="drop-shadow-2xl">WIP add basic info here</p>
        
    </div>
    <h3 class="absolute bottom-0 p-5 opacity-50">(Scroll down for more info)</h3>
</main>

<header class="sticky top-0 bg-slate-700 shadow-2xl flex flex-row items-center">
    <!--h1>Test Header</h1-->
    {#each links as link}
        <a href="{link.link}" target="_blank" class="link-btn px-5 py-2 flex justify-center items-center hover:bg-slate-600">
            {link.displayName}
        </a>
    {/each}
</header>

<article class="p-10 bg-slate-700">
    Test
</article>

<style>
    article {
        min-height: 1000px;
    }
    
    .link-btn {
        min-height: 64px;
    }
</style>
