import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetNameTrainer } from "../store/slices/trainerName.slice";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault(), dispatch(SetNameTrainer(e.target.names.value.trim()));
    e.target.names.value= ''
    navigate('/pokedes')
  };
  return (
    <>
    <div className="contain__home">
      <img className="img__home" src="/imagenes/Diagram-React.png" alt="" />
      <h2 className="title__home">¡Hi Trainer!</h2>
      <p>To start this pokedex, give me your name</p>
      <form onSubmit={handleSubmit} className="form__home" >
        <input id="names" type="text" />
        <button>Start</button>
      </form>
    </div>
    <footer className="footer__home">
      <img src="/imagenes/Group-216.png" alt="" />
    </footer>
    </>
  );
};

export default Home;
