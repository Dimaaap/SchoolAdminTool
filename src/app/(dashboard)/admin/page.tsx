import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-row">
            <div className="w-2/3">
                <div className="flex gap-4 justify-between 
                flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>

                <div className="flex gap-4 flex-row">
                    <div className="w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    <div className="w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            <div className="w-1/3 flex flex-col 
            gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default AdminPage