import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../entities/api/home/home'

import heart from '#/heart small.png'
import look from '#/Quick View.png'
import { addToCart } from '../../entities/api/cart/cart'

export default function Products() {

  const product = useSelector((state)=>state.home.dataProduct)
  const dispatch = useDispatch()
  
  
  const [age, setAge] = useState('')
  const handleChange = event => {
    setAge(event.target.value)
  }

 useEffect(() => {
  
  dispatch(getProduct())
 }, []);

 const handleAdd = (id) => {
        if (localStorage.getItem("token") != null) {
          dispatch(addToCart(id));
        } else {
          navigate("/log-in");
        }
      };




  return (
    <>
      <div className='flex justify-around items-center mt-[50px]'>
        <h1 className='md:block hidden'>
          <span className='text-gray-400'>Home /</span>Explore our Products
        </h1>
        <Box sx={{ width: '300px' }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Age'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <section className='flex md:justify- flex-wrap mt-[80px] items-start'>
        <aside className='m-auto'>
          <div className='w-[300px]'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1-content'
                id='panel1-header'
              >
                <Typography component='span'>
                  {' '}
                  <b>Category</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className='flex flex-col gap-[30px]'>
                  <li>All products</li>
                  <li>Electronics</li>
                  <li>Home & Lifestyle</li>
                  <li className='text-[#DB4444]'>See all</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2-content'
                id='panel2-header'
              >
                <Typography component='span'>
                  <b>Brands</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className='flex flex-col gap-[30px]'>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Samsung
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Apple
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Huawei
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Pocco
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Lenovo
                  </li>
                  <li className='text-[#DB4444]'>See all</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel3-content'
                id='panel3-header'
              >
                <Typography component='span'>
                  <b>Features</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
              <ul className='flex flex-col gap-[30px]'>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Metallic
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Plastic cover
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> 8GB Ram
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Super power
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='checkbox' /> Large Memory
                  </li>
                  <li className='text-[#DB4444]'>See all</li>
                </ul>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel3-content'
                id='panel3-header'
              >
                <Typography component='span'>
                  <b>Price range</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <input type='range' name='' id='' className='w-[260px]' />
                <div className='flex gap-[10px] mt-[30px]'>
                  <TextField
                    id='outlined-basic'
                    label='Min'
                    variant='outlined'
                  />
                  <TextField
                    id='outlined-basic'
                    label='Max'
                    variant='outlined'
                  />
                </div>
                <Button
                  color='inherit'
                  sx={{ width: '250px', marginTop: '20px' }}
                  variant='outlined'
                >
                  Outlined
                </Button>
              </AccordionDetails>
              <AccordionActions></AccordionActions>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel3-content'
                id='panel3-header'
              >
                <Typography component='span'>
                  <b>Condition</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className='flex flex-col gap-[30px]'>
                  <li className='flex items-center gap-[10px]'>
                    <input type='radio' /> Any
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='radio' /> Refurbished
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='radio' /> Brand new
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='radio' /> Old items{' '}
                  </li>
                  <li className='flex items-center gap-[10px]'>
                    <input type='radio' /> Large Memory
                  </li>
                  <li className='text-[#DB4444]'>See all</li>
                </ul>
              </AccordionDetails>
              <AccordionActions></AccordionActions>
            </Accordion>
            
          </div>
        </aside>

          <aside className=' flex flex-wrap w-[70%] gap-[20px] justify-start m-auto md:m-0 mt-[40px]'>
            {product.map((el)=>{
              return(
                  <div key={el.id} className="relative group overflow-hidden w-[40%] bg-white p-4 rounded-xl shadow hover:shadow-md transition-all duration-300">
                
                              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                                -{el.discountPrice}%
                              </div>
                
                              <div className="absolute top-2 right-2 flex flex-col gap-2">
                                <div className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                                  <img src={heart} alt="Like" className="w-4 h-4" />
                                </div>
                                <div className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                                  <img src={look} alt="View" className="w-4 h-4" />
                                </div>
                              </div>
                
                              <div className="w-full h-40 flex items-center justify-center">
                                <img
                                  src={'http://37.27.29.18:8002/images/' + el.image}
                                  alt={el.productName}
                                  className="max-h-full object-contain"
                                />
                              </div>
                
                              <h3 className="mt-4 text-sm font-medium">{el.productName}</h3>
                              <div className="mt-1 flex items-center gap-2">
                                <span className="text-red-500 font-semibold">${el.price}</span>
                              </div>
                                <div className="text-yellow-400 text-sm mt-1">⭐⭐⭐⭐⭐ </div>
                
                              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">

                                <button className="w-full bg-black text-white py-2 rounded-b-xl text-sm font-medium"
                                onClick={()=>handleAdd(el.id)}>
                                  Add To Cart
                                </button>
                              </div>
                            </div>
              )
            })}
            
          </aside>
      </section>
    </>
  )
}