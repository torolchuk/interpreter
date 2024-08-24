<script lang="ts">
  import { type AppHistoryEntry } from "$lib/types";
  import ConvertViewer from "$lib/components/ConvertViewer.svelte";
  import ByteDataViewer from "$lib/components/ByteDataViewer.svelte";

  export let entry: AppHistoryEntry;
</script>

<ConvertViewer format={entry.preset.input} value={entry.value} />
<ConvertViewer format={entry.preset.output} value={entry.value} />
{ #if entry.byteData }
  <ByteDataViewer value={entry.value} data={entry.byteData} />
{ /if }
