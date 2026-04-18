"use client"
import React from 'react'
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from './ui/menubar'

const CourseCard = () => {
    return (
        <>
            <div
                className="group bg-surface-container-lowest rounded-3xl overflow-hidden hover:shadow-[0px_12px_32px_rgba(0,51,102,0.06)] transition-all duration-500 relative">

                {/* Three Dots Icon - Top Right */}
                <div className="absolute top-4 right-4 z-10">
                    <Menubar className="border-none bg-transparent p-0">
                        <MenubarMenu>
                            <MenubarTrigger className="p-0">
                                <div
                                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-gray-700">more_vert</span>
                                </div>
                            </MenubarTrigger>
                            <MenubarContent 
                                className="w-64"
                                align="end"  // Aligns to the right edge
                                sideOffset={5}  // Adds small gap
                            >
                                <MenubarCheckboxItem>Enroll in Course</MenubarCheckboxItem>
                                <MenubarSeparator />
                                <MenubarItem>View Details</MenubarItem>
                                <MenubarItem>Share Course</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem className="text-red-600">Report</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>

                <div className="aspect-[16/9] overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        data-alt="Close up of digital marketing analytics on tablet with vibrant charts and graphs in a bright modern office"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT0l_f80vRIFeA_EQycbxc5wmsxeJUaWoBFPyD30qoGcC-QbF_sVDz0-XQgbsAGNo0NDB6voUQb60qjENgFoxaQbuhmQpIUj7wGZl8QSK1VCtMhZVgmAkn497i9rwqXKi5cxNV3DslInXKrr-VXLc-tB30-HXqvsLY-g6R3rkDQnM-pBQWmvapW7tWYZYLhBifISTb097QR5bSMCdM5x2arnWw19c7nf5TqnGgwHg92T4TWuWb4p3N-si0-9tv2-7J5EJsNxf_rvXi" />
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <img className="w-10 h-10 rounded-full object-cover"
                            data-alt="Portrait of professional female mentor with confident expression in editorial style photography"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuV34TbXBNAlqWFbLBD1eUubAFQKt1qxeeYEOCjQdj1vK-uXIYRk90AojdYW-ajWzs13JjBKF-XBgW8zZlhFPaFHJFS_IYSrMzUd_aTtjrW9BBnwstvCIJ41EKp_f-AbN3GtyGkttZ9HV4yUN35-ZNitmuYWnP2MB6Bs-Umy0HNmPvRAfJcEeyNnxmzKeJdyNK_NqZCvlFv726BclvKRmOWmi_UpspCTS634QlUFiBZXOLuAMDcdwqujvb6bAI0h_OTj6y7YwrJpZ8" />
                        <span className="text-on-surface-variant font-medium text-sm">Sarah Ali</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-6 leading-snug">Master Social Media Marketing
                        Platforms</h3>
                    <div className="flex justify-between items-center pt-4 border-t border-surface-container">
                        <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            15 Hours
                        </div>
                        <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                            <span className="material-symbols-outlined text-sm text-yellow-500"
                                style={{ fontVariationSettings: "FILL 1" }}>star</span>
                            4.8 (1.5k)
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard