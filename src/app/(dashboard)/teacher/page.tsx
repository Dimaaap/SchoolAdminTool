import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"

const TeacherPage = () => {
    return (
        <div className="p-4 flex gap-4 
        flex-row flex-1">
            <div className="w-2/3">
                <div className="h-full bg-white 
                p-4 rounded-md">
                    <h1 className="text-xl font-semibold">
                        Schedule
                    </h1>
                    <BigCalendar /> 
                </div>
            </div>
            
            <div className="w-1/3 flex flex-col 
            gap-8">
                <Announcements />
            </div>
        </div>
    )
}

export default TeacherPage