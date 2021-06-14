<template>
    <div class="bg-green text-white p-2 my-4">
        <slot name="heading"></slot>
        <p>This is the slot child component, this sentence is in the component</p>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>