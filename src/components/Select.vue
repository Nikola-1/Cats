<template>
    <div>
        <div class="form-group">
            <label :for="id" v-if="label">{{label}}</label>
            <select :id="id" v-model="localValue" @change="updatedValue">
                <option v-for="item in items" :key="item[displayProperty]" :value="item[displayProperty]">{{item[displayProperty]}}</option>
            </select>
        </div>
    </div>
</template>
<script>
    export default{
        name:'SelectComponent',
        data(){
            return{
                localValue : "",
            }
        },
        props: {
            id:{
                type: String,
                required: true,
            },
            items: {
                type: Array,
                required: true,
            },
            value: {
                type: String,
                required: false,
            },
            label: {
                type: String,
                required: false,
            },
            displayProperty: {
                type: String,
                required: true
            }
        },
        mounted(){
            this.localValue = this.value
        },
        methods: {
            updatedValue(event){
                this.localValue= event.target.value;
                this.$emit('updatedValue', this.localValue)
            }
        }
    }
</script>
<style>
    label{
        margin-right: 20px;
    }
</style>