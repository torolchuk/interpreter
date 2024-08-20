<script lang="ts">
  import { readonly } from "svelte/store";
  import { blur, fade } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";
  import Input from "$lib/components/Input.svelte";
  import ConvertViewer from "$lib/components/ConvertViewer.svelte";
  import HistoryEntry from "$lib/components/HistoryEntry.svelte";

  import { appStore, storeActions } from "$lib/store";
  import { ERROR_MESSAGES } from "$lib/constants";

  export const ssr = false;

  const readonlyStore = readonly(appStore);

  const handleInputUpdate = (event) => {
    const value = Number(event.detail.value);
    storeActions.updateCurrentValue(value);
  };

  const handleSaveClick = () => storeActions.saveToHistory();
  
</script>

<Header />

<div class="page-container">
  <div class="results">
    <div class="history-wrapper">
      { #each $readonlyStore.history as historyEntry }
        <div
          class="history-entry"
          transition:blur|fade={{ duration: 300 }}
        >
          <HistoryEntry
            entry={historyEntry}
          />
        </div>
      { /each }
    </div>

    <!-- { #if $appStore.currentData } -->
      <ConvertViewer
        format={$readonlyStore?.preset?.output}
        value={$readonlyStore.currentData}
        placeholder="Enter a number"
        error={ERROR_MESSAGES?.[$readonlyStore.error]}
      />
    <!-- { /if } -->
  </div>
  <div class="input-box">
    <Input
      on:inputUpdate={handleInputUpdate}
      on:saveClick={handleSaveClick}
      format={$readonlyStore.preset.input}
    />
  </div>
</div>

<style>
  .page-container {
    height: calc(100% - 100px);
    margin: 0 0 50px;
    display: flex;
    flex-direction: column;
  }

  .results {
    margin-bottom: 24px;
    margin-top: auto;
  }

  .input-box {}
  
  .history-wrapper {
    margin-bottom: 40px;
  }

  .history-entry {
    margin-bottom: 20px;
  }
</style>


