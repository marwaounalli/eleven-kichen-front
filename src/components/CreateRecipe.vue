<script setup>
    import { reactive } from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { required } from '@vuelidate/validators'

    const initialState = {
        title: '',
        description: '',
        select: null,
    }

    const state = reactive({
        ...initialState,
    })

    const items = [
        'Facile',
        'Moyenne',
        'Difficile'
    ]

    const rules = {
        title: { required },
        description: { required },
        select: { required },
        items: { required },
    }

    const v$ = useVuelidate(rules, state)

    function clear() {
        v$.value.$reset()

        for (const [key, value] of Object.entries(initialState)) {
            state[key] = value
        }
    }
</script>

<template>
        <v-card class="ma-5 pa-5">

            <form>
        <v-text-field v-model="state.title" :error-messages="v$.title.$errors.map(e => e.$message)" :counter="10" label="Titre"
            required @input="v$.title.$touch" @blur="v$.title.$touch"></v-text-field>

        <v-select v-model="state.select" :items="items" :error-messages="v$.select.$errors.map(e => e.$message)"
            label="Diffucilté" required @change="v$.select.$touch" @blur="v$.select.$touch"></v-select>

                    <v-textarea
            clearable
            clear-icon="mdi-close-circle"
            label="Description"
            v-model="state.description" :error-messages="v$.description.$errors.map(e => e.$message)" :counter="10"
            required @input="v$.description.$touch" @blur="v$.description.$touch"></v-textarea>

        <v-btn class="me-4" @click="v$.$validate">
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </form>


    </v-card>

</template>