<template>
    <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
        <div class="modal-wrapper">
            <div class="modal-container">

                <div class="modal-header">
                    <slot name="header">
                        default header
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        default body
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        default footer
                        <button class="button" @click="$emit('close')">
                            OK
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "BetsModal",
        props:[
            "risk",
            "matches",
            "odds_filter"
        ]
    }

</script>

<style scoped>

</style>