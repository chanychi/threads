import { FooterTitle as TitleProps } from "@/interfaces/footer.d";

const Title = ({ title }: TitleProps) => {
  return (
   <>
      <div className='grid items-start'>
        <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg text-left'>{title}</h1>
      </div>
   </>
  )
}

export default Title