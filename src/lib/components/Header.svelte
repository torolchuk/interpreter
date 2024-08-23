<script lang="ts">
  import { base } from "$app/paths";

</script>

<style>
  .header {
    height: 60px;
    background-color: rgba(255, 255, 255, .8);
    backdrop-filter: blur(10px); 
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .05);
    display: flex;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }

  .logo {
    font-size: 24px;
    font-weight: 700;
  }

  .github-link {
    display: inline-block;
  }

  .github-icon {
    height: 46px;
  }

</style>

<div class="header">
  <span class="logo">
    Interpreter
  </span>
  <a
    class="github-link"
    href="https://github.com/torolchuk/interpreter"
    target="_blank"
  >
    <img class="github-icon" src="{base}/icons/github.png" alt="github icon">
  </a>
</div>
