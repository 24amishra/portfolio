'use client'



// see https://tailwindui.com/components/application-ui/overlays/modal-dialogs
//for more information on the modal code structure
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


const Example = ({isVisible,onClose,whichState}) =>{
  const [open, setOpen] = useState(true)
console.log(whichState)

  switch(whichState){


    case 1:
        var string = 'Risk/Fraud Tech Intern under Joe Burling.'
        break;

    case 2:
        console.log('worked')
        var string = 'Work on maintaining and updating club website, partcipating in board meetings, and helping drive club growth. Utilized Tailwind, Astro, and React.'
        break;
        
    case 3:
        var string = 'Working with a team to process and utilize sensor data using Pandas, NumPy, and ROS. Lead Data Prep Sub-Team to complete data conversion and annotation using NN and CV models. Utilizing the YOLO8 framework for use in object detection, visual mapping, and data analysis'
        
        break;
    case 4:
        var string = 'dentvision';
        break;
    
    case 5:
        var string = 'mm pred'
        break;
    case 6:
        var string = 'scheddy'
        break

  }
  








  if (!isVisible){
  
    return null;
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)} 
    className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start"> 
                
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  Description
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    {string}


                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button onClick={onClose} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >Close Popup </button>
            
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
};

export default Example;