<template>
  <form method="post" action="" accept-charset="UTF-8">
    <label for="company">Name Firma</label>
    <input type="text" id="company" name="company" required />

    <label for="spokesperson">Ansprechperson</label>
    <input type="text" id="last-name" name="last-name" required />

    <label for="email">E-Mail</label>
    <input type="email" id="email" name="email" required />

    <label for="catering">mit Essen</label>
    <div class="radio-group">
      <label class="button">
        <input type="radio" name="catering" value="ja" checked />
        Ja
      </label>
      <label class="button">
        <input type="radio" name="catering" value="nein" />
        Nein
      </label>
    </div>

    <button type="submit">Absenden</button>
  </form>
</template>

<style scoped>
form {
  font-size: var(--font-size-h4);
}

form > * {
  line-height: 3rem;
}

form label {
  text-align: left;
}

form input {
  border: 1px solid var(--color-text);
  border-radius: 0;
  font-size: var(--font-size-h4);
}

form button {
  font-size: var(--font-size-p);
  font-weight: 300;
  margin: 0;
}

form button::after {
  content: "→";
}

form .radio-group {
  display: flex;
  gap: 1em;
}

form .radio-group label {
  flex: 1;
}

form .radio-group .button:hover {
  line-height: 42px;
}

form .radio-group input[type="radio"] {
  appearance: none;
  border: 1px solid var(--color-text);
  width: 18px;
  height: 18px;
  margin: auto 0.5em;
}

form .radio-group input[type="radio"]:checked {
  appearance: none;
  background: var(--color-text);
}

@media (max-width: 767px) {
  form {
    text-align: left;
  }

  form input {
    margin-bottom: 0.5em;
  }

  form button {
    margin-top: 1em;
  }
}

@media (min-width: 768px) {
  form {
    display: grid;
    grid-template-columns: 1fr 360px 1fr;
    font-size: var(--font-size-h4);
    gap: 1rem;
    align-items: center;
  }

  form label {
    border-bottom: 1px solid var(--color-text);
    grid-column: 1;
  }

  form button {
    grid-column: 2;
  }

  form .radio-group {
    vertical-align: center;
  }
}
</style>
