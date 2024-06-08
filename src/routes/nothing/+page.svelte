<script>
    import { writableArray } from "$lib/store/list-store.js";

    const addToArray = () => {
        $writableArray = [
            ...$writableArray,
            {
                type: "Integer",
                value: 1,
            },
        ];
    };

    let dialog;
    const open = () => {
        console.log("wwww");
        dialog.show();
    };
    const close = () => {
        dialog.close();
    };
</script>

<div id="container">
    <dialog bind:this={dialog}>
        <h1>Opend</h1>
        <form>
            min = <input type="number" />
            max = <input type="number" />
            <button on:click={close}>Save</button>
        </form>
    </dialog>
    <button on:click={open}>Open</button>

    <button on:click={addToArray}> Add item </button>
    {#each $writableArray as item}
        <h1>
            {item.type}
        </h1>
        <p>
            {item.value}
        </p>
    {/each}
</div>

<style>
    #container {
        background-color: rgb(69, 101, 110);
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    dialog {
        text-align: center;
        width: 200px;
        padding: 8px;
        opacity: 0;
        scale: 0;
        display: block;
        transition: all 0.5s;
    }
    dialog[open] {
        opacity: 1;
        scale: 2;
    }
</style>
