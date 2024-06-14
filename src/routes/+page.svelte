<script>
    import { writableArray } from "$lib/store/list-store.js";
    import { IntegerTest } from "$lib/models/IntegerTest.js";

    const addInteger = () => {
        $writableArray = [
            ...$writableArray,
            {
                type: "Integer",
                value: new IntegerTest(1, 10),
            },
        ];
    };
</script>

<div id="container">
    <h1
        class="mt-16 mb-8 text-3xl font-bold md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-400"
    >
        Test Case Generator
    </h1>

    <ul class="menu menu-horizontal bg-base-200 rounded-box w-3/6 p-2 mb-6">
        <li><button class="text-lg" on:click={addInteger}>Integer</button></li>
    </ul>

    <div id="container2" class="bg-base-200 rounded-box mb-6">
        <div id="first" class="w-3/6">
            {#each $writableArray as item}
                <div id="item" class="bg-teal-200 m-4 text-lg rounded-box font-semibold">
                <p class="py-2 px-4 text-black">{item.type}</p>
                <button><i class="fa-solid fa-pen-to-square text-black text-xl pr-8"></i></button>
                <button><i class="fa-solid fa-arrow-up text-black text-xl pr-8"></i></button>
                <button><i class="fa-solid fa-arrow-down text-black text-xl pr-7"></i></button>
                <button><i class="fa-solid fa-x text-red-600 text-xl pr-4"></i></button>
                </div>
            {/each}
        </div>
        <div class="divider divider-horizontal"></div>
        <div id="second" class="w-3/6">

        </div>
    </div>

    <div id="container3">
        <input type="number" placeholder="Number of test cases" class="input input-bordered max-w-xs border-teal-500 mb-8" />
        <button class="btn bg-teal-400 text-lg text-black hover:text-white hover:bg-teal-600 ml-4 mb-8 mr-8 sm:mr-0">Generate</button>
        <button class="btn btn-outline border-teal-400 hover:bg-teal-600 text-lg hover:text-white mb-8 lg:ml-auto">Download</button>
    </div>

</div>

<style>
    #container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #container2 {
        display: flex;
        padding: 0px 8px;
        width: 50%;
    }
    #first{
        overflow-y: auto;
        height: 40vh;
        overflow-x: hidden;
    }
    #second{
        overflow-y: auto;
        height: 40vh;
        overflow-x: hidden;
    }
    #item{
        display: flex;
        align-items: center;
        width: min-content;
    }
    #container3 {
        display: flex;
        padding: 0px 8px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 50%;
    }
</style>
