<script lang="ts">
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher();

  export let index;
  export let value;
  export let disabled;

  const handleInputChange = () => {
    dispatch("change", { value }); 
  }
</script>

<div class="container">
  <label class="label">
    Bit #{index}:
    <input
      {disabled}
      class="input"
      placeholder="Add uniq name..."
      bind:value={value}
      on:input={handleInputChange}
    />
  </label>
  <!-- <div class="controls-box"> -->
  <!-- </div> -->
</div>

<style>
  .container {
    display: flex;
    padding: 8px 8px;
  }
  
  .label {
    color: white;
    width: auto;
    flex-grow: 1;
    font-size: 14px;
    flex-shrink: 0;
    display: flex;
    margin-right: 10px;
  }
  
  .input {
    background: transparent;
    color: white;
    font-size: 14px;
    border: none;
    padding: 0;
    width: auto;
    flex-grow: 1;
    margin-left: 10px;
  }
  /*
  .controls-box {
    height: 10px;
    width: 30px;
    margin-left: auto;
    background: white;
  }
  */
</style>

