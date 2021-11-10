<script lang="ts">
  import "./index.css";
  import Table from "./components/Table.svelte";

  let tableVisible = false;
</script>

<div class="text-center p-4">
  {#if !tableVisible}
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      on:click={() => {
        tableVisible = true;
      }}
    >
      Render Table in Svelte
    </button>
  {:else}
    <Table />
  {/if}
</div>
