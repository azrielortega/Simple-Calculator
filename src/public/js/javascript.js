import React, { Component, useState } from 'react';

const operators = ['/', '*', '+', '-', '.']
const [calc, setCalc] = useState ("")
const [result, setResult] = useState ("")

const updateCalc = (value) =>{
    console.log(value);
}

const scriptLoaded = () =>{
    console.log("Script Loaded");
};