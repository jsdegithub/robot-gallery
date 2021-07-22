import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props {
  username: string;
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setRobotGallery(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="" />
        <h1>罗伯特机器人购物平台</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          点击
        </button>
        <span>{count}</span>
      </div>
      <ShoppingCart />
      {error && <h2>出错了：{error}</h2>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email}></Robot>
          ))}
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default App;
