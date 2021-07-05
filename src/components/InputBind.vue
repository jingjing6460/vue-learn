<template>
<div>
    {{data}}
    <input type="text" id="demo" v-on:input="onInput()" />
    <div id="show" class="display-bind-value"></div>
</div>
</template>

<script>
export default {
    name: '',
    // 初始化数据
    data() {
        return {
            oData: {
               
                    value: 'test',
                    name: 'zhangjing'
            },
            odiv: '',
            oinput: ''
        }
    },
    // 可传入的数据
    props: {
        data: String
    },
    mounted() {

        this.odiv = document.getElementById('show');
        this.oinput = document.getElementById('demo');
        this.observer(this.oData)
        // this.oData.valueObj.value = "hahahaha"
    },
    methods: {

        initData() {
        },

        onInput() {
            this.oData.value = this.oinput.value;
            console.log('on input',this.oData.value,this.oinput.value)

        },

        update() {
            this.odiv.innerText = this.oData.value;
        },

        observer(data) {
            console.log('start observe', this.oData)
            if (!data || typeof data != 'object') {
                return data;
            }
            Object.keys(data).forEach(key => {
                this.defineReactive(data, key, data[key])
            })
        },

        defineReactive(data, key, val) {
            this.observer(val);
            const this_ = this;
            Object.defineProperty(data, key, {
                get() {
                    return val;
                },
                set(newValue) {
                    console.log('set newvalue', newValue)
                    if (newValue == val) {
                        return;
                    }else{
                        val = newValue
                    }
                    // upadte 
                    this_.update()
                }
            })
        }
    }
}
</script>

<style scoped>
.display-bind-value{
    width:100px;
    height: 24px;
    border: 1px dashed #f5f6f7;
    background: #f5f6f7;
}
</style>
