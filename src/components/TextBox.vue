<template>
    <div class="col-md-12 form-group">
        <label :for="id" v-if="label">{{label}}</label>
        <input :type="type" class="form-control" :id="id" :placeholder="placeholder" :value="value" @input="updatedValue"/>
    </div>
</template>
<script>
    export default{
        name: "TextBox",
        data(){
            return{
                localValue: ''
            }
        },
        props: {
            id: {
                type: String,
                required: true,
            },
            type:{
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            value: {
                type: [String, Number],
                required: false,
            },
            label: {
                type: String,
                required: false,
            }
        },
        methods: {
            updatedValue(event){
                this.localValue= event.target.value;
                this.$emit('updatedValue', this.localValue)
            }
        }
    }
</script>