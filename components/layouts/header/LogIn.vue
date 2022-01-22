<template>
  <div class="login">
    <div class="log-in-auth">
      <button class="cancel" @click="closeMenu">X</button>
      <h2>Авторизация</h2>
      <div v-if="register == false" class="auth-log">
        <p class="log-nav">
          Нет аккаунта? <span @click="register = true">Регистрация</span>
        </p>
        <form class="log-in-form">
          <input placeholder="E-mail или телефон" type="text" />
          <input placeholder="Пароль" type="password" />
          <button>Войти в личный кабинет</button>
        </form>
        <button class="forget-pass">Забыли пароль?</button>
        <div class="log-with">
          <h5>Войти</h5>
        </div>
        <div class="with-social">
          <div class="socials google-with">
            <img src="~/assets/images/svg/google.svg" alt="Google" />
            <p>Войти с помощью Google</p>
          </div>
          <div class="socials">
            <img src="~/assets/images/svg/meta.svg" alt="Google" />
            <p>Войти с помощью Facebook</p>
          </div>
        </div>
      </div>
      <div v-else class="auth-log">
        <p class="log-nav">
          Есть аккаунт? <span @click="register = false">Войти</span>
        </p>
        <form class="log-in-form">
          <input placeholder="E-mail или телефон" type="text" />
          <input placeholder="Имя" type="text" />
          <input placeholder="Фамилия" type="text" />
          <input placeholder="Пароль" type="password" />
          <input placeholder="Повторите пароль" type="password" />
          <img
            class="recaptcha"
            src="~/assets/images/png/recaptcha.png"
            alt="Not Found"
          />
          <div class="confirm">
            <input type="checkbox" />
            <p>Я подтверждаю, что мне больше 18 лет</p>
          </div>
          <button>Зарегистрироваться</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: false,
    };
  },
  methods: {
    closeMenu() {
      this.$store.commit("auth/openLog", false);
    },
  },
};
</script>

<style>
.log-in-auth {
  height: max-content;
  width: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 12px 3px rgba(56, 56, 56, 0.05);
  border-radius: 3px;
  position: relative;
  padding: 40px 70px 60px;
}

.log-in-auth .cancel {
  background: none;
  outline: none;
  border: none;
  color: #ff9033;
  font-size: 22px;
  font-weight: 500;
  height: max-content;
  position: absolute;
  top: 26px;
  right: 26px;
}

.log-in-auth h2 {
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  margin: 0 0 18px 0;
}

.auth-log {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-log .log-nav {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #abacbb;
  margin: 0 0 28px 0;
}

.auth-log .log-nav span {
  color: #ff9033;
  cursor: pointer;
}

.log-in-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.log-in-form input {
  width: 100%;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 12px 0 12px 20px;
}

.log-in-form input:not(:first-child) {
  margin: 22px 0 0 0;
}

.log-in-form button {
  padding: 12px 0;
  background: #ff9033;
  border-radius: 5px;
  width: 100%;
  margin: 40px 0 18px 0;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}

.auth-log .forget-pass {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #abacbb;
  margin: 0 0 40px 0;
  outline: none;
  border: none;
  background: transparent;
}

.log-with {
  margin: 0 0 26px 0;
  position: relative;
  width: 100%;
}

.log-with::before {
  content: "";
  position: absolute;
  height: 1px;
  width: 133px;
  background: #d2d2d2;
  left: 0;
  top: 50%;
}

.log-with::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 133px;
  background: #d2d2d2;
  right: 0;
  top: 50%;
}

.log-with h5 {
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #372e2e;
  margin: 0;
  text-align: center;
}

.with-social {
  width: 100%;
}

.socials {
  display: flex;
  align-items: center;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 11px 0 9px 31px;
  width: 100%;
}

.google-with {
  margin: 0 0 22px 0;
}

.socials p {
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #abacbb;
}

.socials img {
  margin: 0 21px 0 0;
}

.recaptcha {
  margin: 22px 0 0 0;
}

.confirm {
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
}

.confirm input {
  width: 15px;
  height: 15px;
  background: #ff9033;
  border: 1px solid #ff9033;
  box-sizing: border-box;
  border-radius: 3px;
}

.confirm p {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #969696;
  margin: 0 0 0 8px;
}
</style>