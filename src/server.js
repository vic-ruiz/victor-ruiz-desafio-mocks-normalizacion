import express from "express";
import routesCart from "./routes/routesCart.js";
import routesProducts from "./routes/routesProducts.js";
import ProductsMock from "./mocks/productsMocks.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/api/productos", routesProducts);
app.use("/api/carritos", routesCart);

app.get('/api/productos-test',async(req,res)=>{
  const pMocker = new ProductsMock(5);
  const productos = pMocker.randomProducts();
  res.render('pages/list',{productos}) 
})

const server = app.listen(PORT, () => {
  console.log(` 🚀 Server started at http://localhost:${PORT}`);
});

server.on("error", (err) => console.log(err));
