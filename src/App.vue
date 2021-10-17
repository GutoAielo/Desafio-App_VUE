<template>
   <div id="mb">
      <nav id="n">Reais para Dólares</nav>
   </div>
   <div id="money">
     <img class="ico" src="@/assets/images/dinheiro.png" alt="exchange money symbol"/> 
   </div>

   <div class="convertt">
     <span class="p-float-label">
      <label for="inpReal">Real</label>
      <InputNumber v-model="Real" mode="currency" currency="BRL" locale="pt-BR" alt=""/>
     </span>
    </div> 
   
   <div class="convertt">
     <span class="p-float-label">
      <label for="inpDollar">Dollar</label>
      <InputNumber v-model="Dollar" mode="currency" currency="USD" locale="en-US" alt=""/>
     </span>
    </div>

    <div class="convertButton" v-if="!Conversion">
      <butt label="Limpar" @click="clear" alt=""/>
      <butt label="Calcular" @click="calculate" class="button-calculate" alt=""/>
    </div>

    <div class="convertResult" v-if="Conversion">
      <p class="label-result">Com R${{ Real }} reais é possível comprar $ {{ Conversion }} dólares a ${{ Dollar}} cada dólar.</p>
      <br/>
    </div>
    <div class="convertResult" v-if="Conversion">
      <butt class="bC" @click="clear" label="Calcular Novamente"/>
    </div>
</template> 

<script>
  export default {
    data() {
      return {
          Real: null,
          Dollar: null,
          Conversion: "",
      }
    },  
      methods:{
        calculate:function() {
          this.Conversion = (this.Real / this.Dollar).toFixed(2);
       },
        clear(){
          this.Real = null,
          this.Dollar = null,
          this.Conversion = ""
       },
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#mb{
  background-color: lightgray;
  width: flex;
  height: 60px;
  max-width: 100%;
}
#n{
  font-size: 2rem;
  font-style: oblique;
  text-align: center;
  padding: 8px ;
}

#money{
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.ico{
  width: 200px;
  height: 200px;
}
.convertt{
  margin-top: 2rem;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.convertButton{
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.convertResult{
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

bC{
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.convertButton butt{
  background-color: #191919 !important;

}
.button-calculate{
  margin-left: 1rem !important;
}
</style>
