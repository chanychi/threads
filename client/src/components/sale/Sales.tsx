import Item from "./Item";
import Title from '../topstory/Title'
import { SalesItem } from "@/interfaces/salesitem.d";


interface SalesProps {
  ifExists?: boolean;
  endpoint: SalesItem;
}

const Sales = ({ ifExists = false, endpoint: { title, items } }: SalesProps) => {

  return (
   <>
      <div className='nike-container mt-16'>
        <Title title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {items?.map((item, i) => {
            return <Item {...item} key={i} ifExists={ifExists} id={item.id}/>
          })}
        </div>
      </div>
   </>
  )
}

export default Sales