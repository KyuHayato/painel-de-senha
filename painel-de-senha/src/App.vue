<template>
  <body>
    <header>
      <img alt="sesi e senai logo" src="./assets/sesi-senai-logos.svg" />
    </header>
    <main>
      <div class="grid-container">
        <PasswordField
          v-for="info in passwordInfos"
          :key="info.id"
          :propNameDiscipline="info.nameDiscipline"
          :propNameTeacher="info.nameTeacher"
        ></PasswordField>
      </div>
    </main>
    <footer>
      <p>Desenvolvido pelo Prof. Kyu</p>
    </footer>
  </body>
</template>

<script>
import PasswordField from "./components/PasswordField.vue";
export default {
  name: "App",
  components: { PasswordField },
  data() {
    return {
      passwordInfos: [
        {
          id: 1,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 2,
          nameDiscipline: "Matematica",
          nameTeacher: "Jou",
        },
        {
          id: 3,
          nameDiscipline: "Informatica",
          nameTeacher: "Kyu",
        },
        {
          id: 4,
          nameDiscipline: "Jogos",
          nameTeacher: "Sennin",
        },
        {
          id: 5,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 6,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 7,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 8,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 9,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 10,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 11,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 12,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 13,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
        {
          id: 14,
          nameDiscipline: "Arquitetura",
          nameTeacher: "Danna",
        },
      ],
    };
  },
};
</script>

<style>
body {
  background-color: #000;
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
}

.paragraphDecorate {
  /* color: #fff; */
  text-align: center;
  font-size: 60px;
  margin: 0;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  clear: both;
}

header {
  text-align: center;
}

main {
  flex-grow: 1;
  margin-top: 20px;
}
</style>
