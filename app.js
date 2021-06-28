Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            message : ''
        }
    },
    computed: {
        box() {
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
            this.message = "Datos reiniciados!";
            setTimeout(() => {
                this.message = "";
            }, 1500);
        },
        copy(){
            const el = document.createElement('textarea');
            el.setAttribute('readonly','');
            el.style.position= 'absolute';
            el.style.left= '-999px';
            el.value = `transform: ${this.box.transform}`;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.message = "Datos copiados!";
            setTimeout(() => {
                this.message = "";
            }, 1500);
        }
    }
}).mount('#app')