<template>
  <div class="grid-item" id="natural-sciences">
    <h2>{{ nameTeacher }}</h2>
    <h4>{{ nameDiscipline }}</h4>
    <p id="natural-sciences-password-value" class="paragraphDecorate">
      {{ password }}
    </p>
    <div class="grid-button">
      <button class="btn-next" @click="nextNumber">Próx</button>
      <button class="btn-repeat" @click="repeatNumber">Repetir</button>
      <button class="btn-previus" @click="previusNumber">Voltar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propNameTeacher: String,
    propNameDiscipline: String,
  },
  data() {
    return {
      password: 0,
      nameTeacher: this.propNameTeacher,
      nameDiscipline: this.propNameDiscipline,
    };
  },
  methods: {
    // Função para gerar uma chave única para o localStorage baseada no professor e disciplina
    generateStorageKey() {
      return `${this.nameTeacher}-${this.nameDiscipline}-password`;
    },
    // Incrementa o número da senha e salva no localStorage
    nextNumber() {
      this.password++;
      this.savePasswordToLocalStorage();
      const text = `Senha ${this.password} para ${this.nameTeacher}`;
      this.speakText(text);
    },
    // Decrementa o número da senha e salva no localStorage
    previusNumber() {
      if (this.password > 0) {
        this.password--;
        this.savePasswordToLocalStorage();
        const text = `Senha ${this.password} para ${this.nameTeacher}`;
        this.speakText(text);
      }
    },
    // Repete a senha atual
    repeatNumber() {
      const text = `Senha ${this.password} para ${this.nameTeacher}`;
      this.speakText(text);
    },
    // Função para falar o texto (usando Web Speech API)
    speakText(text) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    },
    // Função para salvar a senha no localStorage
    savePasswordToLocalStorage() {
      const key = this.generateStorageKey();
      console.log("key"+ key)
      localStorage.setItem(key, this.password);
    },
    // Função para carregar a senha do localStorage
    loadPasswordFromLocalStorage() {
      const key = this.generateStorageKey();
      const storedPassword = localStorage.getItem(key);
      if (storedPassword !== null) {
        this.password = parseInt(storedPassword, 10);
      }
    },
  },
  // Carrega a senha do localStorage ao montar o componente
  mounted() {
    this.loadPasswordFromLocalStorage();
  },
};
</script>

<style scoped>
.btn-next {
  background-color: #5284cf;
  color: white;
  margin-right: 10px;
  font-weight: bold;
}
.btn-previus {
  background-color: rgb(211, 87, 87);
  color: white;
  font-weight: bold;
}
.btn-repeat {
  background-color: rgb(235, 242, 25);
  font-weight: bold;
  color: black;
  margin-right: 10px;
}
.grid-button {
  display: flex;
  justify-content: center;
  justify-items: center;
}
</style>
