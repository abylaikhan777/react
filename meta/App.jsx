import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleRegister = () => {
    if (!name || !email || !password) {
      setError("Барлық өрісті толтырыңыз");
      return;
    }
    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      setError("");
    } else {
      setError("Қате email немесе пароль");
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleDelete = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleGuestLogin = () => {
    setUser({ name: "Guest" });
  };

  return (
    <div className="container">
      {user ? (
        <div className="dashboard">
          <h1>Қош келдің {user.name}!</h1>
          <button className="btn logout" onClick={handleLogout}>Шығу</button>
          {user.name !== "Guest" && <button className="btn delete" onClick={handleDelete}>Аккаунтты жою</button>}
        </div>
      ) : (
        <div className="auth-container">
          <h1>Тіркелу немесе Кіру</h1>
          <input type="text" placeholder="Аты" className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Emai" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Парол" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn register" onClick={handleRegister}>Тіркелу</button>
          <button className="btn login" onClick={handleLogin}>Кіру</button>
          <button className="btn guest" onClick={handleGuestLogin}>Қонақ ретінде кіру</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
    </div>
  );
}