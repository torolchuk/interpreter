<script lang="ts">
  import { readonly } from "svelte/store";
  import { blur } from "svelte/transition";

  import Input from "$lib/components/Input.svelte";
  import ConvertViewer from "$lib/components/ConvertViewer.svelte";
  import HistoryEntry from "$lib/components/HistoryEntry.svelte";
  import SettingsPanel from "$lib/components/SettingsPanel.svelte";

  import { appStore, storeActions } from "$lib/store";
  import { ERROR_MESSAGES } from "$lib/constants";

  let isSettingsOpened = false;

  const readonlyStore = readonly(appStore);

  const handleInputUpdate = (event) => {
    const { value } = event.detail;
    storeActions.updateCurrentValue(value);
  };

  const handleSaveClick = () => storeActions.saveToHistory();

  const handleSettingsOpenClick = () => {
    isSettingsOpened = true;
  }
  
  const handleSettingsCloseClick = () => {
    isSettingsOpened = false;
  }
</script>


<div class="page-container" class:hidden={isSettingsOpened}>
  <div class="results">
    <div class="history-wrapper">
      { #each $readonlyStore.history as historyEntry }
        <div
          class="history-entry"
          transition:blur|fade|slide={{ duration: 300 }}
        >
          <HistoryEntry
            entry={historyEntry}
          />
        </div>
      { /each }
    </div>
  </div>
  <div
    class="quick-preview"
    class:blurred={!$readonlyStore.currentData}
  >
    <ConvertViewer
      format={$readonlyStore?.preset?.output}
      value={$readonlyStore.currentData}
      placeholder="00000000"
      error={ERROR_MESSAGES?.[$readonlyStore.error]}
    />
  </div>
  <div class="input-box">
    <Input
      on:inputUpdate={handleInputUpdate}
      on:saveClick={handleSaveClick}
      on:settingsClick={handleSettingsOpenClick}
      format={$readonlyStore.preset.input}
    />
  </div>
</div>

<div class="settings-container" class:shown={isSettingsOpened}>
  <SettingsPanel on:close={handleSettingsCloseClick} /> 
</div>

<style>
  .page-container {
    height: calc(100% - 100px);
    margin: 0 0 50px;
    display: flex;
    flex-direction: column;
    transition: all ease-out .2s;
  }

  .page-container.hidden {
    transform: translatey(-600px);
    filter: blur(4px);
    opacity: 80%;
    pointer-events: none;
  }

  .settings-container {
    width: calc(100% + 80px);
    height: 600px;
    position: absolute;
    top: 100%;
    left: -40px;
    visibility: hidden;
    background-color: #1a1d23;
    transition: all ease-out .2s;
    padding: 10px 60px;
    box-shadow: inset 0 16px 64px 0 rgba(255, 255, 255, 0.3), 0 -8px 32px 0 rgba(0, 0, 0, 0.2);
  }

  .settings-container:before {
    content: "";
    position: absolute;
    right: 103px;
    bottom: calc(100% - 30px);
    background-color: #55575c;
    z-index: -1;
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    border-radius: 8px;
  }

  .settings-container.shown {
    visibility: visible;
    top: calc(100% - 600px);
  }

  .quick-preview {
    flex-shrink: 0;
    transition: all ease-out .2s;
    margin-bottom: 40px;
  }

  .quick-preview.blurred {
    opacity: 80%;
    filter: blur(4px);
  }

  .results {
    margin-bottom: 24px;
    margin-top: auto;
    overflow-y: scroll;
    padding-top: 40px;
  }

  .input-box {}
  
  .history-wrapper {
    margin-bottom: 40px;
  }

  .history-entry {
    margin-bottom: 20px;
  }
</style>


