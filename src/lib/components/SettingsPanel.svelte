<script lang="ts">
  import SelectInput from "$lib/components/SelectInput.svelte";
  import ByteDataInputs from "$lib/components/ByteDataInputs.svelte";
  import { FORMATS } from "$lib/constants";
  import { Format } from "$lib/types";
  import { read, actions } from "$lib/store";

  import { createEventDispatcher } from "svelte";

  let input: Format = $read.preset.input;
  let output: Format = $read.preset.output;

  const dispatch = createEventDispatcher();

  const handleCloseClick = () => dispatch("close");

  const formatOptions = Object.values(FORMATS)
    .reduce((acc, format) => ({
      ...acc,
      [format.type]: format.title,
    }), {});

  const updateSettings = () => {
    actions.updateSettings({ input, output });
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
</style>
