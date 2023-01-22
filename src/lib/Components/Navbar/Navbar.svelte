<script lang="ts">
import Sidemenu from "$lib/Components/Sidemenu/Sidemenu.svelte";
import Carousel from "$lib/Components/Navbar/Carousel.svelte";
import DropdownBar from "$lib/Components/DropdownBar/DropdownBar.svelte";


</script>

<div class="container-fluid mb-5">
    <div class="row border-top px-xl-5">
        <Sidemenu/>
        <div class="col-lg-9" >
            <DropdownBar/>

            <Carousel/>
    
        </div>
    </div>
</div>