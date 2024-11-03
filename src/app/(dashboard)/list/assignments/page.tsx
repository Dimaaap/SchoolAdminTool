import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch"
import { assignmentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Assignment = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    dueDate: string;
}

const columns = [
    {
        header: "Subject Name", 
        accessor: "name"
    },
    {
        header: "Class Name", 
        accessor: "class", 
        className: "table-cell"
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "table-cell"
    },
    {
        header: "DueDate",
        accessor: "dueDate",
        className: "table-cell"
    },
    {
        header: "Actions", 
        accessor: "actions", 
    },
]

const AssignmentListPage = () => {

    const renderRow = (item: Assignment) => (
        <tr key={item.id} className="border-b 
        border-gray-200 even:bg-slate-50 text-sm 
        hover:bg-purpleLight">
            <td className="flex items-center gap-4 p-4">
                { item.subject }
            </td>
            <td>{ item.class }</td>
            <td>{ item.teacher }</td>
            <td>{ item.dueDate }</td>
            <td>
                <div className="flex items-center gap-2">
                    {   role === "admin" && (
                        <>
                            <FormModal table="assignment" type="update" data={item} />
                            <FormModal table="assignment" type="delete" data={item.id} />
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
                    All Assignments
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
                            <FormModal table="assignment" type="create" />
                            )
                        }
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={assignmentsData} />    
            <Pagination />
        </div>
    )
}

export default AssignmentListPage