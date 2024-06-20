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
    const goDown = (ind) =>{
        if(ind != $writableArray.length - 1){
            let temp = $writableArray[ind+1];
            $writableArray[ind+1] = $writableArray[ind];
            $writableArray[ind] = temp;
        }
    }
    const goUp = (ind) =>{
        if(ind != 1){
            let temp = $writableArray[ind-1];
            $writableArray[ind-1] = $writableArray[ind];
            $writableArray[ind] = temp;
        }
    }
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
                        <button on:click={()=> goUp(i)}
                            ><i class="fa-solid fa-arrow-up text-xl text-black"
                            ></i></button
                        >
                    </li>
                    <li>
                        <button on:click={()=> goDown(i)}
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
        {:else if type === "String"}
            <p class="my-2">Min length</p>
            <input
                type="number"
                class="input input-bordered input-primary w-full max-w-xs"
                bind:value={$writableArray[i].value.l}
            />
            <p class="my-2">Max length</p>
            <input
                type="number"
                class="input input-bordered input-primary w-full max-w-xs"
                bind:value={$writableArray[i].value.r}
            />
            <p class="my-2">Spetial Characters</p>
            <input
                type="text"
                class="input input-bordered input-primary w-full max-w-xs"
                bind:value={$writableArray[i].value.spetialCharacters}
            />
            <div class="form-control mt-2">
                <label class="label cursor-pointer">
                    <span class="label-text">All Upper-Case letters</span>
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary"
                        bind:checked={$writableArray[i].value.allUpper}
                    />
                </label>
            </div>
            <div class="form-control mt-2">
                <label class="label cursor-pointer">
                    <span class="label-text">All Lower-Case letters</span>
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary"
                        bind:checked={$writableArray[i].value.allLower}
                    />
                </label>
            </div>
            <div class="form-control mt-2">
                <label class="label cursor-pointer">
                    <span class="label-text">All Numbers</span>
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary"
                        bind:checked={$writableArray[i].value.numbers}
                    />
                </label>
            </div>
            <div class="form-control mt-2">
                <label class="label cursor-pointer">
                    <span class="label-text">Leading Zeros</span>
                    <input
                        type="checkbox"
                        class="checkbox checkbox-primary"
                        bind:checked={$writableArray[i].value.leadingZero}
                    />
                </label>
            </div>
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
