import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch"
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Event = {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
}

const columns = [
    {
        header: "Title", 
        accessor: "title"
    },
    {
        header: "Class", 
        accessor: "class", 
        className: "table-cell"
    },
    {
        header: "Date",
        accessor: "date",
        className: "table-cell"
    },
    {
        header: "Start Time",
        accessor: "startTime",
        className: "table-cell",
    },
    {
        header: "End Time",
        accessor: "endTime",
        className: "table-cell"
    },
    {
        header: "Actions",
        accessor: "action"
    }
]

const EventListPage = () => {

    const renderRow = (item: Event) => (
        <tr key={item.id} className="border-b 
        border-gray-200 even:bg-slate-50 text-sm 
        hover:bg-purpleLight">
            <td className="flex items-center gap-4 p-4">
                { item.title }
            </td>
            <td>{ item.class }</td>
            <td>{ item.date }</td>
            <td>{ item.startTime }</td>
            <td>{ item.endTime }</td>
            <td>
                <div className="flex items-center gap-2">
                    {   role === "admin" && (
                        <>
                            <FormModal table="event" type="update" data={item} />
                            <FormModal table="event" type="delete" data={item.id} />
                        </>
                        )
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className="bg-white p-4 
        rounded-md flex-1 m-4 mt-0">
            <div className="flex items-center 
            justify-between">
                <h1 className="text-lg font-semibold">
                    All Events
                </h1>
                <div className="flex flex-row items-center 
                gap-4 w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center 
                        justify-center rounded-full bg-myYellow">
                            <Image src="/filter.png" 
                            alt="" width={14} height={14}/>
                        </button>
                        <button className="w-8 h-8 flex items-center 
                        justify-center rounded-full bg-myYellow">
                            <Image src="/sort.png" 
                            alt="" width={14} height={14}/>
                        </button>
                        {
                            role === "admin" && (
                            <FormModal table="event" type="create" />
                            )
                        }
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={eventsData} />    
            <Pagination />
        </div>
    )
}

export default EventListPage