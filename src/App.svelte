<script>
  let content = "";
  let author = "";
  $: link = `?c=${content}&a=${author}`;
</script>

<main>
  <div>
    <p>Content</p>
    <input type="text" bind:value={content} />
  </div>
  <div>
    <p>Author</p>
    <input type="text" bind:value={author} />
  </div>
    <button>
      <a href={link}>Link</a>
    </button>
</main>

<style>
</style>
