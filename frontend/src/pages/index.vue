<template>
  <wired-card elevation="2">
    <h1>留言板</h1>
    <wired-card elevation="1">
      <textarea placeholder="your name" ref="nameInput" style="height: 50%;"/>
    </wired-card>
    <wired-button elevation="2" v-on:click="greet">Submit</wired-button>
  </wired-card>
</template>

<script>

import "wired-elements"
export default {

}
</script>

<style></style>