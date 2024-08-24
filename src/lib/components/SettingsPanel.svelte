<script lang="ts">
  import SelectInput from "$lib/components/SelectInput.svelte";
  import ByteDataInputs from "$lib/components/ByteDataInputs.svelte";
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

<div class="container">
  <div class="title-box">
    <h3 class="text-color title">
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

  <ByteDataInputs />

  <button on:click={handleClearHistory} class="button-clear-history">
    Clear History
  </button>

</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
    padding: 20px;
  }

  .title-box {
    position: relative
  }

  .title {
    margin: 0 0 40px 0;
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

  .button-clear-history {
    margin-top: auto;
    width: 100%;
    background: #ff4747;
    box-shadow: 0 1px 4px 0 rgba(255, 71, 71, 0.5), 0 4px 16px 0 rgba(255, 71, 71, 0.2);
    border-radius: 8px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    border: none;
    margin-bottom: 20px;
    cursor: pointer;
    flex-shrink: 0;
  }
</style>
