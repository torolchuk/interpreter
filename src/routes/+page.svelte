<style>
  .page-container {
    height: calc(100% - 100px);
    margin: 0 0 50px;
    display: flex;
    flex-direction: column;
  }

  .input-box {
    margin-top: auto;
  }
</style>

<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Input from "$lib/components/Input.svelte";

  // import { writable } from "svelte/store";

  import { type PresetData, Format } from "$lib/types";

  // let presetData: PresetData = {
  //   input: Format.Hexadecimal,
  //   output: Format.Decimal,
  // };

  const handleInputUpdate = (value) => {
    // const normalized
    console.log(value);
  };
  
</script>

<Header />

<div class="page-container">
  <div class="input-box">
    <Input
      on:inputUpdate={handleInputUpdate}
      format={presetData.input}
    />
  </div>
</div>

