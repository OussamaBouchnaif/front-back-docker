"use client";
require('dotenv').config();

import { useState, } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExpensesList } from "./project/components/ExpensesList";
import ProductForm from "./About/ProductForm";


  function App() {

    console.log('API URL:', process.env.NEXT_PUBLIC_BACK_URL);
    return (
      <>
      <ProductForm></ProductForm>
      </>
      
    );
  }
  
 

export default App;