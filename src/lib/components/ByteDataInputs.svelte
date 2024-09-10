<script lang="ts">
  import { arrays as arrayHelpers } from "$lib/helpers";

  import InputContainer from "$lib/components/InputContainer.svelte";
  import BitDataInput from "$lib/components/BitDataInput.svelte";

  import { read, actions } from "$lib/store";

  const byteDataPlaceholder = new Array(8);

  $: byteData = arrayHelpers.merge($read.interpretation.byteData, byteDataPlaceholder);

  const handleCheckboxClick = () => {
    const action = $read.interpretation.enabled
      ? actions.interpretation.disable
      : actions.interpretation.enable;

    action();
  }

  const handleBitDataChange = (index, event) => {
    const newLabel = event.detail.value;
    actions.interpretation.setBitLabel(newLabel, index);
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
        checked={$read.interpretation.enabled}
        on:click={handleCheckboxClick}
      />
    </div>
    <div
      class="inputs-box"
      class:disabled={!$read.interpretation.enabled}
    >
      { #each byteData as bitData, index }
        <div class="input-box">
          <BitDataInput
            {index}
            value={bitData?.label ?? null}
            disabled={!$read.interpretation.enabled}
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
