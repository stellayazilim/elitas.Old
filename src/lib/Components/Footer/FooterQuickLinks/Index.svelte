<script lang="ts">
    export let headerText:string = "Quick Links"
    export let links: {
        text: string,
        url: string
    }[] = []
</script>

<div class="col-md-4 mb-5">
    <h5 class="font-weight-bold text-dark mb-4">{headerText}</h5>
    <div class="d-flex flex-column justify-content-start">
        {#each links.slice(0,links.length-1) as link}
        <a class="text-dark mb-2" href="{link.url}"><i class="fa fa-angle-right mr-2"></i>{link.text}</a>
        {/each}

       {#if links.length > 0}
       <a class="text-dark" href="contact.html"><i class="fa fa-angle-right mr-2"></i>{links[links.length-1].text}</a>
       {/if}
    </div>
</div>

