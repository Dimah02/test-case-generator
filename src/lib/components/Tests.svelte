<script>
    import { writableArray } from "$lib/store/list-store.js";
</script>

<div id="tests" class="flex flex-col items-center w-3/6 pt-4">
    {#each $writableArray as item, i}
        <h1>{item.type}</h1>
    {/each}
</div>


<style>
    @media only screen and (max-width: 1199px) {
        #tests {
            height: 20vh;
            margin-top: 1em;
        }
    }
    div{
        overflow-y: auto;
        height: 45vh;
        overflow-x: hidden;
    }
</style>