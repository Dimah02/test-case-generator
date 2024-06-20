<script>
    import { writableArray, testsNumber } from "$lib/store/list-store.js";
</script>

<div id="tests" class="flex flex-col items-center w-3/6 pt-4">
    {#if $writableArray.length > 1}
        {#each Array($testsNumber) as _, index (index)}
            <div
                class="bg-white w-5/6 text-left text-black text-lg p-2 rounded-[12px] mb-1"
            >
                {#each $writableArray as item, i}
                    {#if i > 0}
                        <h1>{item.value.getTest()}</h1>
                    {/if}
                {/each}
            </div>
        {/each}
    {/if}
</div>

<style>
    @media only screen and (max-width: 1199px) {
        #tests {
            height: 20vh;
            margin-top: 1em;
        }
    }
    #tests {
        overflow-y: auto;
        height: 45vh;
        overflow-x: hidden;
    }
</style>
