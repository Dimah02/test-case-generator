<script>
    import { writableArray } from "$lib/store/list-store.js";
    import { IntegerTest } from "$lib/models/IntegerTest.js";
    import { StringTest } from "$lib/models/StringTest.js";
    const addInteger = () => {
        $writableArray = [
            ...$writableArray,
            {
                type: "Integer",
                value: new IntegerTest(1, 10),
            },
        ];
    };
    const addString = () => {
        $writableArray = [
            ...$writableArray,
            {
                type: "String",
                value: new StringTest(1, 10),
            },
        ];
    };
</script>

<ul class="menu menu-horizontal bg-base-200 rounded-box w-3/6 p-2 mb-6">
    <li><button class="text-lg" on:click={addInteger}>Integer</button></li>
    <li><button class="text-lg" on:click={addString}>String</button></li>
</ul>
