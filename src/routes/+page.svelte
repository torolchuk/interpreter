<script>
  import Header from "$lib/Header.svelte";
  import Input from "$lib/Input.svelte";
</script>

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

<Header />

<div class="page-container">
  <div class="input-box">
    <Input />
  </div>
</div>

