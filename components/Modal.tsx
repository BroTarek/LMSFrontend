import React from 'react'
type ModalProps={
    handleModalVisisbility:()=>void
}
const Modal = ({handleModalVisisbility}:ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* <!-- Backdrop -->*/}
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div> 
            {/* <!-- Modal Content --> */}
            <div
                className="relative bg-surface-container-lowest w-full max-w-xl rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,30,64,0.15)] overflow-hidden border border-outline-variant/20">
                {/* <!-- Header -->*/}
                <div className="bg-primary-container p-8 text-white"> 
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-extrabold tracking-tight">Add/Edit Lesson</h2>
                        <button
                            onClick={()=>{handleModalVisisbility()}}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <p className="text-on-primary-container text-sm mt-2 font-medium opacity-80">Update course content for
                        the Scholarly Archive</p>
                </div>
                {/* <!-- Form Body --> */}
                <form className="p-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block ml-1">Lesson
                            Title</label>
                        <input
                            className="w-full bg-surface-container-low border-none rounded-2xl p-4 text-primary font-medium focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 transition-all"
                            placeholder="e.g. Introduction to Phenomenological Reduction" type="text" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block ml-1">Lesson
                            Description</label>
                        <textarea
                            className="w-full bg-surface-container-low border-none rounded-2xl p-4 text-primary font-medium focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 transition-all resize-none"
                            placeholder="Briefly describe the scholarly objectives of this session..."
                            rows={4}></textarea>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block ml-1">Lesson
                            File</label>
                        <div className="relative group">
                            <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" />
                            <div
                                className="border-2 border-dashed border-outline-variant rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-surface-container-low group-hover:bg-surface-container transition-colors">
                                <div
                                    className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">cloud_upload</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-bold text-primary">Click to upload or drag &amp; drop</p>
                                    <p className="text-xs text-on-surface-variant mt-1">PDF, MP4, or ZIP (Max 500MB)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Footer Actions --> */}
                    <div className="flex items-center justify-end gap-4 pt-4 border-t border-outline-variant/10">
                        <button
                            className="px-8 py-3 rounded-full font-bold text-primary hover:bg-surface-container transition-all"
                            type="button">
                            Cancel
                        </button>
                        <button
                            className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
                            type="submit">
                            Save Lesson
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Modal