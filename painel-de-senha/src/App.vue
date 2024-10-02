<template>
  <body>
    <header>
      <img alt="sesi e senai logo" src="./assets/sesi-senai-logos.svg" />
    </header>
    <main>
      <div class="grid-container" v-if="!isAfternoon">
        <PasswordField
          v-for="info in passwordInfosMorning"
          :key="info.id"
          :propNameDiscipline="info.nameDiscipline"
          :propNameTeacher="info.nameTeacher"
        ></PasswordField>
      </div>
      <div class="grid-container" v-else>
        <PasswordField
          v-for="info in passwordInfosAfternoon"
          :key="info.id"
          :propNameDiscipline="info.nameDiscipline"
          :propNameTeacher="info.nameTeacher"
        ></PasswordField>
      </div>

      <div class="wrapper">
        <div class="toggle-container">
          <span class="label-text">Manhã</span>
          <label class="switch">
            <input type="checkbox" v-model="isAfternoon" />
            <span class="slider"></span>
          </label>
          <span class="label-text">Tarde</span>
        </div>
      </div>

       <button class="reset-btn" @click="openModal">Resetar Senhas</button>

      <!-- Modal de confirmação -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal">
          <h3>Confirmação</h3>
          <p>Você tem certeza que deseja resetar todas as senhas?</p>
          <button @click="resetPasswords">Confirmar</button>
          <button @click="closeModal">Cancelar</button>
        </div>
      </div>
    </main>
    <footer>
      <p>Desenvolvido pelo Prof. Kyu</p>
    </footer>
  </body>
</template>

<script>
import PasswordField from "./components/PasswordField.vue";
import { passwordInfosMorning, passwordInfosAfternoon } from '@/data/passwordInfos.js'
export default {
  name: "App",
  components: { PasswordField },
  data() {
    return {
      isAfternoon: false,
      showModal: false,
      passwordInfosMorning,
      passwordInfosAfternoon
    };
  },
  methods: {
    openModal() {
      this.showModal = true; // Abre o modal
    },
    closeModal() {
      this.showModal = false; // Fecha o modal
    },
    resetPasswords() {
      localStorage.clear();
      this.closeModal();
      location.reload();
    }
  }
};
</script>

<style>
/* Estiliza o botão de reset no canto inferior direito */
.reset-btn {
  bottom: 20px;
  right: 20px;
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.reset-btn:hover {
  background-color: #d32f2f;
}

/* Estilização do modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.modal button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal button:first-of-type {
  background-color: #4caf50;
  color: white;
}

.modal button:last-child {
  background-color: #f44336;
  color: white;
}

.modal button:hover {
  opacity: 0.8;
}


.label-text {
  background-color: #ccc;
  padding: 4px;
  margin: 6px;
  border-radius: 5px;
  border: solid 2px #ddd;
  font-weight: bold;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

body {
  background-image: url(./assets/matricula_image.jpg);
  /* background-repeat: no-repeat; 
  background-size: cover;   */
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.grid-item {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
}

#logo {
  width: 250px;
  height: 80px;
  margin: 5px;
}

h2,
h4 {
  /* color: #fff; */
  text-align: center;
  margin: 0.4rem;
}

.paragraphDecorate {
  /* color: #fff; */
  text-align: center;
  font-size: 12.520868113522537vh;
  margin: 0;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  clear: both;
  margin-top: 20px;
}

header {
  text-align: center;
}

main {
  flex-grow: 1;
  margin-top: 20px;
}
</style>
