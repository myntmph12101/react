import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./components/ProductsList";
import TodoAdd from "./components/TodoAdd";
import Routes from "./routes";
import { useEffect, useState } from "react";
import ProductAPI from "./api/productAPI";
import CategoryAPI from "./api/categoryAPI";
import Footer from "./components/Footer";
import { uploadFile } from "./helpers/firebaseClient";
import BlogAPI from "./api/blogAPI";
import ContactAPI from "./api/contactAPI";

function App() {
  //Nếu ueState bị thay đổi thì compenent sẽ bị rerender lại
  const [products, setProducts] = useState([]); //b1
  const [categories, setCategories] = useState([]); //b1
  const [blogs, setBlogs] = useState([]); //b1
  const [contacts, setContacts] = useState([]); //b1

  //b3
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // []:dependency
  // nếu dependency là 1 mảng rỗng thì useEffect sẽ chạy 1 lần
  // nếu dependency k tồn tại thì sẽ chạy sau mỗi lần State thay đổi

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categories } = await CategoryAPI.getAll();
        setCategories(categories.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: blogs } = await BlogAPI.getAll();
        setBlogs(blogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: contacts } = await ContactAPI.getAll();
        setContacts(contacts.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addProduct = async (item) => {
    try {
      const image = item.photo[0];
      const url = await uploadFile(image.name, image);
      const { data: product } = await ProductAPI.add({ ...item, photo: url });
      setProducts([...products, product.data]);
    } catch (error) {
      console.log(error.response.message);
    }
  };
  const editProduct = async (product, id) => {
    try {
      const data = await ProductAPI.update(product, id);
      const newProduct = products.map((item) =>
        item._id == product._id ? product : item
      );
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const editCategory = async (id, category) => {
    try {
      await CategoryAPI.update(id, category);
      const newCategory = categories.map((item) =>
        item._id == category._id ? category : item
      );
      setCategories(newCategory);
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = async (item) => {
    try {
      const { data: category } = await CategoryAPI.add(item);
      setCategories([...categories, category.data]);
    } catch (error) {
      console.log(error.response.message);
    }
  };

  const addContact = async (item) => {
    try {
      const { data: contact } = await ContactAPI.add(item);
      setContacts([...contacts, contact.data]);
    } catch (error) {
      console.log(error.response.message);
    }
  };

  const removeProduct = async (id) => {
    const data = await ProductAPI.remove(id);
    console.log(data);
    const newProducts = products.filter((product) => product._id != id);//tạo 1 mảng mới sau khi xóa
    setProducts(newProducts); //set lại
  };
  const removeCategory = async (id) => {
    const data = await CategoryAPI.remove(id);
    console.log(data);
    const newCategories = categories.filter((category) => category._id != id);
    setCategories(newCategories);
  };
  const removeContact = async (id) => {
    const data = await ContactAPI.remove(id);
    console.log(data);
    const newContact = contacts.filter((contact) => contact._id != id);
    setContacts(newContact);
  };

  //b2
  return (
    <div className=' container mx-auto'>
      <div>
        <Routes  //thuộc tính={giá trị}
          products={products}
          blogs={blogs}
          contacts={contacts}
          onDeleteProduct={removeProduct}
          editCate={editCategory}
          editPro={editProduct}
          onDeleteCategory={removeCategory}
          onDeleteContact={removeContact}
          categories={categories}
          addContact={addContact}
          addPro={addProduct}
          addCate={addCategory}
        />
        <Footer />
      </div>

    </div>
  );
}

export default App;

// <div className="App">
//       <div>
//         <TodoAdd onAdd={addItem} />
//         <TodoList todos={todos} onDelete={removeItem} />
//         {status ? <div style={{ background: color, width: '200px', height: '200px' }}></div> : ''}
//       </div>
//       <button onClick={() => removeItem(2)}> removeItem</button>
//       <button onClick={() => addItem(obj)}>addItem</button>
//     </div>

// else {
//   const image = item.photo[0];

//   const url = await uploadFile(image.name, image);
//   const product = {
//       name: document.querySelector("update-name").value,
//       photo: url
//   }
//   editPro(product, id);
//   history.push("/admin/products")
// }
