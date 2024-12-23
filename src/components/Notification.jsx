import { notification1 } from '../assets'
import { notificationImages } from "../constants";

const Notification = ({className , title}) => {
  return (
    <div className={`${className || ""} flex backdrop-blur p-4 pr-6 bg-n-9/40 items-center border border-n-1/10 rounded-2xl gap-5`}>
        <img
         src={notification1}
         width={62}
         height={62}
         alt='image'
         className='rounded-xl'
        />

        <div className='flex-1 '>
          <h6 classsName="mg-1 font-semibold text-base">{title}</h6>
        </div>
    </div>
  )
}

export default Notification