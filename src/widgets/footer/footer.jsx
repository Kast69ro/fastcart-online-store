
import social from '#/Frame 741.png'



export default function Footer() {
  return (
    <div className='bg-[#000] text-[#fff] p-[30px] flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:p-[50px_30px] mt-[50px] max-w-[1920px] mx-auto w-full   '>
      <div>
        <h3>Exclusive</h3>
        <h5>Subscribe</h5>
        <p>Get 10% off your first order</p>
        <input className='p-[5px] border rounded' type="text" placeholder='Enter your email' />
      </div>
      <div>
        <h3>Support</h3>
        <h5>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</h5>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div>
        <h3>Account</h3>
        <h5>My Account</h5>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div>
        <h3>Quick Link</h3>
        <h5>Privacy Policy</h5>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div>
        <h3>Social</h3>
        <div>
            <img src={social} alt="" />
        </div>
       
      </div>
    </div>
  )
}
