import Image from "next/image"
import { useState } from "react";
import Calendar from "react-calendar/src/Calendar.jsx"
import EventList from "./EventList";
import EventCalender from "./EventCalender";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendarContainer = async({searchParams}: {searchParams: {[keys:string]: string | undefined}}) => {
        const [value, onChange] = useState<Value>(new Date());
    const {date} = searchParams;
  return (
    <div className='bg-white p-4 rounded-md'>
        {/* <Calendar onChange={onChange} value={value} /> */}
        <EventCalender/>
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold my-4">Events</h1>
            <Image src={'/moreDark.png'} alt="" width={20} height={20}/>
        </div>
        <div className="flex flex-col gp-4">        
            <EventList dataParam={date}/>
        </div>
    </div>
  )
}

export default EventCalendarContainer