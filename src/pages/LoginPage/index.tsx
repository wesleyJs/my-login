import React, { useState } from 'react';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('submit', {email, password});
  }
  return  (
    <div className={styles.login}>
      <h1 title="title">Login</h1>

      <form className={styles.login__form} onSubmit={handleSubmit}>
        <div className={styles.login__field}>
          <label className={styles.login__label} htmlFor="email">Email</label>
          <input className={styles.login__input} type="email" name="email" id="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label className={styles.login__label} htmlFor="password">Senha</label>
          <input className={styles.login__input} type="password" name="password" id="password" placeholder="senha"
          value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.login__actions}>
          <button id='Button' type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}