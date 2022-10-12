const vm = Vue.createApp({
    data(){
        return {
            perspective: 100,
            rotX: 0,
            rotY: 0,
            rotZ: 0
        }
    },
    computed:{
        box(){
            return{
                transform: 
                `perspective(${this.perspective}px)
                 rotateX(${this.rotX}deg)
                 rotateY(${this.rotY}deg)
                 rotateZ(${this.rotZ}deg)`
            }
        }
    },
    methods: {
        reset(){
            this.perspective = 100;
            this.rotX = 0;
            this.rotY = 0;
            this.rotZ = 0;
        },
        async copy(){
            //https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
            let txt = `transform: ${this.box.transform};`
            await navigator.clipboard.writeText(txt);

            alert('css copied to clipboard');
        }
    }
}).mount('#app');