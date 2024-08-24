<script lang="ts">
  import SelectInput from "$lib/components/SelectInput.svelte";
  import { FORMATS } from "$lib/constants";
  import { Format } from "$lib/types";
  import { storeActions, appStore } from "$lib/store";

  import { readonly } from "svelte/store";
  import { createEventDispatcher } from "svelte";

  const readonlyStore = readonly(appStore);

  let input: Format = $readonlyStore.preset.input;
  let output: Format = $readonlyStore.preset.output;

  const dispatch = createEventDispatcher();

  const handleCloseClick = () => dispatch("close");

  const handleClearHistory = () => {
    storeActions.clearHistory();
  }

  const formatOptions = Object.values(FORMATS)
    .reduce((acc, format) => ({
      ...acc,
      [format.type]: format.title,
    }), {});

  const updateSettings = () => {
    storeActions.updateSettings({ input, output });
  };
</script>

<div>
  <div class="title-box">
    <h3 class="text-color">
      Tranformation Settings
    </h3>
    <button class="close-btn" on:click={handleCloseClick} />
  </div>

  <SelectInput
    label="Input Format"
    options={formatOptions}
    bind:value={input}
    on:change={updateSettings}
  />

  <SelectInput
    label="Output Format"
    options={formatOptions}
    bind:value={output}
    on:change={updateSettings}
  />


  <button on:click={handleClearHistory}>
    Clear history
  </button>

</div>

<style>
  .title-box {
    position: relative
  }

  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: block;
    background: #fff;
  }

  .close-btn:before,
  .close-btn:after {
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background: #55575c;
    position: absolute;
    rotate: 45deg;
    border-radius: 1px;
  }

  .close-btn:before {
    width: 12px;
    height: 2px;
    left: 4px;
    top: 9px;
  }
  .close-btn:after {
    height: 12px;
    width: 2px;
    top: 4px;
    left: 9px;
  }
  
  .text-color {
    color: #fff;
  }
</style>
