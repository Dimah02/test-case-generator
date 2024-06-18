<script>
    import { writableArray } from "$lib/store/list-store.js";
    import Heading from "../lib/components/Heading.svelte";
    import VarList from "../lib/components/VarList.svelte";
    import Menu from "../lib/components/Menu.svelte";
    import Tests from "../lib/components/Tests.svelte";
</script>

<Heading />

<Menu />

<div class="flex flex-wrap justify-center w-3/6">
    <VarList />
    <Tests />
</div>
<div class="flex flex-wrap justify-center items-center w-3/6 mt-6">
    <input
        type="number"
        min="1"
        max="100"
        placeholder="Number of tests"
        class="input input-bordered w-3/6 min-w-xs m-2"
    />
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2 bg-violet-700	hover:bg-violet-900 text-white">Generate</button>
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2 bg-fuchsia-700	hover:bg-fuchsia-900 text-white">Download</button>
</div>
