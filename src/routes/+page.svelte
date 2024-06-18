<script>
    import { writableArray } from "$lib/store/list-store.js";
    import Heading from "../lib/components/Heading.svelte";
    import Menu from "../lib/components/Menu.svelte";
    import Tests from "../lib/components/Tests.svelte";
    import ActionRow from "../lib/components/ActionRow.svelte";

    $: i = 0;
    let type = "";
    const deleteItem = (index) => {
        $writableArray.splice(index, 1);
        $writableArray = $writableArray;
        i = 0;
        i = i;
    };
    const testData = (item, ind) => {
        i = ind;
        i = i;
        type = item.type;
        type = type;
    };
</script>

<Heading />

<Menu />

<input id="my-drawer" type="checkbox" class="drawer-toggle" />

<div class="flex flex-wrap justify-center w-3/6">
    <div id="list" class="drawer-content flex flex-col">
        {#each $writableArray as item, i}
            {#if i > 0}
                <ul
                    class="menu menu-horizontal bg-violet-400 rounded-box m-1 mt-2 justify-center"
                >
                    <li class="text-lg mt-2 mx-3 font-semibold text-black">
                        {item.type}
                    </li>
                    <li>
                        <button on:click={() => testData(item, i)}>
                            <label for="my-drawer" class="drawer-button">
                                <i
                                    class="fa-solid fa-pen-to-square text-xl text-black drawer-button"
                                ></i></label
                            ></button
                        >
                    </li>
                    <li>
                        <button
                            ><i class="fa-solid fa-arrow-up text-xl text-black"
                            ></i></button
                        >
                    </li>
                    <li>
                        <button
                            ><i
                                class="fa-solid fa-arrow-down text-xl text-black"
                            ></i></button
                        >
                    </li>
                    <li>
                        <button on:click={() => deleteItem(i)}
                            ><i
                                class="fa-solid fa-x text-red-600 text-xl text-black"
                            ></i></button
                        >
                    </li>
                </ul>
            {/if}
        {/each}
    </div>
    <Tests />
</div>

<div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <div class="p-4 w-80 min-h-full bg-base-200 text-base-content text-left">
        {#if type === "Integer"}
            <p>Min value</p>
            <input
                type="number"
                class="input input-bordered input-primary w-full max-w-xs"
                bind:value={$writableArray[i].value.l}
            />
            <p class="mt-2">Max value</p>
            <input
                type="number"
                class="input input-bordered input-primary w-full max-w-xs"
                bind:value={$writableArray[i].value.r}
            />
        {:else if i === 2}
            <p>hello</p>
        {:else}
            <p>hi</p>
        {/if}
    </div>
</div>

<ActionRow />

<style>
    @media only screen and (max-width: 1199px) {
        #list {
            height: 30vh;
        }
    }
    #list {
        overflow-y: auto;
        height: 45vh;
        overflow-x: hidden;
    }
</style>
