<script lang="ts">
  import { FORMATS } from "$lib/constants";
  import { type Format } from "$lib/types"; 

  export let format: Format;
</script>

<style>
  .text {
    font-size: 24px;
    margin-right: 12px;
    font-weight: 700;
    color: #000;
  }

  .splitter {
    width: 2px;
    flex-shrink: 0;
    background-color: #000;
    margin-right: 12px;
    height: 28px;
  }
</style>

<span class="text">{FORMATS[format].prefix}</span>
<div class="splitter"></div>

