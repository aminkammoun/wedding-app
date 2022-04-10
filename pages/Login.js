import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import axios from "axios";
import { MdLockOutline } from "react-icons/md";
export default function Login() {
  function clickme() {
    axios.get("http://localhost:5000/user/").then((res) => {
      console.log(res.data);
    });
  }

  return (
    <main className=" flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-10">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 maw-w-4xl ">
        {/* -----------sign in section------------ */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-green-500">Organisateur</span>Mariage
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Accédez à votre compte
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            {/* -------social login section--------- */}
            <div className="flex justify-center my-2 ">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            <p className="text-gray-400 my-3">
              {" "}
              Ou connectez-vous avec votre email
            </p>
            <div className="flex flex-col items-center ">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="flex  justify-between w-64 mb-5">
                <a href="#" className="text-xs text-gray-400 my-3">
                  mot de passe oublié ?
                </a>
              </div>
              <button
                onClick={clickme}
                className="border-2 border-green-500 rounded-full text-green-500 py-2 px-12 inline-block font-semibold hover:bg-green-500 hover:text-white"
              >
                Accédez
              </button>
            </div>
          </div>
        </div>
        {/* ----------sign up section------------ */}
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2"> Bonjour, les amis</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-2"> Première visite sur OrganisateurMariage !</p>
          <a
            href="#"
            className="border-2 border-white rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-green-500  my-3"
          >
            Inscrivez
          </a>
        </div>
      </div>
    </main>
  );
}