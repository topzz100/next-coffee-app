import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";
export default async function handler(req, res){
const {method} = req
await dbConnect()

if(method === 'POST'){
  try{
    const order = await Order.create(req.body)
    res.status(201).json(order)
  }catch(err){
    res.status(500).json(err)
  }
}
// if(method === 'GET'){
//   try{
//     const products = await Product.find()
//     res.status(200).json(products)
//   }catch(err){
//     res.status(500).json(err)
//   }
// }
}