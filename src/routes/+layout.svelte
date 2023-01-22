<script>
    import Footer from "./Footer.svelte";
    import Topbar from "$lib/Components/Topbar.svelte";
    import Navbar from "../lib/Components/Navbar/Navbar.svelte";

</script>
   <!-- Topbar Start -->
   <Topbar/>
   <!-- Topbar End -->
   
   
   <!-- Navbar Start -->
   <Navbar/>
   <!-- Navbar End -->
<main>
    <slot />
</main>

<Footer/>