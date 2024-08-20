<script lang="ts">
  import { FORMATS } from "$lib/constants";
  import { type Format } from "$lib/types"; 

  export let format: Format;
</script>

<style>
  .text {
    font-size: 24px;
    font-weight: 700;
    color: rgba(0,0,0, .2);
  }
</style>

<span class="text">{FORMATS[format].prefix}</span>
<div class="splitter"></div>

