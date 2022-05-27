import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import NavBar from "./components/LandingPage/NavBar";
import Hero from "./components/LandingPage/Hero";
import About from "./components/LandingPage/About";
import Build from "./components/LandingPage/Build";
import Footer from "./components/LandingPage/Footer";

function TempDashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
      <>
        <NavBar />
        <Hero />
        <About />
        <Build />
        <Footer />
      </>
  );
}

export default TempDashboard;
