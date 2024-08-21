<script lang="ts">
  import InputContainer from "$lib/components/InputContainer.svelte";

  import { createEventDispatcher } from "svelte";

  export let label: string = "";
  export let options: Record<string, string>;
  export let value: string;

  const dispatch = createEventDispatcher();


  const handleSelect = () => {
    dispatch("change", value);
  }

</script>

<InputContainer label={label}>
  <select class="select" bind:value={value} on:change={handleSelect}>
    { #each Object.entries(options) as [value, title] }
      <option value={value}>
        {title}
      </option>
    { /each }
  </select>
</InputContainer>

<style>
  .select,
  .select:focus {
    width: 100%;
    background: #181818;
    box-shadow:
      inset 0 1px 4px 0 rgb(255 255 255 / 11%),
      0 4px 16px 0 rgb(0 0 0 / 25%);
    border: 1px solid rgba(255, 255, 255, .1);
    color: #fff;
    padding: 8px 8px;
    outline: none;
    border-radius: 8px;
    position: relative;
  }
</style>

