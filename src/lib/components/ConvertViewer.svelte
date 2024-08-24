<script lang="ts">
  import { Format } from "$lib/types";
  import { FORMATS } from "$lib/constants";
  import FormatPreview from "$lib/components/FormatPreview.svelte";

  export let format: Format;
  export let value: number;
  export let error: string;
  export let placeholder: string;
  
  const addConstantPrefix = (value: string, targetLength: number, char: string): string => {
    console.log(value);
    const curLength = value?.length ?? 0;
    if (curLength >= targetLength) return value;

    const prefixLenght = targetLength - curLength;
    return new Array(prefixLenght).fill(char).join('') + value;
  } 
  
  $: transformedValue = (value)?.toString(FORMATS[format].code);
  
  $: previewValue = addConstantPrefix(
    transformedValue,
    8,
    '0',
  )

</script>

<div class="container">
  <FormatPreview {format} />
  { #if !!value }
    <span class="text">
      {previewValue}
    </span>
  { :else if !!error }
    <span class="text error">
      {error}
    </span>
  { :else }
    <span class="text placeholder">
      {placeholder}
    </span>
  { /if }
</div>

<style>
  .container {
    display: flex;
    margin-left: 40px;
  }

  .text {
    font-size: 24px;
    font-weight: 700;
  }

  .placeholder {
    color: rgba(0, 0, 0, .2);
  }

  .error {
    color: red;
  }
</style>
