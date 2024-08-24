<script lang="ts">
  import { readonly } from "svelte/store";
  import { arrays as arrayHelpers } from "$lib/helpers";

  import InputContainer from "$lib/components/InputContainer.svelte";
  import BitDataInput from "$lib/components/BitDataInput.svelte";

  import { storeActions, appStore, type AppState } from "$lib/store";

  const readonlyStore = readonly(appStore);
  const byteDataPlaceholder = new Array(8);
  let byteData;
  readonlyStore.subscribe((state: AppState) => {
    byteData = arrayHelpers.merge(
      byteDataPlaceholder,
      state.interpretation.byteData,
    );
  });

  const handleCheckboxClick = () => {
    const action = $readonlyStore.interpretation.enabled
      ? storeActions.interpretation.disable
      : storeActions.interpretation.enable;

    action();
  }

  const handleBitDataChange = (index, event) => {
    const newLabel = event.detail.value;
    storeActions.interpretation.setBitLabel(newLabel, index);
  }
</script>

<div class="container">
  <InputContainer
    element="div"
    label="Byte Interpretation"
  >
    <div class="checkbox">
      <input
        type="checkbox"
        checked={$readonlyStore.interpretation.enabled}
        on:click={handleCheckboxClick}
      />
    </div>
    <div
      class="inputs-box"
      class:disabled={!$readonlyStore.interpretation.enabled}
    >
      { #each byteData as bitData, index }
        <div class="input-box">
          <BitDataInput
            {index}
            value={bitData?.label ?? null}
            disabled={!$readonlyStore.interpretation.enabled}
            on:change={handleBitDataChange.bind(null, index)}
          />
        </div>
      { /each }
    </div>
  </InputContainer>
</div>

<style>
  .container {
    position: relative;
  }

  .checkbox {
    position: absolute;
    right: 0;
    top: 0;
  }

  .inputs-box {
    background: black;
    border-radius: 8px;

    width: 100%;
    background: #181818;
    box-shadow:
      inset 0 1px 4px 0 rgb(255 255 255 / 11%),
      0 4px 16px 0 rgb(0 0 0 / 25%);
    border: 1px solid rgba(255, 255, 255, .1);
    color: #fff;
    outline: none;
    border-radius: 8px;
  }

  .inputs-box.disabled {
    opacity: .2;
  }

  .input-box:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, .05);
  }
</style>
