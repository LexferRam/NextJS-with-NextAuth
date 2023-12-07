'use client'
import './App.css'
import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data'

function SchedulerComponent() {
  // let calendarId: string = '998b23e34d8294ff91ae997974299fcd20e32d5d006da8afe320b3b47bd3fc77%40group.calendar.google.com' 
  let calendarId: string = 'es.ve%23holiday%40group.v.calendar.google.com' 
  let apiAccessKey: string = 'AIzaSyCLj3Toinc0MadxFRtBJwu_ORI6-l4JGHQ'

  let remoteData: DataManager = new DataManager({
    url: 'https://www.googleapis.com/calendar/v3/calendars/'+calendarId+'/events?key='+apiAccessKey,
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  }) 

  function onDataBinding(e: Record<string, any>): void{
    console.log(e.result.items)
    let items: Record<string, any>[] = (e.result as Record<string, Record<string, any>[]>).items
    let schedulerData: Record<string, any>[] = [] 

    if (items.length > 0){
      for(let event of items){
        let isAllday: boolean = !event.start.dateTime
        let start: string = event.start.dateTime as string
        let end: string = event.end.dateTime as string
        
        if(isAllday){
          start = event.start.date as string
          end = event.end.date as string
        }

        schedulerData.push({
          Id:        event.id,
          Subject:   event.summary,
          StartTime: new Date(start),
          EndTime:   new Date(end),
          IsAllDay:  isAllday
        })
      }
    }
    e.result = schedulerData
  }

  return (
    <>
      {/* <Home />
      {JSON.stringify(user,null,2)} */}
      <ScheduleComponent 
        width='900px'
        height='650px'
        currentView='Month'
        eventSettings={{
          dataSource: remoteData
        }}
        dataBinding={onDataBinding}
        readonly={true}
        className='rounded-lg'
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}>

        </Inject>
      </ScheduleComponent>
    </>
  )
}

export default SchedulerComponent
