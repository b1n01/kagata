<script>
  const debounce = (func, timeout = 350) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), timeout);
    };
  }

  let content = "";
  let author = "";
  $: link = `?c=${content}&a=${author}`;

  const updateContent = debounce((e) => content = e.target.value); 
  const updateAuthor = debounce((e) => author = e.target.value); 

  let showPreview = false;
  const togglePreview = () => {showPreview = window.innerWidth > 1200};
  togglePreview();
  window.addEventListener('resize', togglePreview);
</script>

<main class="flex flex-col mx-10">

  <header>
    <h1 class="red text-5xl my-4">Kagata</h1>
  </header>

  <div class="flex mt-8">

    <section class="flex flex-col items-start {showPreview ? "w-2/5 mr-4" : "w-full mx"}">
      <p class="text-lg">Fai sapere a quell'amico che dice sempre kagate che ne ha detta un altra!</p>

      <p class="red mt-16">Qual'è la kagata?</p>
      <input type="text" 
        on:keyup={updateContent} 
        placeholder="Sono sempre in orario!" 
        class="w-full mt-2 py-4 px-8" 
      />

      <p class="red mt-8">Chi l'ha detta?</p>
      <input type="text" 
        on:keyup={updateAuthor} 
        placeholder="Tu sai chi sei..." 
        class="w-full mt-2 py-4 px-8"
      />
    
      <a class="bg-red cream mt-8 border rounded px-8 py-4" href={link}>Go</a>
    </section>

    {#if showPreview}
      <div class="w-3/5 ml-4">
        <p class="red">Anteprima</p>
        <iframe src={link} title="preview" />
      </div>
    {/if}
  </div>

</main>

<style>
  .red {
    color: var(--red);
  }
  .cream {
    color: var(--cream);
  }
  .bg-red {
    background-color: var(--red);
  }
  iframe {
    height: calc(100vh - 136px);
    width: 100%;
    pointer-events: none;
  }
</style>
