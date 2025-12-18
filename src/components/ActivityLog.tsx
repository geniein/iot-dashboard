const ACTIVITY_DATA = [
  {
    date: "Thu Dec 18 2025",
    events: [
      { time: "오전 1:08:55", title: "New Device Created", desc: "Device '11' has been created.", type: "device" }
    ]
  },
  {
    date: "Wed Dec 17 2025",
    events: [
      { time: "오후 11:45:19", title: "Device Deleted", desc: "Device 'a' has been deleted.", type: "device" },
      { time: "오후 11:24:41", title: "Device Assigned", desc: "Device 'a' has been assigned to the Application 'a'.", type: "device" },
      { time: "오후 10:38:42", title: "Instance Created", desc: "Instance happy-redshank-6519 was created in Team 'a'", type: "instance" }
    ]
  }
];

export default function ActivityLog() {
  return (
    <div className="bg-white rounded-md border shadow-sm">
      <div className="p-4 border-b flex items-center gap-2 font-semibold text-gray-700">
         <span className="p-1 bg-gray-100 rounded text-gray-500"></span>
         Recent Activity
      </div>
      <div className="divide-y">
        {ACTIVITY_DATA.map((group) => (
          <div key={group.date} className="p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-gray-600">{group.date}</span>
              <span className="text-xs text-gray-400">{group.events.length} Events</span>
            </div>
            <div className="space-y-6 ml-2">
              {group.events.map((event, idx) => (
                <div key={idx} className="flex gap-4 text-sm relative border-l-2 border-gray-100 pl-6 pb-2">
                  <div className="absolute -left-[9px] top-0 bg-white p-0.5">
                    <div className="w-4 h-4 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                  <span className="text-gray-400 w-24 tabular-nums">{event.time}</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">{event.title}</p>
                    <p className="text-gray-500">{event.desc}</p>
                  </div>
                  <span className="text-xs text-gray-400">This Team</span>
                  <span className="text-xs text-gray-300">a</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}