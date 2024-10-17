import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch"
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Class = {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;
}

const columns = [
    {
        header: "Class Name", 
        accessor: "name"
    },
    {
        header: "Capacity", 
        accessor: "capacity", 
        className: "table-cell"
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "table-cell"
    },
    {
        header: "Supervisor",
        accessor: "supervisor",
        className: "table-cell"
    },
    {
        header: "Actions", 
        accessor: "actions", 
    },
]

const ClassListPage = () => {

    const renderRow = (item: Class) => (
        <tr key={item.id} className="border-b 
        border-gray-200 even:bg-slate-50 text-sm 
        hover:bg-purpleLight">
            <td className="flex items-center gap-4 p-4">
                { item.name }
            </td>
            <td>{ item.capacity }</td>
            <td>{ item.grade }</td>
            <td>{ item.supervisor }</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center 
                        justify-center rounded-full bg-mySky">
                            <Image src="/edit.png" alt="" 
                            width={16} height={16} />
                        </button>
                    </Link>
                    {   role === "admin" && (
                        <button className="w-7 h-7 flex items-center 
                        justify-center rounded-full bg-myPurple">
                            <Image src="/delete.png" alt="" 
                            width={16} height={16} />
                        </button>
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
                    All Classes
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
                            <button className="w-8 h-8 flex items-center 
                                justify-center rounded-full bg-myYellow">
                                <Image src="/plus.png" 
                                alt="" width={14} height={14}/>
                            </button>
                            )
                        }
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={classesData} />    
            <Pagination />
        </div>
    )
}

export default ClassListPage