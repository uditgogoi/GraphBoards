<template>
  <div id="login">
    <div class="login-form">
      <div class="p-input-filled">
        <div>
          <h2>Login</h2>
        </div>
        <div class="input-wrappers">
          <div class="input-label">Username</div>
          <InputText
            type="text"
            v-model="username"
            placeholder="Ex. john@gmail.com"
            class="input"
          />

          <br /><br />
          <div class="input-label">Password</div>
          <InputText
            type="password"
            v-model="password"
            placeholder="********"
            class="input"
          />

          <div v-if="showRegister">
            <br />
            <div class="input-label">Confirm password</div>
            <InputText
              type="confirmPassword"
              v-model="confirmPassword"
              placeholder="********"
              class="input"
            />
          </div>

          <div style="margin-top:1rem;">
            <Button label="Submit" />
          </div>

          <div class="hint" v-if="!showRegister">
            Not Registered yet?
            <a @click="showRegister = true" class="register">Register here</a>
          </div>
          <div class="hint" v-else>
            Already Registered?
            <a @click="showRegister = false" class="register">Login here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      showRegister: false,
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    onClickRegister() {
      this.showRegister = !this.showRegister;
    },
  },
};
</script>
<style scoped>
.hint {
  margin-top: 2rem;
}
.register {
  color: #3d8aca;
  cursor: pointer;
}
.register:hover {
  color: #6ba5d7;
}
</style>
