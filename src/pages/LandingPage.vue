<template>
  <div class="landing-page">
    <main>
      <h1>Harness the power of machine learning from a familiar interface</h1>
      <p>MLSheets provides machine learning infused spread-sheets for businesses of all sizes.</p>
      <form>
        <input type="email" placeholder="Enter your email">
        <button type="submit">Get started</button>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
@Component
export default class LandingPage extends Vue {

}
</script>

<style scoped>
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
}

p {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}

form {
  display: flex;
  margin-bottom: 2rem;
}

input[type="email"] {
  width: 20rem;
  padding: 0.5rem 1rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 1rem;
  outline: none;
}

input[type="email"]:focus {
  border-color: #333;
}

button[type="submit"] {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  cursor: pointer;
  outline: none;
}

button[type="submit"]:hover {
  background-color: #666;
}
</style>