import React, { useState, useContext } from "react";
import UsersContext from "../store/users-context";
import {  useEffect } from "react";
import styles from "./RegistrationForm.module.css";
import Button from "./UI/Button";
import axios from 'axios';

const RegistrationForm = () => {
  const usersCtx = useContext(UsersContext);
  useEffect(() => {  
    const url = 'http://localhost:3001/books';

    axios.get(url).then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    });
    }, []);

  const [name, setName] = useState("");
  const [linename, setLineame] = useState("");
  const [Pic, setPic] = useState("");
  const [exp, setExp] = useState("");
  const [ProNumber, setPronumber] = useState(0);
  const [price, setPrice] = useState(0);
 
  const [addFormData, setAddFormData] = useState({
    name: "",
    linename: "",
    Pic: "",
    exp: "",
    ProNumber: "",
    price: "",
  });

  let initVal = false;

  const addFormHandler = (event) => {
    
    initVal = false;

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  
  

  const submitHandler = (event) => {
    console.log(addFormData)

    axios.post('http://localhost:3001/books', addFormData);
    event.preventDefault();
   
    initVal = true;
    console.log(initVal);
   
    usersCtx.onAddUser({
      
      id: Math.random(),  
      name: addFormData.name,
      linename: addFormData.linename,
      Pic: addFormData.Pic,
      exp: addFormData.exp,
      ProNumber: addFormData.ProNumber,
      price: addFormData.price,
    });
    console.log(addFormData);
  };

  return (
    <div className={styles.justifyContentAround}>
      <h1>ลงรายการสินค้า</h1>
      <form className={styles.formStyle} onSubmit={submitHandler}>
        <h3>สินค้า</h3>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            ชื่อสินค้า
          </label>
          <input
            type="text"
            placeholder="ระบุให้ไม่ซ้ำใครเช่น เค้กป้าตา"
           
            className={styles.formControl}
            name="name"
            value={initVal ? "" : addFormData.name}
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="linename">ชื่อไลน์</label>
          <input
            type="text"
            placeholder="ระบุชื่อให้ตรงกับที่ใช้ในกลุ่มเท่านั้น"
            className={styles.formControl}
            name="linename"
            onChange={addFormHandler}
            required
          />
        </div>
       
        <div className={styles.formGroup}>
          <label htmlFor="Pic">รูปภาพ</label>
          <input
            type="text"
            placeholder="Add photo"
            className={styles.formControl}
            name="Pic"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="exp">คำอธิบายสินค้า</label>
          <input
            type="text"
            placeholder="ระบุคำอธิบายสินค้า"
            className={styles.formControl}
            name="exp"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ProNumber">จำนวนสินค้า</label>
          <input
            type="text"
            placeholder="ระบุจำนวน"
            className={styles.formControl}
            name="ProNumber"
            onChange={addFormHandler}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">ราคาสินค้า</label>
          <input
            type="number"
            placeholder="ระบุราคา"
            className={styles.formControl}
            name="price"
            onChange={addFormHandler}
            required
          />
        </div>
        <div>
          <Button type="submit">เพิ่มรายการสินค้า</Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
