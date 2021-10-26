<template>
  <div class="counter-container">
    <div class="counter-1">
      <p>Counter One</p>
      <h1 class="number">{{firstCount}}</h1>
      <div class="buttons">
        <button class="add" @click="firstAdd">+</button>
        <button class="minus"  @click="firstMinus">-</button>
      </div>
    </div>
  </div>
  <div class="counter-container">
    <div class="counter-1">
      <p>Counter two</p>
      <h1 class="number">{{secondCount}}</h1>
      <div class="buttons">
        <button class="add" @click="secondAdd">+</button>
        <button class="minus" @click='secondMinus'>-</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {

computed: {
 ...mapGetters({ firstCount: 'count'}),
 ...mapGetters('CounterTwo',{secondCount:'countTwo'})
},
methods: {
  ...mapActions({firstAdd: 'addOne', firstMinus: 'minusOne', secondAdd:'CounterTwo/addIt', secondMinus:'CounterTwo/minusIt'})
},


};
</script>

<style lang="scss" scoped>
.counter-container {
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;
}
.counter-1 {
  text-align: center;

  .number {
    font-size: 50px;
  }

  .buttons {
    button {
      width: 100px;
      &:nth-child(1) {
        margin-right: 15px;
      }
    }
  }
}
</style>
