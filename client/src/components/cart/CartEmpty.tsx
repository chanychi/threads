import emptybag from '@/assets/emptybag.png';

const CartEmpty = () => {
  return (
   <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src={emptybag}
          alt="emptybag/img"
          className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'
        />

      </div>
   </>
  )
}

export default CartEmpty