<template>
    <div>
        <input type="text">
        <input type="email" name="" id="">
        <input type="password" name="" id="">
        
        <input type="checkbox" v-model='isAccepted'>
        <button type="submit"
        :class="{'is-disabled': !isAccepted}"
        @click='submitForm'>
        Registrar
        </button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isAccepted: false
        }
    },
    methods: {
        submitForm() {
            // Very complicated function with a lot of logic
            // ...
        }
    },

}
</script>