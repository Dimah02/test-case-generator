<script>
    import { testsNumber } from "$lib/store/list-store.js";
</script>

<div class="flex flex-wrap justify-center items-center w-3/6 mt-4">
    <h1 class="font-semibold text-lg">
        Number of tests: 
    </h1>
    <input
        type="number"
        min="1"
        max="100"
        placeholder="Number of tests"
        class="input input-bordered w-3/6 min-w-xs m-2"
        bind:value={$testsNumber}
    />
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2 bg-fuchsia-700	hover:bg-fuchsia-900 text-white">Download</button>
</div>