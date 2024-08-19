<style>
  .wrapper {
    padding-left: 20px;
    display: flex;
  }

  .input-container {
    height: 58px;
    box-shadow: 0 16px 64px 0 rgba(0, 0, 0, .1);
    border-radius: 16px;
    padding: 0 20px;
    margin-right: 12px;
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .input-container__focused {
    margin-right: 20px;
  }

  .input {
    font-size: 24px;
    font-weight: 700;
    border: none;
    background: number;
    border: 2px solid transparent;
    padding: 4px 0;
    border-left: none;
    border-right: none;
    width: 100%;
  }

  .input:hover,
  .input:focus {
    outline: none;
    border-bottom: 2px solid rgba(0,0,0, .2);
  }

  .settings-button {
    margin-right: 12px;
    height: 58px;
    width: 58px;
    box-shadow: 0 16px 64px 0 rgba(0, 0, 0, .1);
    border-radius: 16px;
    border: none;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
  }

  .save-button {
    width: 58px;
    flex-shrink: 0;
    margin-right: -16px;
    padding-right: 16px;
    height: 58px;
    background-color: #FFCC00;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    box-shadow:
      inset 0 4px 16px 0 rgba(255, 255, 255, .79), 
      inset 0 1px 4px 0 rgba(255, 255, 255, .20), 
      0 4px 16px 0 rgba(255, 204, 0, .36); 
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Format } from "$lib/types";
  import { FORMAT_PLACEHOLDERS } from "$lib/constants";
  import FormatPreview from "$lib/components/FormatPreview.svelte";
  
  export let format: Format;
  let isInputFocused: boolean = false;

  const dispatch = createEventDispatcher();

  const onInputUpdate = (event) =>
    dispatch("inputUpdate", { value: event });

  const onSettingsClick = () =>
    dispatch("settingsClick");
  const onSaveClick = () =>
    dispatch("saveClick");

  const handleInputFocus = () =>
    isInputFocused = true;
  const handleInputBlur = () =>
    isInputFocused = false;

</script>

<div class="wrapper">
  <div class={`input-container ${isInputFocused && 'input-container__focused'}`}>
    <FormatPreview format={format} />
    <input
      class="input"
      on:input={onInputUpdate}
      on:focus={handleInputFocus}
      on:blur={handleInputBlur}
      placeholder={FORMAT_PLACEHOLDERS?.[format]}
    >
  </div>
  { #if !isInputFocused }
    <button
      class="settings-button"
      on:click={onSettingsClick}
    >
      <img src="/icons/settings.png" alt="settings icon" />
    </button>
    <button
      class="save-button"
      on:click={onSaveClick}
    >
      <img src="/icons/save.svg" alt="save icon" />
    </button>
  { /if }
</div>

