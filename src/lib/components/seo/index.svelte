<script>
    import { siteLanguage, siteTitle } from '$lib/config/website';
   
    export let description;
    export let title;
   
    const pageTitle = `${siteTitle} | ${title}`;
  </script>
    
  <svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <html lang={siteLanguage} />
  </svelte:head>