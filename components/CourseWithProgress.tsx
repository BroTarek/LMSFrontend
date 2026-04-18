"use client"
import {useRouter} from 'next/navigation'
import React from 'react'

const CourseWithProgress = () => {
    const router = useRouter()
  return (
    
    
                    <div
                        onClick={()=>router.push("/Course")}
                        className="group bg-surface-container-low rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border-none">
                        <div className="aspect-[2/1] overflow-hidden relative">
                            <img alt="Academic Writing"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="Close-up of typed text on white paper, intellectual focus, high-end editorial feel"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0G3RE12EUI_BOOeWdUrDvyDQpvGy7E_woWzk3cjzgvc9CnhBIGPPlsBlOoE1h-XwmBJUERvNaGmnSL6Zh1QiQRozMHfxsI9WU_Lf6XHprQmQlZdjquy1gVZXEdfr8xaAbh_P8i7zjOv72_1Y_sIKiwwyUFsNWDDNlnvXWzJNlTKbaLk82_MtMy1OImiu4ARdT-pxZEyLNpj0MaayY9BB1TQ3R3MDOvP8WqjUlWjVySyKtnA-v1b8Fn8c3DjOIRTAdZyNvBAfS2irg" />
                            <div
                                className="absolute top-4 left-4 bg-primary-container/90 text-on-primary-container px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md">
                                WRITING</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-primary mb-1 leading-tight">Scholarly Writing &amp;
                                Publishing</h3>
                            <p className="text-on-surface-variant text-sm mb-6">Dr. James Wilson</p>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-primary mb-1">
                                    <span>PROGRESS</span>
                                    <span>15%</span>
                                </div>
                                <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                                    <div className="h-full bg-primary-container rounded-full" style={{width: "15%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default CourseWithProgress