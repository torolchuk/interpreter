<script lang="ts">
  export let label: string = "";
  export let control: string = "";
</script>

<div class="wrapper">
  <label control={control}>
    <span class="label-text">
      {label}
    </span>
    <slot />
  </label>
</div>

<style>
  .wrapper {
    margin-bottom: 16px;
  }

  .label-text {
    margin-bottom: 8px;
    display: block;
    color: #fff;
    font-size: 12px;
  }
</style>

