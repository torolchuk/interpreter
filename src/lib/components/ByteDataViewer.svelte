<script lang="ts">
  import { type ByteData } from "$lib/types";
  import { arrays as arrayHelpers } from "$lib/helpers";
  export let data: ByteData;
  export let value: number;
  $: viewerData = arrayHelpers.merge(new Array(8), data);

  const isBitPositive = (value: number, index: number): boolean => {
    return true;  
  }
</script>

{ #each viewerData as bitData, index }
  <span
    class="char"
    class:positive={isBitPositive(value, index)}
  >{ bitData?.label?.[0] ?? '_' }</span>
{ /each }

<style>

.char {
  font-size: 24px;
  font-weight: 700;  
}
.positive {
  color: green;
}
</style>
