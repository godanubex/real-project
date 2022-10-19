import React, { useState, useContext } from "react";
import UsersContext from "../store/users-context";
import { useEffect } from "react";
import styles from "./RegistrationForm.module.css";
import Button from "./UI/Button";
import axios from 'axios';
import Switch from 'react-switch'
class Appp extends React.Component{
  constructor(){
    super()
    this.state = {
      checked: false 
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(checked){
    this.setState({checked})
  }
  render(){
    return(
      <div>
          <h2></h2>
         <Switch
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              />
              <p>ขณะนี้   <b>{this.state.checked ? 'ร้านเปิดอยู่' : 'ร้านปิดชั่วคราว'}</b>.</p>
      </div>
    )
  }
}

const RegistrationForm = () => {
  const usersCtx = useContext(UsersContext);
  useEffect(() => {
    const url = 'http://178.128.119.167:3001/books';

    axios.get(url).then((response) => {
      // handle success
      console.log(response);
    })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const [newName, setNewName] = useState("");
  const [newLinename, setNewLinename] = useState("");
  const [newPic, setNewPic] = useState("");
  const [newExp, setNewExp] = useState("");
  const [newProNumber, setNewPronumber] = useState(0);
  const [newPrice, setNewPrice] = useState(0);



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

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
const uploadImage = async (event) => {
  const input = document.getElementById("Pic");
//const avatar = document.getElementById("avatar");
//const textArea = document.getElementById("textAreaExample");
  const file = event.target.files[0];
  const base64 = await convertBase64(file);
  //avatar.src = base64;
  //textArea.innerText = base64;
  console.log(base64);
  const newFormData = { ...addFormData };
    newFormData['Pic'] = base64;

    setAddFormData(newFormData);
};

  const [storeList, setStoreList] = useState([]);
  const getStore = () => {
    axios.get('http://178.128.119.167:3001/store').then((response) => {
      setStoreList(response.data);
    
    })
  }
  const updateStoreLineName = (id) => {
    axios.put('http://178.128.119.167:3001/updateline', { linename: newLinename, id: id }).then((response) => {
      setStoreList(
        storeList.map((val) => {
          return val.id == id ? {
            id: val.id,
            name: val.name,
            linename: newLinename,
            Pic: val.Pic,
            exp: val.exp,
            ProNumber: val.ProNumber,
            price: val.price
          } : val;
        })
      )
    })
  }
  const updateStoreName = (id) => {
    axios.put('http://l178.128.119.167:3001/update', { name: newName, id: id }).then((response) => {
      setStoreList(
        storeList.map((val) => {
          return val.id == id ? {
            id: val.id,
            name: newName,
            linename: val.linename,
            Pic: val.Pic,
            exp: val.exp,
            ProNumber: val.ProNumber,
            price: val.price
          } : val;
        })
      )
    })
  }
  const updateStoreExp = (id) => {
    axios.put('http://178.128.119.167:3001/updateexp', { exp: newExp, id: id }).then((response) => {
      setStoreList(
        storeList.map((val) => {
          return val.id == id ? {
            id: val.id,
            name: val.name,
            linename: val.linename,
            Pic: val.Pic,
            exp: newExp,
            ProNumber: val.ProNumber,
            price: val.price
          } : val;
        })
      )
    })
  }
  const updateStorePronumber = (id) => {
    axios.put('http://178.128.119.167:3001/updatepro', { ProNumber: newProNumber, id: id }).then((response) => {
      setStoreList(
        storeList.map((val) => {
          return val.id == id ? {
            id: val.id,
            name: val.name,
            linename: val.linename,
            Pic: val.Pic,
            exp: val.exp,
            ProNumber: newProNumber,
            price: val.price
          } : val;
        })
      )
    })
  }
  const updateStorePrice = (id) => {
    axios.put('http://178.128.119.167:3001/updateprice', { price: newPrice, id: id }).then((response) => {
      setStoreList(
        storeList.map((val) => {
          return val.id == id ? {
            id: val.id,
            name: val.name,
            linename: val.linename,
            Pic: val.Pic,
            exp: val.exp,
            ProNumber: val.ProNumber,
            price: newPrice
          } : val;
        })
      )
    })
  }
  const deleteStore = (id)=>{
    axios.delete(`http://178.128.119.167:3001/delete/${id}`).then((response)=>{
      setStoreList(
        storeList.filter((val)=>{
          return val.id != id;
        })
      )
    })
  }


  const submitHandler = (event) => {
    console.log(addFormData)

    axios.post('http://178.128.119.167:3001/books', addFormData);
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
      <form className={styles.formStyle} 
      //onSubmit={submitHandler}
      
      action="http://178.128.119.167:3001/books"
      enctype = "multipart/form-data"
      method="POST"
      >
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
        
        <div className={styles.formGroup} >
         
          <label htmlFor="Pic">รูปภาพ</label>
          
          <input
            id="Pic"
            type="file"
            placeholder="Add photo"
            className={styles.formControl}
            name="Pic"
            onChange={uploadImage}
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
      <div className="Store">
        <button className="btn btn-primary" onClick={getStore}>  แสดงรายการสินค้า</button>

        {storeList.map((val, key) => {
          return (
            
            <div className="store card">
              <div className="card-body text-left mid-mid">
                 
              <p className="card-text">รูปภาพ:</p> <img src ={'data:image/png;base64,'+ val.Picture} ></img>

                <p className="card-text">ชื่อสินค้า:
                  {val.Product} <input type="mid"
                    placeholder="แก้ไขชื่อสินค้า"
                    onChange={(event) => {
                      setNewName(event.target.value)
                    }}
                  />
                  <button className="btn btn-warning" onClick={() => { updateStoreName(val.id) }}>Save</button> 

                </p>

                <p className="card-text">ชื่อไลน์: {val.Name} <input type="mid"
                  placeholder="แก้ไขชื่อ"
                  onChange={(event) => {
                    setNewLinename(event.target.value)
                  }}
                />
                  <button className="btn btn-warning" onClick={() => { updateStoreLineName(val.id) }}>Save</button></p>
                    
              

                
                <p className="card-text">คำอธิบายสินค้า: {val.Des} <input type="mid"
                  placeholder="แก้ไขคำอธิบายสินค้า"
                  onChange={(event) => {
                    setNewExp(event.target.value)
                  }}
                />
                  <button className="btn btn-warning" onClick={() => { updateStoreExp(val.id) }}>Save</button></p>
                <p className="card-text">จำนวนสินค้า: {val.Total} <input type="mid"
                  placeholder="แก้ไขจำนวนสินค้า"
                  onChange={(event) => {
                    setNewPronumber(event.target.value)
                  }}
                />
                  <button className="btn btn-warning" onClick={() => { updateStorePronumber(val.id) }}>Save</button></p>
                <p className="card-text">ราคาสินค้า: {val.Price} <input type="mid"
                  placeholder="แก้ไขราคาสินค้า"
                  onChange={(event) => {
                    setNewPrice(event.target.value)
                  }}
                />
                  <button className="btn btn-warning" onClick={() => { updateStorePrice(val.id) }}>Save</button></p>
                <div className="d-flex" >
                <button className="btn btn-danger" onClick={() => { deleteStore(val.id) }}>Delete</button>   
                </div>
                 <Appp/>

              </div>
             
            </div>
          )
        })}
      </div>
    </div>

  );
};

export default RegistrationForm;
