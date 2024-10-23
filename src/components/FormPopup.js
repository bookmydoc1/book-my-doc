import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function FormPopup({ isOpen, onOpen, onOpenChange }) {
    const [formData, setFormData] = useState({ type: 'single' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async () => {
        if (!formData?.doctor_name || !formData?.clinic_name || !formData?.mobile_number || !formData?.email) {
            alert('Please fill all the required fields');
            return;
        }
        console.log('formData', formData);
    }
    useEffect(() => {
        setFormData({ type: 'single' })
    }, [isOpen])

    return (
        <>
            <Modal isOpen={isOpen} size="lg" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className="pt-3">
                                    <div className="flex gap-4 mb-1">
                                        <img className='w-6 h-8' src="/images/logo-only.svg" alt="logo" />
                                        <p className='text-black text-xl text-center md:text-2xl font-semibold'>Your Free Journey Starts Here!</p>
                                    </div>
                                    <p className="text-gray text-[13px]">Enter these details to get started for free with Book MyDoc!</p>
                                    <form className="mt-4" action="">
                                        <div className="flex flex-col md:flex-row gap-4 select-none">
                                            <label className={`flex items-center ${formData?.type === 'single' ? 'bg-[#DCF2E1]' : ''} border border-[#DCF2E1] p-2 rounded-lg w-max md:w-full`}>
                                                <input
                                                    type="radio"
                                                    name="radioGroup"
                                                    className="hidden peer"
                                                    checked={formData?.type === 'single'}
                                                    value="single"
                                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                                />
                                                <div className="w-5 h-5 border-2 border-primary rounded-full peer-checked:border-secondary flex justify-center items-center">
                                                    <div className={`w-3 h-3 rounded-full ${formData?.type === 'single' ? 'bg-secondary' : ''}`}></div>
                                                </div>
                                                <span className="ml-2 text-sm font-medium text-black">Setup for Single Doctor</span>
                                            </label>

                                            <label className={`flex items-center ${formData?.type === 'multi' ? 'bg-[#DCF2E1]' : ''} border border-[#DCF2E1] p-2 rounded-lg w-max md:w-full`}>
                                                <input
                                                    type="radio"
                                                    name="radioGroup"
                                                    className="hidden peer"
                                                    checked={formData?.type === 'multi'}
                                                    value="multi"
                                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                                />
                                                <div className="w-5 h-5 border-2 border-primary rounded-full peer-checked:border-secondary flex justify-center items-center">
                                                    <div className={`w-3 h-3 rounded-full ${formData?.type === 'multi' ? 'bg-secondary' : ''}`}></div>
                                                </div>
                                                <span className="ml-2 text-sm font-medium text-black">Setup for Multi Doctors</span>
                                            </label>
                                        </div>
                                        <div className="relative border border-[#DCF2E1] mt-5 rounded-full">
                                            <label className="absolute top-0 left-4 w-max bg-white text-sm -translate-y-[50%] font-bold px-1">Doctor name*</label>
                                            <div className="p-3 pl-5">
                                                <input name='doctor_name' onChange={handleChange} placeholder="Type here..." className="w-full focus:ring-0 focus:outline-none text-[16px]" type="text" />
                                            </div>
                                        </div>
                                        <div className="relative border border-[#DCF2E1] mt-5 rounded-full">
                                            <label className="absolute top-0 left-4 w-max bg-white text-sm -translate-y-[50%] font-bold px-1">Clinic name*</label>
                                            <div className="p-3 pl-5">
                                                <input name='clinic_name' onChange={handleChange} placeholder="Type here..." className="w-full focus:ring-0 focus:outline-none text-[16px]" type="text" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
                                            <div className="relative border border-[#DCF2E1] mt-5 rounded-full">
                                                <label className="absolute top-0 left-4 w-max bg-white text-sm -translate-y-[50%] font-bold px-1">Mobile Number*</label>
                                                <div className="p-3 pl-5">
                                                    <input name='mobile_number' onChange={handleChange} placeholder="Type here..." className="w-full focus:ring-0 focus:outline-none text-[16px]" type="number" max={999999999} />
                                                </div>
                                            </div>
                                            <div className="relative border border-[#DCF2E1] mt-5 rounded-full">
                                                <label className="absolute top-0 left-4 w-max bg-white text-sm -translate-y-[50%] font-bold px-1">Email ID*</label>
                                                <div className="p-3 pl-5">
                                                    <input name='email' onChange={handleChange} placeholder="Type here..." className="w-full focus:ring-0 focus:outline-none text-[16px]" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="" color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button className="bg-primary" color="primary" onPress={handleSubmit}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}