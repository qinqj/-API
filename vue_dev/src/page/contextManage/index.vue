<template>
    <div>
        <Button @click="onClick">测试</Button>
        <div>{{callback}}</div>
    </div>
</template>
<script>
import {Button} from 'element-ui';
import {get} from 'axios';
export default {
    name: 'contextManage',
    components: {
        Button
    },
    data() {
        return {
            callback: ''
        }
    },
    methods: {
        async onClick() {
            const { data } = await get('/api/user/get', {
                params: {
                    userid: 'haluo',
                    corpid: 'ww5d12b2a998ef967c',
                    corpsecret: '9qhkrLhLTnqzx6GQRq6I8Rb18afN3AE-UXaWUXcwv1c',
                }
            });
            this.callback = JSON.stringify(data);
        }
    },
}
</script>