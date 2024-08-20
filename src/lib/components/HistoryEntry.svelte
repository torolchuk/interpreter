<script lang="ts">
  import { type AppHistoryEntry } from "$lib/types";
  import ConvertViewer from "$lib/components/ConvertViewer.svelte";

  export let entry: AppHistoryEntry;
</script>

<ConvertViewer format={entry.preset.input} value={entry.value} />
<ConvertViewer format={entry.preset.output} value={entry.value} />
