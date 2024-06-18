<script>
    import { writableArray } from "$lib/store/list-store.js";
    const deleteItem = (index) => {
        $writableArray.splice(index, 1);
        $writableArray = $writableArray;
    };
</script>


<div id="list" class="flex flex-col">
    {#each $writableArray as item, i}
        <ul
            class="menu menu-horizontal bg-violet-400 rounded-box m-1 mt-2 justify-center"
        >
            <li class="text-lg mt-2 mx-3 font-semibold text-black">
                {item.type}
            </li>
            <li>
                <button
                    ><i class="fa-solid fa-pen-to-square text-xl text-black drawer-button"
                    ></i></button
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
                    ><i class="fa-solid fa-arrow-down text-xl text-black"
                    ></i></button
                >
            </li>
            <li>
                <button on:click={() => deleteItem(i)}
                    ><i class="fa-solid fa-x text-red-600 text-xl text-black"
                    ></i></button
                >
            </li>
        </ul>
    {/each}
</div>



<style>
    @media only screen and (max-width: 1199px) {
        #list {
            height: 30vh;
        }
    }
    div {
        overflow-y: auto;
        height: 45vh;
        overflow-x: hidden;
    }
</style>
