<template>
    <div>
        <button class="bg-green rounded text-white pointer-cursor py-2 px-4" @click="fireEmit">trigger emit</button>
    </div>
</template>
<script>
export default {
    emits: {
        'recieve-emit': null
    },
    setup(props, { emit }) {
        function fireEmit() {
            emit('recieve-emit');
        }

        return {
            fireEmit
        }
    }    
}
</script>